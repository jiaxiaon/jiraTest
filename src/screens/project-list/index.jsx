/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:24:27
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-28 13:44:50
 * @Description:
 */

import { List } from './list';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import React from 'react';
import { cleanObject, setUrlParams, useDebounce, useMount } from 'utils/util';
// 所有hock只能在hock或者react组件中运行

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 500)
  useEffect(() => {
    fetch(`${apiUrl}/projects?${setUrlParams(cleanObject(debounceParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
