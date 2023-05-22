let getScoreboardData = () => {
  let timeValue = document.querySelector(".scoreboard__timeValue");
  let clickCounter = document.querySelector(".scoreboard__clickCounterValue");

  return [timeValue.textContent, clickCounter.textContent];
};

export default getScoreboardData;
