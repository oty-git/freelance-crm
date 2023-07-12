const groupObjectBy = (obj, groupKey, suffix) => {
  let newObj = {};

  Object.keys(obj).forEach((key) => {
    if (obj[key][groupKey]) {
      let keyGrooping = obj[key][groupKey] + suffix;

      if (!newObj[keyGrooping]) {
        newObj[keyGrooping] = {};
      }
      newObj[keyGrooping][key] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};
export default groupObjectBy;
