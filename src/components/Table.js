import React from "react";

const Table = ({ tableHeaderColumns, data, tbody, styleModifier }) => {

    return (
        <table className= {"c-table " + styleModifier }>
            <thead className="c-table__header">
                <tr className="c-table__header-row">
                {tableHeaderColumns.map((tableHeaderColumn) =>
                    <th className="c-table__header-cell">{ tableHeaderColumn }</th>
                )}
                </tr>

            </thead>
            <tbody className="c-table__body">
                { tbody }
            </tbody>
        </table>
    )
};

export default Table;
