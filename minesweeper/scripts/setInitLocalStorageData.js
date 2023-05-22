import { getCurrentLevelValue, getMinesQuantityValue, getIsSoundOn } from "./getLocalStorageData.js";
import { setMinesQuantityValue, setLayoutIndex, setIsSoundOn } from "./setLocalStorageData.js";

let setInitLocalStorageData = () => {
  let currentLevel = getCurrentLevelValue();
  let isSoundOn = getIsSoundOn();
  isSoundOn = !isSoundOn || isSoundOn === "true" ? true : false;

  if (!currentLevel || (currentLevel !== "Easy" && currentLevel !== "Medium" && currentLevel !== "Hard")) {
    localStorage.setItem("currentLevel", "Easy");
    currentLevel = "Easy";
  }

  let minesQuantity = getMinesQuantityValue(); //init value;
  let layoutIndex = null;
  if (currentLevel === "Easy") {
    minesQuantity = minesQuantity ? minesQuantity : 10;
    layoutIndex = 10;
  }

  if (currentLevel === "Medium") {
    minesQuantity = minesQuantity ? minesQuantity : 25;
    layoutIndex = 15;
  }

  if (currentLevel === "Hard") {
    minesQuantity = minesQuantity ? minesQuantity : 40;
    layoutIndex = 20;
  }

  setMinesQuantityValue(minesQuantity);
  setLayoutIndex(layoutIndex);
  setIsSoundOn(isSoundOn);
};

export default setInitLocalStorageData;
