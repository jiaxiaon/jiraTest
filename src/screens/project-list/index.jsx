/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-23 11:24:27
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-23 11:29:38
 * @Description:
 */

import { List } from './list';
import { SearchPanel } from './search-panel';

export const ProjectListScreen = () => {
    return (
        <div>
            <SearchPanel />
            <List />
        </div>
    );
};
