
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultMatrix = [];

	if(matrix == null) {
		return resultMatrix;
	}

    if (matrix.length === 0) {
        return resultMatrix;
    }

    for (let i = 0; i < matrix.length; i++) {
        if((i + 1) % 2 !== 0) {
            for (let k = 0; k < matrix[i].length; k++) {
                resultMatrix.push(matrix[i][k]);
            }
        } else {
            for (let k = matrix[i].length - 1; k >= 0; k--) {
                resultMatrix.push(matrix[i][k]);
            }
        }
    }
    return resultMatrix;
}