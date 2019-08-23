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
Problem Statement:
function eqObjects(obj1, obj2) returns true or false with both objects have identical keys with indetical values

-two objects are equal when:
1) they have the same number of keys
2) the value for each key in one object is the same as the value for that same key in the other object

Use recursion with eqObjects so that it can support sub-objects (objects containing objects containing objects containing objects containing ... you get the point, right?).

We need to handle the case where both values being compared are objects. Since arrays are also objects, and we are already handling arrays separately, our new check should confirm that the items are not arrays (using isArray). Once confirmed to be objects (but not arrays), the function should call itself with the two values.
---------------
Approach:
reduce the complexity
every recursive call input should be closer to the base case
work from simpler to simplest (base)
id and solve simpler problem
Think you are in the middle, and what operations you need to get to the solution
---------------
Plan:
simplest
-if the key value is not an object
-if the two objecst are of a differenet length
-----------------
simpler:
-check if it is an object, or is it an array
-if it is an array, do eqArrays
if it is an object, do eqObject
if it is not an object, then you


cases
{item1} {item2}
if both item is an object
you run eqObj(item1, item2)

if only one item is an object, then return false

if only one item is an array, then return false

if only both item is an array, then oyu run eqArr(item1, item2)


*/


const isArray = (arr) => {
  return Array.isArray(arr);
};

const isArrays = (arr1, arr2) => {
  return isArray(arr1) && isArray(arr2);
};


const isObject = (obj) => {
  return typeof obj === 'object';
};

const isObjects = (obj1, obj2) => {
  return isObject(obj1) && isObject(obj2);
};



const eqObjects = (obj1, obj2) => {
  const [keyArr1, keyArr2] = [Object.keys(obj1), Object.keys(obj2)];
  if (!isSameLengthArr(keyArr1,keyArr2)) { //if they dont have the same # of keys
    return false; //base case
  }
  //{item}{item}
  for (let key of keyArr1) {
    let obj1El = obj1[key];
    let obj2El = obj2[key];
    if (isArrays(obj1El, obj2El)) { //both are array
      //if they are equal to each other, do nothing (loop through the rest of the key), else, return false
      if (!eqArrays(obj1El, obj2El)) {
        return false;
      }
    } else if (isObjects(obj1El, obj2El)) {// both are objects
      //if they are equal to each other, do nothing(loop through the rest of the keys), else, return false
      if (!eqObjects(obj1El, obj2El)) {
        return false;
      }
    } else {
      if (obj1El !== obj2El) {
        return false;
      }
    }
  }
  return true;

};



// const eqObjects = (obj1, obj2) => {
//   const [keyArr1, keyArr2] = [Object.keys(obj1), Object.keys(obj2)];
//   if (!isSameLengthArr(keyArr1, keyArr2)) {//if they dont have the same # of keys
//     return false;
//   } else { // check if the value for each key in one object is the same as the value for that same key in the other object
//     for (let key in obj1) {
//       if (Array.isArray(obj1[key])) {
//         return eqArrays(obj1[key], obj2[key]);
//       } else {
//         if (!(obj1[key] === obj2[key])) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// };



// //test case for primitives
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b:  "2", c: "3"};
// assertEqual(eqObjects(ab,ba), true);
// assertEqual(eqObjects(ab, abc), false);

// //test case for array as values
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);




assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: {j:2} }, { a: { y: 0, z: 1 }, b: {j:2} }), true); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
