const test = require('../eqArrays');

//test case
test.assertEqual(test.eqArrays([1, 2, 3], [1, 2, 3]), true);
test.assertEqual(test.eqArrays([1, 2, 3], [3, 2, 1]), false);
test.assertEqual(test.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
test.assertEqual(test.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


test.assertEqual(test.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);// => true
test.assertEqual(test.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);// => false
test.assertEqual(test.eqArrays([[2, 3], []], [[2, 3], []]), true);// => false
test.assertEqual(test.eqArrays([1,[[2]],[[3],[4]]], [1,[[2]],[[3],[4]]]), true);