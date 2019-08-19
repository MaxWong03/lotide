//assertEqual

// function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);

  }

};



//end of assertEqual


//tail
const tail = (arr) => {
  return arr.slice(1);
};
//end of tail