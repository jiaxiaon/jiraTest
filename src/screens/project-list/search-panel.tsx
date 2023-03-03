/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:27:24
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-28 14:46:24
 * @Description:
 */
import React from 'react';

export interface User {
  id: string;
  name: string;
  email?: string;
  title?: string;
  organization?: string;
}

interface searchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: searchPanelProps['param']) => void;
}
export const SearchPanel = ({ param, setParam, users }: searchPanelProps) => {
  return (
    <form>
      <div>
        {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
        <input
          type='text'
          value={param.name}
          onChange={evt =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={evt =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value=''>负责人</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
