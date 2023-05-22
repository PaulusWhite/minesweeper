//Utils
import createElement from "../utils/createElement.js";

//scripts
import getProspectiveNearMinesIndexArr from "./getProspectiveNearMinesIndexArr.js";
import { getLayoutIndexValue, getMinesQuantityValue } from "./getLocalStorageData.js";
import setResultGameEvent from "./setResultGameEvent.js";
import setSound from "./setSound.js";

let setNumberColorCoding = (cell, nextMinesCounter) => {
  let colorsObj = {
    1: "#170802",
    2: "#006400",
    3: "#4a7685",
    4: "#0000ff",
    5: "#71d071",
    6: "#353509",
    7: "#ff0000",
    8: "#8b0000",
  };

  cell.textContent = nextMinesCounter;
  cell.style.color = `${colorsObj[nextMinesCounter]}`;
};

let checkAreMinesNear = (cell, layoutIndex, cellsArr) => {
  if (cell.classList.contains("minefield__cell_opened")) return;

  cell.classList.add("minefield__cell_opened");
  cell.classList.remove("minefield__cell_unopened");

  let minefield = document.querySelector(".minefield");
  let currentCellIndex = +cell.getAttribute("data-cell-index");
  let prospectiveIndexArr = getProspectiveNearMinesIndexArr(+currentCellIndex, +layoutIndex);
  let nextMinesCounter = 0;

  prospectiveIndexArr.forEach((prospectiveIndex) => {
    let prospectiveCell = cellsArr[prospectiveIndex];
    if (prospectiveCell.isMine) nextMinesCounter++;
  });

  if (nextMinesCounter > 0) {
    setNumberColorCoding(cell, nextMinesCounter);
  } else {
    removeCellFlagAction(cell);

    prospectiveIndexArr.forEach((index) => {
      let nearCell = minefield.children[index];
      checkAreMinesNear(nearCell, layoutIndex, cellsArr);
    });
  }
};

let checkIsPlayWin = (cellsArr) => {
  let allCells = document.querySelectorAll(".minefield__cell");
  let minesQuantity = getMinesQuantityValue();
  let openedCellsCounter = 0;

  allCells.forEach((cell) => cell.classList.contains("minefield__cell_opened") && openedCellsCounter++);

  if (openedCellsCounter === allCells.length - minesQuantity) {
    let resultGameEventFlag = true;
    setResultGameEvent(cellsArr, resultGameEventFlag);
  }
};

let firstClickAction = (cell, cellsArr, createCellsArr) => {
  let wasFirtsClick = true;
  let cellIndex = +cell.getAttribute("data-cell-index");

  let layoutIndex = getLayoutIndexValue();
  let minesQuantity = getMinesQuantityValue();

  cellsArr = createCellsArr(layoutIndex, minesQuantity, cellIndex);

  checkAreMinesNear(cell, layoutIndex, cellsArr);
  checkIsPlayWin(cellsArr);
  setSound("open");

  return [wasFirtsClick, cellsArr];
};

let clickAction = (cell, cellsArr, layoutIndex, isCheckPlayWinFlag = true) => {
  if (!cell.classList.contains("minefield__cell_unopened")) return;

  let cellIndex = +cell.getAttribute("data-cell-index");
  let isCellMined = cellsArr[cellIndex].isMine;
  cell.classList.remove("minefield__cell_unopened");

  if (!isCellMined) {
    checkAreMinesNear(cell, layoutIndex, cellsArr);

    if (isCheckPlayWinFlag) {
      checkIsPlayWin(cellsArr, layoutIndex);
      setSound("open");
    }
  }

  if (isCellMined) {
    let blowIcon = createElement("img", ["minefield__blastIcon"]);

    if (!isCheckPlayWinFlag) {
      blowIcon.setAttribute("src", "../assets/foundBomb.svg");
      cell.classList.add("minefield__cell_foundMine");
    } else {
      blowIcon.setAttribute("src", "../assets/bombBlast.svg");
      cell.classList.add("minefield__cell_blast");
    }

    cell.append(blowIcon);
    let resultGameEventFlag = false;

    if (isCheckPlayWinFlag) {
      setResultGameEvent(cellsArr, resultGameEventFlag);
      setSound("blast");
    }
  }
};

let removeCellFlagAction = (cell) => {
  cell.classList.remove("minefield__cell_flagged");

  let prospectiveFlagIcon = cell.querySelector(".minefield__flagIcon");
  if (prospectiveFlagIcon) prospectiveFlagIcon.remove();
};

let setFlagAction = (cell) => {
  if (!cell.classList.contains("minefield__cell_unopened")) return;

  cell.classList.toggle("minefield__cell_flagged");

  if (cell.classList.contains("minefield__cell_flagged")) {
    let flagIcon = createElement("img", ["minefield__flagIcon"]);
    flagIcon.setAttribute("src", "../assets/flag.svg");
    cell.append(flagIcon);
  } else {
    let flagIcon = cell.firstElementChild;
    flagIcon && flagIcon.remove();
  }

  setSound("flag");
};

export { firstClickAction, clickAction, setFlagAction, removeCellFlagAction };
