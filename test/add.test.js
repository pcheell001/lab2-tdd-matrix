
const { expect } = require('chai');
const matrix = require('../src/matrix');

describe('Додавання матриць', function () {

  it('Додавання двох матриць 2x2', function () {
    const A = [
      [1, 2],
      [3, 4]
    ];

    const B = [
      [5, 6],
      [7, 8]
    ];

    const expected = [
      [6, 8],
      [10, 12]
    ];

    const result = matrix.add(A, B);

    expect(result).to.deep.equal(expected);
  });

});
