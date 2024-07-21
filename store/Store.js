import * as LocalStorage from "expo-secure-store";

export const SaveValue = (key, value) => {
  LocalStorage.setItem(key, value);
};

export const GetValue = (key) => {
  let value = LocalStorage.getItem(key);
  if (value) {
    return value;
  } else {
    return null;
  }
};
