const assert = require('chai').assert;
const flatten = require('../src/flatten');

describe('flatten', () => {
  it('Flatten nested array [1,2,[3,4],5,[6]] => [1,2,3,4,5,6]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });
  it('Return the orginial array if its not nested', () => {
    assert.deepEqual(flatten([1,2,3]), [1,2,3]);
  });
  it('Return an empty array if input array is empty', () => {
    assert.deepEqual(flatten([]),[]);
  });
  it('Return undefined if no argument is passed', () => {
    assert.isUndefined(flatten(),undefined);
  });
  it('Throw an error if the input is not an array', () => {
    assert.throws(() => flatten('string'), Error);
  });
})


/*
it ('', () => {

});
*/


