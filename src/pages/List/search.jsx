import React, { useEffect, useState } from "react";

// const apiUrl = process.env.REACT_APP_API_URL;
let Search = ({ param, setParam, userList }) => {

    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => {
                setParam({
                    ...param,
                    name: evt.target.value
                })
            }} />
            <select
                value={param.personId}
                onChange={evt => {
                    setParam({
                        ...param,
                        personId: evt.target.value
                    })
                }}
            >
                <option value="">请选择</option>
                {
                    userList.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}

export default Search;