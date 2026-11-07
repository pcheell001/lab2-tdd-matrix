
function add(A, B) {
  return A.map((row, i) =>
    row.map((value, j) => value + B[i][j])
  );
}

module.exports = { add };
