// function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

  }

};

/**
 * Implement the function findKey which takes in an object and a callback
 * It should scan the object and return the first key for which the callback returns a truthy value
 * IF no key is found, then the function should return undefined
 
function findKey (obj, callBack) returns first key for which the callback returns a turth value or undefined
  for key k in obj
    if callBack(k) is true
      return k
    else
      do nothing
  return undefined (so that if no key is found, the function returns undefined)

 */

const findKey = (obj, callBack) => {
  let result;
  for (let key in obj) {
    if (callBack(obj[key])) {
      return key;
    }
  }
  return result;
};


//testing


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), 'Blue Hill');