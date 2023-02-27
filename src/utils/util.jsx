/*
 * @Author: jiaxiaonan
 * @Date: 2023-02-27 15:35:12
 * @LastEditors: jiaxiaonan
 * @LastEditTime: 2023-02-27 16:02:16
 * @Description:
 */
/**
 * @description: 去除对象空值
 * @param {Object} object
 * @return {Object} result
 */
export const cleanObject = object => {
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
export const setUrlParams = (object) => {
  const result = { ...object };
  let str = ''
  Object.keys(result).forEach(key => {
    let val = result[key];
    str += `${key}=${val}&`
  });
  console.log(str.substring(0, str.length - 1))
  return str.substring(0, str.length - 1)
}