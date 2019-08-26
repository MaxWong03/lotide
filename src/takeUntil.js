/**
 * function takeUntil (arr, callBack) returns a slice of the array with elements taken from the beginning, stop only if callBack returns true
 * callback should only be provided one value -> item of array
 * takeUntil keep collecting items from a provided array until the callback provided returns a truthy value
 *
 */

const takeUntil = (arr, callBack) => {
  let result = [];
  for (let item of arr) {
    if (!callBack(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};


//Test Case


const isSameLengthArr = (arr1, arr2) => {
  let isSameLength = false;
  const [arr1Length, arr2Length] = [arr1.length, arr2.length];
  arr1Length === arr2Length ? isSameLength = true : isSameLength = false;
  return isSameLength;
};



const eqArrays = (arr1, arr2) => {
  //if no arrgument or only 1 arrugemnt, return false
  if (arr1 === undefined || arr2 === undefined) {
    return false;
  } else if (!isSameLengthArr(arr1, arr2)) { //if 2 arrays are not of the same length, return false
    return false;
  } else { //check if two arr is equal
    for (let [index, val] of arr1.entries()) {
      if (val !== arr2[index]) {
        return false;
      }
    }

  }

  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  let message = '';
  eqArrays(arr1,arr2) === true ? message = `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : message = `🔴🔴🔴 Assertion Failed: [${arr1}] !== [${arr2}]`;
  console.log(message);
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
//the call back here takes in x, and returns the evaluation of (x < 0)
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data1, x => x === ',');
//the call back here takes in x, and return the evaluation of (x === ',')
assertArraysEqual(takeUntil(data2, x => x === ','),  [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



//expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]