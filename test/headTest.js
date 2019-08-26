const assert = require('chai').assert;
const head = require('../src/head');

describe('#head', () => {
  it('should return undefined if input array is empty', () => {
    const arr = [];
    assert.strictEqual(head(arr), undefined);
  });
  it('should return "Hello" if input array is ["Hello", "Lighthouse", "Labs"]', () => {
    const arr = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(head(arr), 'Hello');
  });
  it('should return 1 if input array is [1,2,3]', () => {
    const arr = [1, 2, 3];
    assert.strictEqual(head(arr), 1);
  });
  it('should return 5 if input array is [5]', () => {
    const arr = [5];
    assert.strictEqual(head(arr), 5);
  });
});