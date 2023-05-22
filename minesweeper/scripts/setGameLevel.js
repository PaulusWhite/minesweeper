import { getCurrentLevelValue, getMinesQuantityValue } from "./getLocalStorageData.js";
import { setGmaeLevelValue, setMinesQuantityValue } from "./setLocalStorageData.js";
import { restartGameAction } from "./restartGame.js";
import setInitLocalStorageData from "./setInitLocalStorageData.js";

let changeSettingsBtnClass = (lvlBtn, allLvlBtns) => {
  [].forEach.call(allLvlBtns, (lvlBtn) => lvlBtn.classList.remove("settingsMenu__lvlBtn_active"));
  lvlBtn.classList.add("settingsMenu__lvlBtn_active");
};

let setClassSelectedBtn = (levelSettingsSection, allLvlBtns) => {
  levelSettingsSection.addEventListener("click", (event) => {
    let target = event.target;
    let lvlBtn = target.closest(".settingsMenu__lvlBtn");

    if (!lvlBtn) return;

    changeSettingsBtnClass(lvlBtn, allLvlBtns);
  });
};

let setGameLevel = () => {
  let levelSettingsSection = document.querySelector(".settingsMenu__levelSettings");
  let allLvlBtns = levelSettingsSection.children;
  let saveSettingsBtn = document.querySelector(".settingsMenu__saveSettingsBtn");
  let minesQuantityInput = document.querySelector(".settingsMenu__minesQuantityInput");
  let initLevel = getCurrentLevelValue(); //init current level after loading the page

  // init action after
  [].forEach.call(allLvlBtns, (lvlBtn) => {
    if (initLevel === lvlBtn.id) lvlBtn.classList.add("settingsMenu__lvlBtn_active");
  });

  setClassSelectedBtn(levelSettingsSection, allLvlBtns);

  minesQuantityInput.addEventListener("focus", () => {
    window.addEventListener("keydown", (event) => {
      event.preventDefault();
    });
    // event.target.value = event.target.value.replace(/[^\d]/g, "");
  });

  saveSettingsBtn.addEventListener("click", () => {
    let [activeBtn] = [].filter.call(allLvlBtns, (lvlBtn) => lvlBtn.classList.contains("settingsMenu__lvlBtn_active"));
    let btnValue = activeBtn.id;
    let currentLevel = getCurrentLevelValue(); //actual game level
    let currentMinesQuantity = getMinesQuantityValue();
    let settingsMinesQuantity = +minesQuantityInput.value;

    if (currentLevel === btnValue && +currentMinesQuantity === +settingsMinesQuantity) return;

    setGmaeLevelValue(btnValue);
    setMinesQuantityValue(settingsMinesQuantity);
    setInitLocalStorageData();
    restartGameAction();
  });
};

export default setGameLevel;
