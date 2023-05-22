let getCurrentLevelValue = () => {
  let currentLevel = localStorage.getItem("currentLevel");

  return currentLevel;
};

let getMinesQuantityValue = () => {
  let minesQuantity = +localStorage.getItem("minesQuantity");

  return minesQuantity;
};

let getLayoutIndexValue = () => {
  let layoutIndexValue = +localStorage.getItem("layoutIndex");

  return layoutIndexValue;
};

let getIsSoundOn = () => {
  let isSoundOn = localStorage.getItem("isSoundOn");

  return isSoundOn;
};

export { getCurrentLevelValue, getMinesQuantityValue, getLayoutIndexValue, getIsSoundOn };
