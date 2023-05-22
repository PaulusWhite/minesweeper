//Scripts
import setMinefield from "./setMinefield.js";
import { getTimerId } from "./getSesstionStorageData.js";
import { getMinesQuantityValue } from "./getLocalStorageData.js";

let restartGameAction = () => {
  let minefield = document.querySelector(".minefield"); //it's important to keep this variable here

  let clickCounterValue = document.querySelector(".scoreboard__clickCounterValue");
  let allMinesValue = document.querySelector(".scoreboard__allMinesValue");
  let timerIntervalId = getTimerId();
  let timerValue = document.querySelector(".scoreboard__timeValue");
  let messageSection = document.querySelector(".messageSection ");
  clickCounterValue.textContent = 0;
  allMinesValue.textContent = getMinesQuantityValue();
  minefield.innerHTML = "";
  clearInterval(timerIntervalId);
  timerValue.textContent = "00:00";
  messageSection.classList.remove("messageSection_showSection");
  messageSection.firstElementChild.textContent = "";

  minefield.replaceWith(minefield.cloneNode(true)); //to remove event listeners on minefield

  setMinefield();
};

let restartGame = () => {
  let restartBtn = document.querySelector(".scoreboard__newGameBtn");

  restartBtn.addEventListener("click", () => {
    restartGameAction();
  });
};

export { restartGame, restartGameAction };
