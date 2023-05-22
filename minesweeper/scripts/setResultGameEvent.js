//Scripts
import openAllCells from "./openAllCells.js";
import { getLayoutIndexValue } from "./getLocalStorageData.js";
import { getTimerId } from "./getSesstionStorageData.js";
import getScoreboardData from "./getScoreboardData.js";
import setSound from "./setSound.js";

let showMessage = (resultGameEventFlag) => {
  let messageSection = document.querySelector(".messageSection");
  if (messageSection.classList.contains("messageSection_showSection")) return;

  let messageText = document.querySelector(".messageSection__messageText");
  let messageIcon = document.querySelector(".messageSection__messageIcon");

  if (!resultGameEventFlag) {
    messageText.textContent = "Game Over! Try Again";
    messageIcon.setAttribute("src", "./assets/skeleton.svg");
  } else {
    let [timeValue, clickCounterValue] = getScoreboardData();
    messageText.textContent = `Hooray! You found all mines in ${timeValue} seconds and ${clickCounterValue} clicks`;
    messageIcon.setAttribute("src", "./assets/win.svg");
    setSound("win");
  }
  messageSection.classList.add("messageSection_showSection");
};

let setResultGameEvent = (cellsArr, resultGameEventFlag) => {
  let layoutIndex = getLayoutIndexValue();
  let timerId = getTimerId();

  clearInterval(timerId);
  openAllCells(cellsArr, layoutIndex);
  showMessage(resultGameEventFlag);
};

export default setResultGameEvent;
