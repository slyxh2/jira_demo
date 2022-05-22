import React, { useEffect, useState } from "react";
import Table from './table';
import Search from './search';
import { cleanObject, handleParams, useDebounce } from 'utils'
const apiUrl = process.env.REACT_APP_API_URL;
let List = () => {
    let [param, setParam] = useState({
        name: '',
        personId: ''
    });
    let [list, setList] = useState([]);
    let debouncedParam = useDebounce(param, 500);
    useEffect(() => {
        fetch(`${apiUrl}/projects${handleParams(cleanObject(debouncedParam))}`).then(async res => {
            let val = await res.json();
            console.log(val)
            if (res.ok) {
                setList(val);
            }
        })
    }, [debouncedParam])
    let [userList, setUser] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            setUser(await res.json());
        })
    }, [])
    return (
        <>
            <Search param={param} setParam={setParam} userList={userList} />
            <Table list={list} userList={userList} />
        </>
    )
};

export default List;