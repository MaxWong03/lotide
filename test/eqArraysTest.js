const assert = require('chai').assert;
const eqArrays = require('../src/eqArrays');

describe('eqArrays(arrayActual, arrayExpected)', () => {
  it('should return true when passed [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return false when passed [1, 2, 3] and [1, 2, 3, 4]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });
  it('should return true when passed [1, [2, 3], 4, [5]] and [1, [2, 3], 4, [5]]', () => {
    assert.isTrue(eqArrays([1, [2, 3], 4, [5]], [1, [2, 3], 4, [5]]));
  });
  it('should return false when passed [1, [2, 3], 4, [5]] and [1, [2, 3, 4], [5]]', () => {
    assert.isFalse(eqArrays([1, [2, 3], 4, [5]], [1, [2, 3, 4], [5]]));
  });
  it('should return true when passed [] and []', () => {
    assert.isTrue(eqArrays([], []));
  });
  it('should return false if passed [1, 2, 3] and 1', () => {
    assert.isFalse(eqArrays([1, 2, 3], 1));
  });
  it('should return false if passed 1 and [1, 2, 3]', () => {
    assert.isFalse(eqArrays(1, [1, 2, 3]));
  });
  it('should return undefined if only passed one array', () => {
    assert.isUndefined(eqArrays([1, 2, 3]));
  });
  it('should return undefined passed nothing', () => {
    assert.isUndefined(eqArrays());
  });
});