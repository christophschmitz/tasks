export function parseJSONFromLocalStorage(key, defaultvalue) {
  const json = localStorage.getItem(key);

  if (!json) {
    return defaultvalue;
  }

  const data = JSON.parse(json);
  return data;
}

export function stringifyJSONToLocalStorage(key, value) {
  const json = JSON.stringify(value);

  localStorage.setItem(key, json);
}
