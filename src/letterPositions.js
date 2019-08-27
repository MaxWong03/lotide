const letterPositions =  (sentence) => {
  const results = {};
  if (!sentence && sentence !== '') return undefined;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') continue; //skip spaces
    if (!results[sentence[i]]) {//first encounter
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  
  return results;
};


module.exports = letterPositions;