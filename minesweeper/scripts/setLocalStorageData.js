let setGmaeLevelValue = (value) => {
  localStorage.setItem("currentLevel", value);
};

let setMinesQuantityValue = (value) => {
  localStorage.setItem("minesQuantity", value);
};

let setIsSoundOn = (value) => {
  localStorage.setItem("isSoundOn", value);
};

let setLayoutIndex = (value) => {
  localStorage.setItem("layoutIndex", value);
};

export { setGmaeLevelValue, setMinesQuantityValue, setIsSoundOn, setLayoutIndex };
