const tail = require('../src/tail'); //importing tail
const assertEqual = require('../src/assertEqual');

//test case
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!