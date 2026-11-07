
const { expect } = require('chai');
const matrix = require('../src/matrix');

describe('Перевірка розмірів матриць', function () {

  it('Помилка при додаванні матриць різних розмірів', function () {
    const A = [[1, 2]];
    const B = [[3]];

    expect(() => matrix.add(A, B))
      .to.throw('Розміри матриць мають збігатися');
  });

  it('Помилка при множенні несумісних матриць', function () {
    const A = [[1, 2]];
    const B = [[3, 4]];

    expect(() => matrix.multiply(A, B))
      .to.throw('Несумісні розміри для множення');
  });

});
