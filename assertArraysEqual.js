const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  let message = '';
  const [arr1Str, arr2Str] = [arr1.slice(), arr2.slice()];
  eqArrays.eqArrays(arr1,arr2) === true ? message = `✅✅✅ Assertion Passed: [${arr1Str}] === [${arr2Str}]` : message = `🔴🔴🔴 Assertion Failed: [${arr1Str}] !== [${arr2Str}]`;
  console.log(message);
};

module.exports = assertArraysEqual;