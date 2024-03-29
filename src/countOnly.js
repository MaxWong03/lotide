
/*

Input: countOnly takes in an array and an object
Result: return an object that has the count of the of keys that have the truthy value in the input object

- key that are set to flase or not included in the object should not be counted
- key that exists in the object but not in the array also should not be included

*/

//allItems: an array of strings that we need to look through
//itemsToCount: an object specifying what to count
const assertEqual = require('./assertEqual');
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let items of allItems) {
    if (itemsToCount[items]) {
      if (!result[items]) {
        result[items] = 1;
      } else {
        result[items]++;
      }
    }
  }
  if (!Object.keys(result).length) return undefined;
  return result;
};



//test case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;