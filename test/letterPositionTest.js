const letterPositions = require('../src/letterPositions');
const assert = require('chai').assert;

describe('letterPositions(sentence)', () => {
  it('it should return {a: [0], b:[1], c:[2]} when passed abc', () => {
    assert.deepEqual(letterPositions('abc'), {a: [0], b:[1], c:[2]});
  });
  it('it should return {a:[0,1], b:[2,3], c:[4,5]} when passed aabbcc', () => {
    assert.deepEqual(letterPositions('aabbcc'), {a:[0,1], b:[2,3], c:[4,5]});
  });
  it('it should return {a:[0,1], b:[3,4], c:[6,7]} when passed aa bb cc', () => {
    assert.deepEqual(letterPositions('aa bb cc'), {a:[0,1], b:[3,4], c:[6,7]});
  });
  it('it should return an empty object if passed an empty string', () => {
    assert.deepEqual(letterPositions(''), {});
  });
  it('it should return undefined if passed nothing', () => {
    assert.isUndefined(letterPositions());
  });
});


