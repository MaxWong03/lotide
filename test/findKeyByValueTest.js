const assert = require('chai').assert;
const findKeyByValue = require('../src/findKeyByValue');

describe('findKeyByValue(object, value)', () => {
  it('should return a when passed {a: 1, b: 2, c: 3}, 1', () => {
    assert.deepEqual(findKeyByValue({a: 1, b: 2, c: 3}, 1), 'a');
  });
  it('should return undefined when passed {a: 1, b: 2, c: 3}, 4', () => {
    assert.isUndefined(findKeyByValue({a: 1, b: 2, c: 3}, 4), 'a');
  });
  it('should return undefined if no object is passed', () => {
    assert.isUndefined(findKeyByValue('a'));
  });
  it('should return undefined if no value is passed', () => {
    assert.isUndefined(findKeyByValue({a: 1, b: 2, c: 3}));
  });
  it('should return undefined if nothing is passed', () => {
    assert.isUndefined(findKeyByValue());
  });
});