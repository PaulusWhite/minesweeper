//Utils
import createElement from "../utils/createElement.js";

//Scripts
import { firstClickAction, clickAction, setFlagAction } from "./setCellClickAction.js";
import setClickCounter from "./setClickCounter.js";
import { getLayoutIndexValue } from "./getLocalStorageData.js";
import setTimer from "./setTimer.js";

let setMinesInCellsArr = (cellsArr, layoutIndex, minesQuantity, prohibitedCellIndex) => {
  let minesCellsObj = {};
  let cellsQuantity = layoutIndex * layoutIndex - 1;

  do {
    let randomCell = Math.floor(Math.random() * (cellsQuantity - 0 + 1)) + 0; // 0 is min value

    if (minesCellsObj[randomCell] || randomCell === prohibitedCellIndex) continue;

    minesCellsObj[randomCell] = true;
  } while (Object.keys(minesCellsObj).length < minesQuantity);

  Object.keys(minesCellsObj).forEach((cellIndex) => {
    cellsArr[cellIndex].isMine = true;
  });

  return cellsArr;
};

let createCellsArr = (layoutIndex, minesQuantity, prohibitedCellIndex) => {
  let cellsArr = [];

  for (let i = 0; i < layoutIndex * layoutIndex; i++) {
    let obj = { isMine: false };
    cellsArr.push(obj);
  }

  cellsArr = setMinesInCellsArr(cellsArr, layoutIndex, minesQuantity, prohibitedCellIndex);

  return cellsArr;
};

let setMinefieldClass = (minefield, layoutIndex) => {
  let minefieldSecondClass = minefield.classList[1];
  minefield.classList.remove(minefieldSecondClass);

  if (layoutIndex === 10) minefield.classList.add("easyLayout");
  if (layoutIndex === 15) minefield.classList.add("mediumLayout");
  if (layoutIndex === 20) minefield.classList.add("hardLayout");
};

let setLefMouseClick = (minefield, layoutIndex) => {
  let wasFirtsClick = false;
  let cellsArr = null; //init value

  minefield.addEventListener("click", (event) => {
    let target = event.target;
    let cell = target.closest(".minefield__cell");

    if (!cell || (cell && cell.classList.contains("minefield__cell_flagged"))) return;

    setClickCounter(cell);

    if (!wasFirtsClick) {
      [wasFirtsClick, cellsArr] = firstClickAction(cell, cellsArr, createCellsArr);
      setTimer();
    } else {
      clickAction(cell, cellsArr, layoutIndex);
    }
  });
};

let setRightMouseClick = (minefield) => {
  minefield.addEventListener("contextmenu", (event) => {
    let target = event.target;
    let cell = target.closest(".minefield__cell");

    if (!cell) return;
    event.preventDefault();
    setFlagAction(cell);
  });
};

let setMinefield = () => {
  let minefield = document.querySelector(".minefield");
  let layoutIndex = getLayoutIndexValue();

  setMinefieldClass(minefield, layoutIndex);

  for (let i = 0; i < layoutIndex * layoutIndex; i++) {
    let cell = createElement("span", ["minefield__cell", "minefield__cell_unopened"]);
    cell.dataset.cellIndex = i;
    minefield.append(cell);
  }

  setLefMouseClick(minefield, layoutIndex);
  setRightMouseClick(minefield);
};

export default setMinefield;
