//map takes in two arguemnt
//1) an array to map
//2) a callBack function
// return a new array based on the results of the callback function
const map = (arr, callBack) => {
  let result = [];
  for (let item of arr) {
    result.push(callBack(item));
  }
  return result;
};

const upperCase = (word) => {
  return word.toUpperCase();
};

const getFirstChar = (word) => {
  return word[0];
};

const words = ["ground", "control", "to", "major", "tom"];

// const result1 = map(words, getFirstChar);
// console.log(result1);


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

const isString = (word) => {
  return typeof word;
};

// assertArraysEqual(map(['abc', 'bcgd', 'defh'], word => word.length), [3,4,4]);
// assertArraysEqual(map(['abc', 'bcgd', 'defh'], upperCase), ['ABC', 'BCGD', 'DEFH']);
// assertArraysEqual(map(['abc', 'bcgd', 'defh'], isString),['string', 'string', 'string']);