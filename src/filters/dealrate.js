/*
 * @Author: ReedSun 
 * @Date: 2017-05-10 20:54:16 
 * @Last Modified by:   ReedSun 
 * @Last Modified time: 2017-05-10 20:54:16 
 */
export default (num) => {
  if (num === 0) {
    return '暂无'
  } else {
    if ((num + '').length === 1) {
      return num + '.0'
    } else {
      return num
    }
  }
}
