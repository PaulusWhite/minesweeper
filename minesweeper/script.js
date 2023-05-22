import createFieldGame from "./scripts/createFieldGame.js";
import setMinefield from "./scripts/setMinefield.js";
import { restartGame } from "./scripts/restartGame.js";
import setGameLevel from "./scripts/setGameLevel.js";
import displaySettingsMenu from "./scripts/displaySettingsMenu.js";
import switchSound from "./scripts/switchSound.js";

let createMinesweeperGame = () => {
  createFieldGame();
  setMinefield();
  restartGame();
  setGameLevel();
  displaySettingsMenu();
  switchSound();
};

createMinesweeperGame();
