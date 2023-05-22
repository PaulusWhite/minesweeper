import { setIsSoundOn } from "./setLocalStorageData.js";
import { getIsSoundOn } from "./getLocalStorageData.js";

let switchSound = () => {
  let soundBtn = document.querySelector(".scoreboard__soundBtn");
  let soundIcon = soundBtn.firstChild;

  soundBtn.addEventListener("click", () => {
    let currentSoundValue = getIsSoundOn();
    let newSoundValue = currentSoundValue === "true" ? false : true;
    setIsSoundOn(newSoundValue);

    let newIconImgTitle = newSoundValue ? "soundOn" : "soundOff";
    soundIcon.setAttribute("src", `../assets/${newIconImgTitle}.svg`);
  });
};

export default switchSound;
