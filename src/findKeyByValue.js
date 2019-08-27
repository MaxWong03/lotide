
/**
function findKeyByValue (object o, keyValue k) returns first key that matches keyValue k
-If no key with that given value is found, then it should return undefined.
-return should be a string

  for key in object o
    check if key's value match with k
    if yes return the key
    if not go to the next one
  return undefined if can't find any key with the given value

 **/

const findKeyByValue = (obj, keyValue) => {
  for (let key in obj) {
    if (obj[key] === keyValue) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

//Test case

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");