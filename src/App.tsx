/*
 * @Author: jasper
 * @Date: 2023-02-07 14:41:04
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-27 11:39:18
 * @Description:
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ProjectListScreen></ProjectListScreen>
      </header>
    </div>
  );
}

export default App;
