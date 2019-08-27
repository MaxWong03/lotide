const isArrayType = (element) =>{
  return Array.isArray(element);
};

const flatten = (sourceArr) => {
  let newArr = [];
  if(!sourceArr) return undefined;
  if(!Array.isArray(sourceArr)) throw new Error('Input is not an array');
  for (let el of sourceArr) {
    if (isArrayType(el)) {
      for (let item of el) {
        newArr.push(item);
      }
    } else {
      newArr.push(el);
    }
  }
  return newArr;
};



module.exports = flatten;