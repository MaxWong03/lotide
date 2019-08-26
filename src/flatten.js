
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

Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.

*/

/*
pseudocode:
  function flatten(array arr) return a flattened version of arr
    newArr <- []
    Loop through arr:
      if current element el is an array
      loop for el:
        add el's element to newArr
*/

const isArrayType = (element) =>{
  return Array.isArray(element);
};

const flatten = (sourceArr) => {
  let newArr = [];
  for (let el of sourceArr) {
    if (isArrayType(el)) {
      for (let item of el) {
        debugger;
        newArr.push(item);
      }
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);