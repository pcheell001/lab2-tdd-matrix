
function sameShape(A, B) {
  return A.length === B.length &&
    A.every((row, i) => row.length === B[i].length);
}

// Общая функция для поэлементных операций
function elementWise(A, B, operation) {
  if (!sameShape(A, B)) {
    throw new Error('Розміри матриць мають збігатися');
  }

  return A.map((row, i) =>
    row.map((value, j) => operation(value, B[i][j]))
  );
}

// Сложение
function add(A, B) {
  return elementWise(A, B, (a, b) => a + b);
}

// Вычитание
function subtract(A, B) {
  return elementWise(A, B, (a, b) => a - b);
}

// Умножение
function multiply(A, B) {
  if (A[0].length !== B.length) {
    throw new Error('Несумісні розміри для множення');
  }

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

// Транспонирование
function transpose(A) {
  return A[0].map((_, j) =>
    A.map(row => row[j])
  );
}

// Экспорт функций
module.exports = {
  add,
  subtract,
  multiply,
  transpose
};
