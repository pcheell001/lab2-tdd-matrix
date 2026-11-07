
const { expect } = require('chai');
const matrix = require('../src/matrix');

describe('Віднімання матриць', function () {

  it('Віднімання двох матриць 2x2', function () {
    const A = [
      [9, 8],
      [7, 6]
    ];

    const B = [
      [1, 2],
      [3, 4]
    ];

    const expected = [
      [8, 6],
      [4, 2]
    ];

    const result = matrix.subtract(A, B);

    expect(result).to.deep.equal(expected);
  });

});
