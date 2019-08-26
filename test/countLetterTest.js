const assert = require('chai').assert;
const countLetters = require('../src/countLetters');

describe('countLetters()', () => {
  it('return {a: 1, b: 1, c: 1} when passed "abc"', () => {
    assert.deepEqual(countLetters('abc'), {a:1, b:1, c:1});
  });
  it('return {a: 2, b: 2, c: 2} when passed "abccba', () => {
    assert.deepEqual(countLetters('abccba'), {a: 2, b: 2, c: 2});
  });
  it('return undefined when passed nothing', () => {
    assert.isUndefined(countLetters());
  });
  it('return {a: 2} when passed "a a"', () => {
    assert.deepEqual(countLetters("a a"), {a: 2});
  });
  it('return undefined when passed ""', () => {
    assert.isUndefined(countLetters(''));
  });
});