import { setTimerIntervalId } from "./setSessionStorageData.js";

let setTimer = () => {
  let timerValue = document.querySelector(".scoreboard__timeValue");

  let secValue = "00";
  let minValue = "00";
  let hourValue = "00";

  let intervalId = setInterval(() => {
    secValue = +secValue + 1;
    secValue = +secValue < 10 ? "0" + secValue : secValue;

    if (secValue === 60) {
      secValue = "00";
      minValue = +minValue + 1;
      minValue = minValue < 10 ? "0" + minValue : minValue;
    }

    if (minValue === 60) {
      minValue = "00";
      hourValue = +hourValue + 1;
      hourValue = hourValue < 10 ? "0" + hourValue : hourValue;
    }

    if (hourValue === "00") {
      timerValue.textContent = `${minValue}:${secValue}`;
    } else {
      timerValue.textContent = `${hourValue}:${minValue}:${secValue}`;
    }
  }, 1000);

  setTimerIntervalId(intervalId);
};

export default setTimer;
