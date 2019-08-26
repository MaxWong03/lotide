// function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

  }

};


const countLetters = (str) => {
  let result = {};
  for (let s of str) {
    if (!result[s]) { //if this is my first time seeing the character 
      result[s] = 1;
    }else {
      result[s]++;
    }
  }
  return result;
};

//testcase

let result = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

assertEqual(countLetters("lighthouse in the house")['o'], 2);
assertEqual(countLetters("lighthouse in the house")['u'], 2);
assertEqual(countLetters("lighthouse in the house")['e'], 3);
assertEqual(countLetters("lighthouse in the house")['h'], 4);