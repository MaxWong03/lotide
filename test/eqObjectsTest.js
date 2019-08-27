const assert = require('chai').assert;
const eqObjects = require('../src/eqObjects');

//test code
describe('eqObjects(obj1, obj2)', () => {
  it('should return true if obj1 = {a: "1", b: "2"} and obj2 = {b: "2", a: "1"}', () => {
    assert.isTrue(eqObjects({a: "1", b: "2"}, {b: "2", a: "1"}));
  });
  it('should return false if obj1 = {a: "1", b: "2"}, obj2 = {a: "1", b:  "2", c: "3"}', () => {
    assert.isFalse(eqObjects({a: "1", b: "2"}, {a: "1", b:  "2", c: "3"}));
  });
  it('should return true if obj1 = {c: "1", d: ["2", 3] }, obj2 = {d: ["2", 3], c: "1" }', () => {
    assert.isTrue(eqObjects({c: "1", d: ["2", 3] }, {d: ["2", 3], c: "1" }));
  });
  it('should return false if obj1 = {c: "1", d: ["2", 3] }, obj2 = {c: "1", d: ["2", 3, 4] }', () => {
    assert.isFalse(eqObjects({c: "1", d: ["2", 3] }, {c: "1", d: ["2", 3, 4] }));
  });
  it('should return true if obj1 = { a: { z: 1 }, b: 2 }, obj2 = { a: { z: 1 }, b: 2 }', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false if obj1 = { a: { y: 0, z: 1 }, b: {j:2} }, obj2 = { a: { y: 0, z: 1 }, b: {j:3} }', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: {j:2} }, { a: { y: 0, z: 1 }, b: {j:3} }));
  });
  it('should return undefined if only passed one object', () => {
    assert.isUndefined(eqObjects({ a: { y: 0, z: 1 }, b: {j:2} }));
  });
  it('should return undefined if passed 0 object', () => {
    assert.isUndefined(eqObjects());

  });
});



// //test case for primitives
// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b:  "2", c: "3"};
// assertEqual(eqObjects(ab,ba), true);
// assertEqual(eqObjects(ab, abc), false);

// //test case for array as values
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);




// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: {j:2} }, { a: { y: 0, z: 1 }, b: {j:3} }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false