/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-27 15:35:12
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-03-01 09:23:30
 * @Description:
 */

import { useEffect, useState } from 'react';

/**
 * @description: 去除对象空值
 * @param {Object} object
 * @return {Object} result
 */
export const cleanObject = (object: any) => {
  if (Object.prototype.toString.call(object) !== '[object Object]') {
    return console.error('not Object');
  }
  const result = { ...object };
  Object.keys(result).forEach(key => {
    let val = result[key];
    if (val === 0 ? false : !val) {
      delete result[key];
    }
  });
  return result;
};

/**
 * @description: 将对象转化为get参数
 * @param {Object} object
 * @return {String}
 */
export const setUrlParams = (object: any) => {
  const result = { ...object };
  let str = '';
  Object.keys(result).forEach(key => {
    let val = result[key];
    str += `${key}=${val}&`;
  });
  return str.substring(0, str.length - 1);
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback && callback();
  }, []);
};

/**
 * @description: 节流
 * @param {*} value
 * @param {Number} delay
 * @return {*}
 */
export const useDebounce = (value: any, delay: number = 500) => {
  // let timer = null;
  // if (timer) {
  //   clearTimeout(timer);
  // }
  // timer = setTimeout(() => {
  //   return value;
  // }, delay);
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceVal(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceVal;
};
