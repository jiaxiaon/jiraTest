/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:26:12
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-28 10:59:56
 * @Description:
 */
import React from 'react';
export const List = ({ list, users }) => {
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
