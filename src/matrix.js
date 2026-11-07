
function add(A, B) {
  return A.map((row, i) =>
    row.map((value, j) => value + B[i][j])
  );
}

function subtract(A, B) {
  return A.map((row, i) =>
    row.map((value, j) => value - B[i][j])
  );
}

function multiply(A, B) {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    const row = [];

    for (let j = 0; j < B[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < A[0].length; k++) {
        sum += A[i][k] * B[k][j];
      }

      row.push(sum);
    }

    result.push(row);
  }

  return result;
}

function transpose(A) {
  return A[0].map((_, j) =>
    A.map(row => row[j])
  );
}

module.exports = {
  add,
  subtract,
  multiply,
  transpose
};
