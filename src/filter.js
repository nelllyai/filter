const filter = (arr, key, val) => {
  const result = [];
  
  arr.forEach(obj => {
    if (obj[key] === val) {
      result.push(obj);
    }
  })

  return result;
};

export default filter;
