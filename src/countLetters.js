const countLetters = (str) => {
  let result = {};
  if (!str) return undefined;
  str = str.split(' ').join('');
  for (let s of str) {
    if (!result[s]) { //if this is my first time seeing the character 
      result[s] = 1;
    }else {
      result[s]++;
    }
  }
  return result;
};

module.exports = countLetters;