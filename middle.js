const findMidIndex = (arr) => {
  return Math.floor(arr.length / 2);
};

const isOddLength = (arr) => {
  let isOdd = false;
  const arrLength = arr.length;
  arrLength % 2 === 1 ? isOdd = true : isOdd = false;
  return isOdd;
};

const middle = (arr) => {
  let midArr = [];
  const arrLength = arr.length;
  if (arrLength <= 2) {//covers no argument an empty array cases
    return midArr;
  } else {
    const isOdd = isOddLength(arr);
    switch (isOdd) {
    case true:
      midArr.push(arr[findMidIndex(arr)]);
      return midArr;
    default:
      midArr.push(arr[findMidIndex(arr) - 1]);
      midArr.push(arr[findMidIndex(arr)]);
      return midArr;
    }
  }
};




module.exports = middle;