
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix) === false || matrix.length === 0) {
    return [];
  }
  else {
    let result = [];
    matrix.forEach((element, index) => {
      if (index % 2 !== 0) {
        result = result.concat(element.reverse())
      }
      else {
        result = result.concat(element)
      }
    });
    return result;
  }
}
