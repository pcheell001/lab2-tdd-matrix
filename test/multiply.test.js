
const { expect } = require('chai');
const matrix = require('../src/matrix');

describe('Множення матриць', function () {

  it('Множення двох матриць 2x2', function () {
    const A = [
      [1, 2],
      [3, 4]
    ];

    const B = [
      [5, 6],
      [7, 8]
    ];

    const expected = [
      [19, 22],
      [43, 50]
    ];

    const result = matrix.multiply(A, B);

    expect(result).to.deep.equal(expected);
  });

  it('Множення матриць 2x3 та 3x1', function () {
    const A = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    const B = [
      [2],
      [1],
      [3]
    ];

    const expected = [
      [13],
      [31]
    ];

    const result = matrix.multiply(A, B);

    expect(result).to.deep.equal(expected);
  });

});
