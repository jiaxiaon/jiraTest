/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:24:27
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-27 14:44:19
 * @Description:
 */

import { List } from './list';
import { SearchPanel } from './search-panel';
import { useEffect, useState } from 'react';
import React from 'react';

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`/api1/projects`).then(async res => {
      console.log('🚀 ~ file: index.jsx:27 ~ fetch ~ res:', res);
      if (res.status === 200) {
        setList(await res.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`/api1/users`).then(async res => {
      if (res.status === 200) {
        setUsers(await res.json());
      }
    });
  }, [users]);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
