const assert = require('chai').assert;
const countOnly = require('../src/countOnly');

describe('countOnly(array, obj)', () => {
  it('should return undefined if the input array is ["a"] and input object is {c: true}', () => {
    assert.isUndefined(countOnly(['a'], {c: true}));
  });
  it('should return {a: 2, b: 1} if the input array is ["a", "a", "b"] and input object is {a: true, b: true}', () => {
    assert.deepEqual(countOnly(['a', 'a', 'b'], {a: true, b: true}), {a: 2, b: 1});
  });
  it('should return {a: 2} if the input array is ["a", "a", "b"] and input object is {a: true, b: false', () => {
    assert.deepEqual(countOnly(['a', 'a', 'b'], {a: true, b: false}), {a: 2});
  });
  it('should return undefined if array is empty', () => {
    assert.isUndefined(countOnly([], {a: true}));
  });
  it('should return undefined if object is empty', () => {
    assert.isUndefined(countOnly([1, 2, 3], {}));
  });
});