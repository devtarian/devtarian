export const loadLocalStorageData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    if (typeof value !== 'object') return;
    return value ? value : [];
  } catch (err) {
    console.error(`Cannot find data from LocalStorage. \n ${err}`);
  }
};

export const saveLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
