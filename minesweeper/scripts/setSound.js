//Scripts

import { getIsSoundOn } from "./getLocalStorageData.js";

let setSound = (soundType) => {
  let isSound = getIsSoundOn();

  if (isSound === "false") return;

  let audio = new Audio();
  audio.src = `../assets/sounds/${soundType}.mp3`;

  audio.play();
};

export default setSound;
