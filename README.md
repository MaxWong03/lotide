# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @MaxWong03/lotide`

**Require it:**

`const _ = require('@MaxWong03/lotide/index');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: uses `eqArray` to display a help message indicating whether or not two arrays are equal
  
* `assertEqual`: evaulate the value of two primitive types value and return true or false based on the result

* `assertObjectsEqual`: uses `eqObjects` to display a help message indicating whether or not two objects are equal

* `countLetters`: evaulate the number of occurrence of all letters of the input string. The return vlaue is an object containing the count of all the letters
* `countOnly`: take in an `array` and an `object` and count the number of occurance of the elements in the array. The return value is an object contianing the count of only the elements that are passed with the value true in the input object.

* `eqArray`: evaulate whether or not two arrays are equal to each other. Two arrays are considered identical if each element in the same index has the same value. Return true or false based on the result

* `eqObjects`:  evaulate whether or not two Objects are equal to each other. Two objects are considered identical if each property-key with the same name has the same value. Return true or false based on the result
  
* `findKey`: accept an object as the 1st argument and a callback as the 2nd argument. Returns the first property key that the call back evaulate as true. Return `undefined` if no such key is found

* `findKeyByValue`:  Returns the first property key that matches the input value, return `undefined` if no such key is found
  
* `flatten`: Take the input array and return a 1-D version of the input array

* `head`: Return the first element of the input array. Return undefined if the array is empty

* `letterPositions`: Return all the indices (zero-based positions) in the string where each character is found.

* `map`: Returns a new array in which the value of each element is the result of the callback function

* `middle`: Return a new array in which the element(s) is the element of the middle index. Middle index for odd length array is legnth / 2 and for even length array is [length /2 - 1] and [length / 2]. If the input array has length <= 2 it will return an empty array
  
* `tail`: Returns a new array in which the elements is the element with index [2-n] from the orginial array. The orginial array is left unchanged

* `takeUntil`: Returns a slice of the array with elements taken from the beginning, stop only if callBack returns true. Callback should only be provided one value -> item of array
  
* `without`: Without return a subset of a given array, removing unwanted elements.