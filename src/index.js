// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if ((!Array.isArray(matrix)) || (matrix.length == 0)) {
    return result;
  }

  matrix.forEach((item, i, array) => {
    // i - строка, item - элементы массива строки
    if (i & 1) {
      result = result.concat(item.reverse());
    } else {
      result = result.concat(item);
    }
  });

  return result;
}