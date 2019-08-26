
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


const letterPositions =  (sentence) => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {//first encounter
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  
  return results;
};

const word = 'hello';
assertArraysEqual(letterPositions(word)['l'], [2,3]);
assertArraysEqual(letterPositions(word)['h'], [0]);
assertArraysEqual(letterPositions(word)['o'], [4]);