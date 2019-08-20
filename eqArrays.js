// assertEqual
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

  }

};

//end of assertEqual


/*
Implement a function eqArrays which takes into two arrays and retrun ture or false, based on a perfect match

cases to consider:
if no arguement, return false
if only 1 argument, return false
if 1 array is empty and the other is not, return false
if 2 array are of different lenght, return false

*/



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
  }  else if (!isSameLengthArr(arr1, arr2)) { //if 2 arrays are not of the same length, return false
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



//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
