
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || !matrix.length)
    return [];

  var result = new Array();
  for(var i = 0; i < matrix.length; i++)
  {
    if(i % 2 == 0)
      for( var k = 0; k < matrix[i].length; k++)
        result.push(matrix[i][k]);
    else
      for( var k = matrix[i].length - 1; k >= 0; k--)
        result.push(matrix[i][k]);
  }

  return result;
}
