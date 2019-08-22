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


/*
function eqObjects(obj1, obj2) returns true or false with both objects have identical keys with indetical values

-two objects are equal when:
1) they have the same number of keys
2) the value for each key in one object is the same as the value for that same key in the other object

*/



const eqObjects = (obj1, obj2) => {
  const [keyArr1, keyArr2] = [Object.keys(obj1), Object.keys(obj2)];
  if (!isSameLengthArr(keyArr1, keyArr2)) {//if they dont have the same # of keys
    return false;
  } else { // check if the value for each key in one object is the same as the value for that same key in the other object
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        return eqArrays(obj1[key], obj2[key]);
      } else {
        if (!(obj1[key] === obj2[key])) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;//import libraries 
  let displayMessage;
  eqObjects(actual,expected)? displayMessage = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : displayMessage = `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(displayMessage);
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b:  "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);