import { v4 as uuid_v4 } from "uuid";

const capitalize = (str) => {
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};

const storeLocally = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const getLocally = (key) => {
  let items = localStorage.getItem(key);
  items = JSON.parse(items);
  return items;
};

const newID = () => {
  const id = uuid_v4();
  return id;
};

const formatTitle = (str) => {
  if (str) return str.split(" ").join("-").toLowerCase();
};

const formatFirebaseError = (msg) => {
  let str = msg.split("/");
  str = str[1].split("-").join(" ");
  console.log(str);
  return str;
};

export {
  capitalize,
  storeLocally,
  getLocally,
  newID,
  formatTitle,
  formatFirebaseError,
};
