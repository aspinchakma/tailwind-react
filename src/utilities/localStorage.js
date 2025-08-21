const getValueByKey = (key) => {
  const result = localStorage.getItem(key);
  if (!result) {
    return [];
  } else {
    return JSON.parse(result);
  }
};

export { getValueByKey };
