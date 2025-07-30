const debounce = (callback, timeoutDelay = 300) => {
  let timeoutId;

  return (...rest) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => callback(...rest), timeoutDelay);
  };
};

export { debounce };
