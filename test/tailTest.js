const assert = require('chai').assert;
const tail = require('../src/tail');


describe('tail()', () => {
  it('should return [2, 3, 4, 5] when passed [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it('should return [] when passed []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('should return undefined when nothing is passed', () => {
    assert.isUndefined(tail());
  });
});