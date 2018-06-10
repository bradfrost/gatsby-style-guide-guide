import React from "react";
import PrimaryNavItem from "./PrimaryNavItem";
import PrimarySubNavItem from "./PrimarySubNavItem"
import PrimarySubSubNavItem from "./PrimarySubSubNavItem"

const PrimaryNav = ({ data }) => (
    <nav className="c-primary-nav" role="navigation">
        <ul className="c-primary-nav__list" role="tablist" aria-multiselectable="true">
            <PrimaryNavItem href="/getting-started" label="Getting Started" />
			<PrimaryNavItem
                href="/guidelines"
                label="Guidelines"
                subNavItem = {
                    <ul className="c-primary-nav__sublist">
                    {data
                        .filter(post => post.node.frontmatter.group == 'guidelines')
                        .filter(post => post.node.frontmatter.layout =='landing')
                        .map(({ node: post }) => {
                                return (
                                    <PrimarySubNavItem title= 'Overview' url= {post.frontmatter.path} />
                                );
                        })
                    }
                    {data
                        .filter(post => post.node.frontmatter.group == 'guidelines')
                        .filter(post => post.node.frontmatter.layout =='page')
                        .filter(post => post.node.frontmatter.status =='Complete')
                        .map(({ node: post }) => {
                                return (
                                    <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                );
                        })
                    }
                    </ul>
                }
            />
            <PrimaryNavItem
                href="/styles"
                label="Styles"
                subNavItem= {

                    <ul className="c-primary-nav__sublist">
                    {data
                       .filter(post => post.node.frontmatter.group == 'styles')
                       .filter(post => post.node.frontmatter.layout =='landing')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubNavItem title= 'Overview' url= {post.frontmatter.path} />
                               );
                       })
                   }
                   {data
                       .filter(post => post.node.frontmatter.group == 'styles')
                       .filter(post => post.node.frontmatter.layout =='page')
                       .filter(post => post.node.frontmatter.status =='Complete')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                               );
                       })
                   }
                    </ul>
                }
            />
			<PrimaryNavItem
                href="/components"
                label="Components"
                subNavItem= {
                    <ul className="c-primary-nav__sublist">
                        <PrimarySubNavItem title='Overview' url='/components' />
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
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='blocks-and-cards')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
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
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='buttons')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Charts and graphs'
                        url='/components/charts-and-graphs'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='charts-and-graphs')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='charts-and-graphs')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Form controls'
                        url='/components/form-controls'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='form-controls')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='form-controls')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Headers and footers'
                        url='/components/headers-and-footers'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='headers-and-footers')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='headers-and-footers')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Icons'
                        url='/components/icons'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='icons')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='icons')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Interactive'
                        url='/components/interactive'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='interactive')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='interactive')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Lists and collections'
                        url='/components/lists-and-collections'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='lists-and-collections')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='lists-and-collections')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Media'
                        url='/components/media'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='media')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='media')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Messaging'
                        url='/components/messaging'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='messaging')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='messaging')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                            title='Navigation'
                            url='/components/navigation'
                            subSubNavItems={
                                <ul className="c-primary-nav__sublist">
                                {data
                                    .filter(post => post.node.frontmatter.group == 'components')
                                    .filter(post => post.node.frontmatter.subgroup =='navigation')
                                    .filter(post => post.node.frontmatter.layout =='component-category')
                                    .map(({ node: post }) => {
                                            return (
                                                <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                            );
                                    })
                                }
                                {data
                                    .filter(post => post.node.frontmatter.group == 'components')
                                    .filter(post => post.node.frontmatter.subgroup =='navigation')
                                    .filter(post => post.node.frontmatter.layout =='component-detail')
                                    .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                        );
                                    })
                                }
                                </ul>
                            }
                        />
                        <PrimarySubNavItem
                        title='Tables'
                        url='/components/tables'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='tables')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='tables')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                                    );
                                })
                            }
                            </ul>
                        }
                        />
                        <PrimarySubNavItem
                        title='Text'
                        url='/components/text'
                        subSubNavItems={
                            <ul className="c-primary-nav__sublist">
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='text')
                                .filter(post => post.node.frontmatter.layout =='component-category')
                                .map(({ node: post }) => {
                                        return (
                                            <PrimarySubSubNavItem title="Overview" url={post.frontmatter.path} />
                                        );
                                })
                            }
                            {data
                                .filter(post => post.node.frontmatter.group == 'components')
                                .filter(post => post.node.frontmatter.subgroup =='text')
                                .filter(post => post.node.frontmatter.layout =='component-detail')
                                .map(({ node: post }) => {
                                    return (
                                        <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
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
                subNavItem= {
                    <ul className="c-primary-nav__sublist">
                   {data
                       .filter(post => post.node.frontmatter.group == 'utilities')
                       .filter(post => post.node.frontmatter.layout =='component-detail')
                       .map(({ node: post }) => {
                               return (
                                   <PrimarySubSubNavItem title={post.frontmatter.title} url={post.frontmatter.path} />
                               );
                       })
                   }
                    </ul>
                }
                />
			<PrimaryNavItem
            href="/page-templates"
            label="Page Templates"
            />
            <PrimaryNavItem href="/downloads" label="Downloads" />
            <PrimaryNavItem href="/support" label="Support" />
			<PrimaryNavItem href="/contribute" label="Contribute" />
        </ul>
    </nav>
);

export default PrimaryNav;
