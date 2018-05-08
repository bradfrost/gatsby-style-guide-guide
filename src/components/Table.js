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
                <tr className="c-table__row">
                    <td className="c-table__cell">
                        TD
                    </td>
                    <td className="c-table__cell">
                        TD
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default Table;
