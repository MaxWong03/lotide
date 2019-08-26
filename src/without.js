
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

/*
Input: source array, itemToRemove array
output: new array with element from source that is not in ITR array


pseudocode:
function without(sourceArr, removeArr) return new array with element from sourceArr that is not in removeArr

  newArr <- clone the sourceArr
  pop element e from removeArr
  if e is an element of newArr
    remove it form newArr
  else
    do nothing

*/

const without = (sourceArr, removeArr) => {
  const newArr = sourceArr.slice(0); //clone the sourceArr
  while (removeArr.length !== 0) {
    let removeEl = removeArr.pop();
    newArr.forEach((el, index) => {
      if (el === removeEl) {
        newArr.splice(index,1);
      }
    });
  }
  return newArr;
};

assertArraysEqual(without([1,2,3,4,5,6], [3,6,1,5]), [2,4]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);