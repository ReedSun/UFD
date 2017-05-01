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
