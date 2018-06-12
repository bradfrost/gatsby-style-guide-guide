import React from "react";
import PrimaryNavItem from "./PrimaryNavItem";
import PrimarySubNavItem from "./PrimarySubNavItem"

const PrimaryNav = ({ data, toggleStatus }) => (
    <nav className="c-primary-nav" role="navigation">
        <ul className="c-primary-nav__list" role="tablist" aria-multiselectable="true">
            <PrimaryNavItem href="/getting-started" label="Getting Started" toggleStatus={toggleStatus} />
			<PrimaryNavItem
                href="/guidelines"
                label="Guidelines"
                toggleStatus={toggleStatus}
                subNavItem = {
                    <ul className="c-primary-nav__sublist">
                    {data
                        .filter(post => post.node.frontmatter.group == 'guidelines')
                        .filter(post => post.node.frontmatter.layout =='landing')
                        .map(({ node: post }) => {
                                return (
                                    <PrimarySubNavItem title= 'Overview' url= {post.frontmatter.path} toggleStatus={toggleStatus} />
                                );
                        })
                    }
                    {data
                        .filter(post => post.node.frontmatter.group == 'guidelines')
                        .filter(post => post.node.frontmatter.layout =='page')
                        .filter(post => post.node.frontmatter.status =='Complete')
                        .map(({ node: post }) => {
                                return (
                                    <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                );
                        })
                    }
                    </ul>
                }
            />
            <PrimaryNavItem
                href="/styles"
                label="Styles"
                toggleStatus={toggleStatus}
                subNavItem= {

                    <ul className="c-primary-nav__sublist">
                    {data
                       .filter(post => post.node.frontmatter.group == 'styles')
                       .filter(post => post.node.frontmatter.layout =='landing')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubNavItem title= 'Overview' url= {post.frontmatter.path} toggleStatus={toggleStatus} />
                               );
                       })
                   }
                   {data
                       .filter(post => post.node.frontmatter.group == 'styles')
                       .filter(post => post.node.frontmatter.layout =='page')
                       .filter(post => post.node.frontmatter.status =='Complete')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                               );
                       })
                   }
                    </ul>
                }
            />
			<PrimaryNavItem
                href="/components"
                label="Components"
                toggleStatus={toggleStatus}
                subNavItem= {
                    <ul className="c-primary-nav__sublist">
                        <PrimarySubNavItem title='Overview' url='/components' toggleStatus={toggleStatus} />
                        <PrimarySubNavItem
                        title='Blocks and cards'
                        url='/components/blocks-and-cards'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='blocks-and-cards')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='blocks-and-cards')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Buttons'
                        url='/components/buttons'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='buttons')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='buttons')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Charts and graphs'
                        url='/components/charts-and-graphs'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='charts-and-graphs')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='charts-and-graphs')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Form controls'
                        url='/components/form-controls'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='form-controls')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='form-controls')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Headers and footers'
                        url='/components/headers-and-footers'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='headers-and-footers')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='headers-and-footers')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Icons'
                        url='/components/icons'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='icons')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path } toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='icons')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Interactive'
                        url='/components/interactive'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='interactive')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='interactive')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Lists and collections'
                        url='/components/lists-and-collections'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='lists-and-collections')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='lists-and-collections')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Media'
                        url='/components/media'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='media')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='media')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Messaging'
                        url='/components/messaging'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='messaging')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='messaging')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                            title='Navigation'
                            url='/components/navigation'
                            toggleStatus={toggleStatus}
                            subSubNavItems={
                                <ul className="c-primary-nav__sublist">
                                {data
                                    .filter(post => post.node.frontmatter.group == 'components')
                                    .filter(post => post.node.frontmatter.subgroup =='navigation')
                                    .filter(post => post.node.frontmatter.layout =='component-category')
                                    .map(({ node: post }) => {
                                            return (
                                                <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                            );
                                    })
                                }
                                {data
                                    .filter(post => post.node.frontmatter.group == 'components')
                                    .filter(post => post.node.frontmatter.subgroup =='navigation')
                                    .filter(post => post.node.frontmatter.layout =='component-detail')
                                    .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                    })
                                }
                                </ul>
                            }
                        />
                        <PrimarySubNavItem
                        title='Tables'
                        url='/components/tables'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='tables')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='tables')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Text'
                        url='/components/text'
                        toggleStatus={toggleStatus}
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='text')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='text')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                    </ul>
                }
            />
			<PrimaryNavItem
                href="/utilities"
                label="Utilities"
                toggleStatus={toggleStatus}
                subNavItem= {
                    <ul className="c-primary-nav__sublist">
                    {data
                        .filter(post => post.node.frontmatter.group == 'utilities')
                        .filter(post => post.node.frontmatter.layout =='utilities-index')
                        .map(({ node: post }) => {
                                return (
                                    <PrimarySubNavItem title="Overview" url={post.frontmatter.path} toggleStatus={toggleStatus} />
                                );
                        })
                    }
                   {data
                       .filter(post => post.node.frontmatter.group == 'utilities')
                       .filter(post => post.node.frontmatter.layout =='component-detail')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubNavItem title={post.frontmatter.title} url={post.frontmatter.path} toggleStatus={toggleStatus} />
                               );
                       })
                   }
                    </ul>
                }
                />
			<PrimaryNavItem
            href="/page-templates"
            label="Page Templates"
            toggleStatus={toggleStatus}
            />
            <PrimaryNavItem href="/downloads" label="Downloads" toggleStatus={toggleStatus} />
            <PrimaryNavItem href="/support" label="Support" toggleStatus={toggleStatus} />
			<PrimaryNavItem href="/contribute" label="Contribute" toggleStatus={toggleStatus} />
        </ul>
    </nav>
);

export default PrimaryNav;
