/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:26:12
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-28 14:48:53
 * @Description:
 */
import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface listProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: listProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
