import React from "react";

let Table = ({ list, userList }) => {
    return <table>
        <thead>
            <tr>
                <th>项目名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{userList.find(user => user.id === item.id)?.name}</td>
                </tr>)
            }
        </tbody>
    </table>

}
export default Table;