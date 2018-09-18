import React from "react";

const Table = ({ tableHeaderColumns, tbody, styleModifier }) => {

    return (
        <table className= {"c-table " + styleModifier }>
            <thead className="c-table__header">
                <tr className="c-table__header-row">
                {tableHeaderColumns.map((tableHeaderColumn, index) =>
                    <th className="c-table__header-cell" key={index}>{ tableHeaderColumn }</th>
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
