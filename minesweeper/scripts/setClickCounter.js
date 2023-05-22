let setClickCounter = (cell) => {
  if (!cell.classList.contains("minefield__cell_unopened")) return;

  let clickCounterValue = document.querySelector(".scoreboard__clickCounterValue");
  clickCounterValue.textContent = +clickCounterValue.textContent + 1;
};

export default setClickCounter;
