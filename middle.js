// function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

  }

};



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
1) array with 1 /2 element has no middle
2) array with odd number has 1 middle
3) array with even number has 2 middle (approach: arr[midindex-1] arr[midindex])
*/

const findMidIndex = (arr) => {
  return Math.floor(arr.length / 2);
};

const isOddLength = (arr) => {
  let isOdd = false;
  const arrLength = arr.length;
  arrLength % 2 === 1 ? isOdd = true : isOdd = false;
  return isOdd;
};

const middle = (arr) => {
  let midArr = [];
  const arrLength = arr.length;
  if (arrLength <= 2) {//covers no argument an empty array cases
    return midArr;
  } else {
    const isOdd = isOddLength(arr);
    switch (isOdd) {
    case true:
      midArr.push(arr[findMidIndex(arr)]);
      return midArr;
    default:
      midArr.push(arr[findMidIndex(arr) - 1]);
      midArr.push(arr[findMidIndex(arr)]);
      return midArr;
    }
  }
};

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2]), []);
