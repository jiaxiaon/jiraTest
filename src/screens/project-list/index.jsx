/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:24:27
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-27 15:57:04
 * @Description:
 */

import { List } from './list';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import React from 'react';
import { cleanObject, setUrlParams } from 'utils/util';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: "",
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${setUrlParams(cleanObject(param))}`).then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
