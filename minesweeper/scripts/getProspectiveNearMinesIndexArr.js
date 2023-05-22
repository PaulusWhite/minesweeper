let getProspectiveNearMinesIndexArr = (currentCellIndex, layoutIndex) => {
  let maxValue = layoutIndex * layoutIndex - 1;
  let [topNearCell, bottomNearCell] = [currentCellIndex - layoutIndex, currentCellIndex + layoutIndex];
  let leftNearCell = null;
  let diagonalTopLeftNearCell = null;
  let diagonalBottomLeftNearCell = null;
  let rightNearCell = null;
  let diagonalTopRighttNearCell = null;
  let diagonalBottomRightNearCell = null;

  if (currentCellIndex !== 0 && currentCellIndex % layoutIndex !== 0) {
    leftNearCell = currentCellIndex - 1;
    diagonalTopLeftNearCell = currentCellIndex - layoutIndex - 1;
    diagonalBottomLeftNearCell = currentCellIndex + layoutIndex - 1;
  }

  if ((currentCellIndex + 1) % layoutIndex !== 0) {
    rightNearCell = currentCellIndex + 1;
    diagonalTopRighttNearCell = currentCellIndex - layoutIndex + 1;
    diagonalBottomRightNearCell = currentCellIndex + layoutIndex + 1;
  }

  let advanceIndexArr = [
    topNearCell,
    bottomNearCell,
    leftNearCell,
    rightNearCell,
    diagonalTopLeftNearCell,
    diagonalBottomLeftNearCell,
    diagonalTopRighttNearCell,
    diagonalBottomRightNearCell,
  ];

  let indexArr = advanceIndexArr.filter((value) => value >= 0 && value !== null && value <= maxValue);

  return indexArr;
};

export default getProspectiveNearMinesIndexArr;
