const store = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
}

const retrieve = (key, defaultValue) => {
  return JSON.parse(window.localStorage.getItem(key)) || defaultValue;
}

export default {
  store,
  retrieve
}