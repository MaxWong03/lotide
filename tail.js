//tail
const tail = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Input is NOT an array'); //handle invalid input in which arr is not an array
  return arr.slice(1);
};
//end of tail

module.exports = tail;