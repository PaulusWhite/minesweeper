//Scripts
import { clickAction, removeCellFlagAction } from "./setCellClickAction.js";

let openAllCells = (cellsArr, layoutIndex) => {
  let allCells = document.querySelectorAll(".minefield__cell");
  allCells.forEach((cell) => {
    let isCheckPlayWinFlag = false;
    removeCellFlagAction(cell);
    clickAction(cell, cellsArr, layoutIndex, isCheckPlayWinFlag);
  });
};

export default openAllCells;
