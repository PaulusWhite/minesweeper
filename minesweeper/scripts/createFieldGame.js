//Utils
import createElement from "./../utils/createElement.js";
//Scripts
import setInitLocalStorageData from "./setInitLocalStorageData.js";
import { getCurrentLevelValue, getMinesQuantityValue, getIsSoundOn } from "./getLocalStorageData.js";

let createTopScoreboardElements = (topScoreboardSection) => {
  let levelIndicator = createElement("span", ["scoreboard__lvlIndicator"]);
  levelIndicator.textContent = getCurrentLevelValue();

  let settingsBtn = createElement("button", ["scoreboard__settingsBtn"]);
  let settingsIcon = createElement("img", ["scoreboard__settingsIcon"]);
  settingsIcon.setAttribute("src", "./assets/gear.svg");
  settingsBtn.append(settingsIcon);

  let soundBtn = createElement("button", ["scoreboard__soundBtn"]);
  let soundIcon = createElement("img", ["scoreboard__soundIcon"]);
  let soundIconImgTitle = getIsSoundOn() === "true" ? "soundOn" : "soundOff";
  soundIcon.setAttribute("src", `./assets/${soundIconImgTitle}.svg`);
  soundBtn.append(soundIcon);

  topScoreboardSection.append(levelIndicator, soundBtn, settingsBtn);
};

let createBottomScoreboardElements = (bottomScoreboardSection) => {
  let timeIndicator = createElement("span", ["scoreboard__time"]);
  let timeIcon = createElement("img", ["scoreboard__timeIcon"]);
  timeIcon.setAttribute("src", "./assets/clock.svg");
  let timeValue = createElement("span", ["scoreboard__timeValue"]);
  timeValue.textContent = "00:00";
  timeIndicator.append(timeValue, timeIcon);

  let allMines = createElement("span", ["scoreboard__allMines"]);
  let allMinesValue = createElement("span", ["scoreboard__allMinesValue"]);
  allMinesValue.textContent = getMinesQuantityValue();
  let allMinesIcon = createElement("img", ["scoreboard__allMinesIcon"]);
  allMinesIcon.setAttribute("src", "./assets/bomb.svg");
  allMines.append(allMinesValue, allMinesIcon);

  let clicksCounter = createElement("span", ["scoreboard__clickCounter"]);
  let clickCounterValue = createElement("span", ["scoreboard__clickCounterValue"]);
  clickCounterValue.textContent = "0";
  let clicksCounterIcon = createElement("img", ["scoreboard__clicksCounterIcon"]);
  clicksCounterIcon.setAttribute("src", "./assets/click.svg");
  clicksCounter.append(clickCounterValue, clicksCounterIcon);

  let newGameBtn = createElement("button", ["scoreboard__newGameBtn"]);
  newGameBtn.textContent = "New Game";

  bottomScoreboardSection.append(timeIndicator, allMines, clicksCounter, newGameBtn);
};

let createMessageSectionElements = (messageSection) => {
  let messageText = createElement("p", ["messageSection__messageText"]);
  let messageIcon = createElement("img", ["messageSection__messageIcon"]);
  messageSection.append(messageText, messageIcon);
};

//creating elements for settings sections
let createCloseMenuBtn = () => {
  let closeBtn = createElement("button", ["closeBtn"]);

  for (let i = 0; i < 2; i++) {
    let closeBtnPartition = createElement("span", ["closeBtn__partition"]);
    closeBtn.append(closeBtnPartition);
  }

  return closeBtn;
};

let createLevelSettingsSection = () => {
  let lvlSettingsSection = createElement("div", ["settingsMenu__levelSettings"]);
  let heading = createElement("p", ["settingsMenu__settingsHeading"]);
  heading.textContent = "Level";
  let saveSettingsBtn = createElement("button", ["settingsMenu__saveSettingsBtn"]);
  saveSettingsBtn.textContent = "Save settings";

  let minesQuantity = createElement("div", ["settingsMenu__minesQuantity"]);
  minesQuantity.textContent = "Mines quantity: ";
  let minesQuantityInput = createElement("input", ["settingsMenu__minesQuantityInput"]);
  minesQuantityInput.setAttribute("type", "number");
  minesQuantityInput.setAttribute("max", "99");
  minesQuantityInput.setAttribute("min", "10");
  minesQuantityInput.setAttribute("value", getMinesQuantityValue());
  minesQuantity.append(minesQuantityInput);

  for (let i = 0; i < 3; i++) {
    let btn = createElement("button", ["settingsMenu__lvlBtn"]);
    let idBtn = (i === 0 && "Easy") || (i === 1 && "Medium") || (i === 2 && "Hard");
    btn.setAttribute("id", idBtn);
    btn.textContent = idBtn;
    lvlSettingsSection.append(btn);
  }

  lvlSettingsSection.prepend(heading);
  lvlSettingsSection.append(minesQuantity, saveSettingsBtn);

  return lvlSettingsSection;
};

let createSettingsMenuElements = (settingsMenu) => {
  let closeBtn = createCloseMenuBtn();
  let lvlSettingsSection = createLevelSettingsSection();

  settingsMenu.append(closeBtn, lvlSettingsSection);
};

let createScoreBoard = () => {
  let scoreboard = createElement("div", ["scoreboard"]);
  let topScoreboardSection = createElement("div", ["scoreboard__topSection"]);
  let bottomScoreboardSection = createElement("div", ["scoreboard__bottomSection"]);
  let messageSection = createElement("div", ["messageSection"]);
  let settingsMenu = createElement("aside", ["settingsMenu"]);

  createTopScoreboardElements(topScoreboardSection);
  createBottomScoreboardElements(bottomScoreboardSection);
  createMessageSectionElements(messageSection);
  createSettingsMenuElements(settingsMenu);

  scoreboard.append(topScoreboardSection, bottomScoreboardSection, messageSection);
  document.body.prepend(settingsMenu);

  return scoreboard;
};

let createFieldGame = () => {
  let mainField = createElement("main", ["mainField"]);

  setInitLocalStorageData();

  let scoreboard = createScoreBoard();
  let minefield = createElement("div", ["minefield"]);
  mainField.append(scoreboard, minefield);

  document.body.prepend(mainField);
};

export default createFieldGame;
