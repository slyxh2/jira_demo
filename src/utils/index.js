import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? true : !!value);
// 去除对象中的空值
export const cleanObject = (object) => {
  let target = { ...object };
  let keys = [...Object.keys(target), ...Object.getOwnPropertySymbols(target)];
  keys.forEach((key) => {
    if (!isFalsy(target[key])) {
      delete target[key];
    }
  });
  return target;
};

// handle object to request params
export const handleParams = (object) => {
  let str = "?";
  Object.keys(object).forEach((key) => {
    str += key + "=" + object[key];
  });
  return str;
};

export const debounce = (func, wait = 300) => {
  let timer = null;
  return (...params) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...params);
      clearTimeout(timer);
      timer = null;
    }, wait);
  };
};

export const useDebounce = (param, wait = 500) => {
  let [debounceVal, setDebounceVal] = useState(param);

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceVal(param);
    }, wait);
    return () => clearTimeout(timer);
  }, [param, wait]);

  return debounceVal;
};
