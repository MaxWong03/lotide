const tail = require('../tail'); //importing tail

describe('tail', () => {
  it('it should return array of length 5 if input array is of lenght 6', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    arr = tail(arr);
    assert.deepEqual(arr.length, 5);
  });
  it('it should return array of length 4 if input array is of lenght 5', () => {
    let arr = [1, 2, 3, 4, 5];
    arr = tail(arr);
    assert.deepEqual(arr.length, 4);
  });
  it('it should throw an error if the input isnt an array', () => {
    let invalidInput = 5;
    let invalidOutput = tail(invalidInput);
    assert.throws(() => invalidOutput, Error);
  });
  it('it should return an array with item from 2 to n of the orginial', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    arr = tail(arr);
    assert.deepEqual(arr, [2,3,4,5,6]);
  });
  it('it should return ... for an empty array');
  it('it should return ... for array of length 1');
});