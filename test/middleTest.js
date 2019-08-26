const middle = require('../src/middle');
const assert = require('chai').assert;

//test case
describe('middle', () => {
  it('should return [2] when input array is [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('it should return [2,3] when input array is [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('it should return empty array when input array length is <=2 ', () => {
    assert.deepEqual(middle([1,2]), []);
  });
  it('it should return empty array when input array length is <=2 ', () => {
    assert.deepEqual(middle([]), []);
  });
  it('it should return empty array when input array length is <=2 ', () => {
    assert.deepEqual(middle([1]), []);
  });
});


/*
it('', () => {

});
*/

