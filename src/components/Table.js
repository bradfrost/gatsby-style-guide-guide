import React from "react";

const Table = ({ table, children }) => {

    return (
        <table className="c-table">
            <thead className="c-table__header">
                <tr>
                    <th>Column title</th>
                    <th>Column title</th>
                </tr>
                
            </thead>
            <tbody className="c-table__body">
                <tr class="c-table__row">
                    <td class="c-table__cell">
                        TD
                    </td>
                    <td class="c-table__cell">
                        TD
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default Table;
