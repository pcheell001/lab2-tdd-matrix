
const { expect } = require('chai');
const matrix = require('../src/matrix');

describe('Транспонування матриць', function () {

  it('Транспонування матриці 2x3', function () {
    const A = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    const expected = [
      [1, 4],
      [2, 5],
      [3, 6]
    ];

    const result = matrix.transpose(A);

    expect(result).to.deep.equal(expected);
  });

  it('Транспонування матриці 1x1', function () {
    const A = [[7]];

    const expected = [[7]];

    const result = matrix.transpose(A);

    expect(result).to.deep.equal(expected);
  });

});
