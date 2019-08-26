// assertEqual
const assertEqual = require('./assertEqual');

//end of assertEqual
const isSameLengthArr = (arr1, arr2) => {
  let isSameLength = false;
  const [arr1Length, arr2Length] = [arr1.length, arr2.length];
  arr1Length === arr2Length ? isSameLength = true : isSameLength = false;
  return isSameLength;
};

/*
Problem statement
Use recursion to allow eqArrays to support sub-arrays (arrays of arrays of arrays of arrays of ... you get the point, right?).

The general approach is to handle the case where the item in the array is an array (using isArray) and, if so, checking their equality using this very eqArrays function.

Remember to update the assertion code for the function as well. We suggest testing for more than just one or two level of arrays, to ensure that our recursive solution is indeed working.




Implement a function eqArrays which takes into two arrays and retrun ture or false, based on a perfect match

cases to consider:
if no arguement, return false
if only 1 argument, return false
if 1 array is empty and the other is not, return false
if 2 array are of different lenght, return false


Approach
ID and solve the simpler case
go from simpler to simplest
with each recurisve call, the input should get closer to the base case
think that you are in the middle, and what operation gets you towards it
reduce the complexity of the problem


base case:
if two array is not the same length, return false


[item1][item2]
simpler case:
if both item is an array, eqArrays(item1, item2)
if only one is array, return false;
*/

const isArrays = (arr1, arr2) => {
  return Array.isArray(arr1) && Array.isArray(arr2);
};


const eqArrays = (arr1, arr2) => {
  //if two array is not of the same length, they arent equal to each other
  if (!isSameLengthArr(arr1, arr2)) {//base case, terminate recursion
    return false;
  } else {
    if (!arr1.length) { //if the array is empty, we are done, base case
      return true;
    } else {
      let arrItem1 = arr1.shift(); //get the first element of an array
      let arrItem2 = arr2.shift();
      if (isArrays(arrItem1, arrItem2)) {//if both items are array, we recursively call the function to check if they are identical array
        if (!eqArrays(arrItem1, arrItem2)) return false; //recursive case
      } else {
        if (arrItem1 !== arrItem2) return false; //check if both items are equal, base case
      }
      return eqArrays(arr1,arr2); //recursive case, check the rest of the array
    }
  }

};

module.exports = {
  assertEqual,
  eqArrays
};