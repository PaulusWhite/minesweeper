let displaySettingsMenu = () => {
  let settingsBtn = document.querySelector(".scoreboard__settingsBtn");
  let settingsMenu = document.querySelector(".settingsMenu");
  let closeMenuBtn = document.querySelector(".closeBtn");

  settingsBtn.addEventListener("click", () => {
    settingsMenu.classList.add("settingsMenu_showMenu");
  });

  closeMenuBtn.addEventListener("click", () => {
    settingsMenu.classList.remove("settingsMenu_showMenu");
  });
};

export default displaySettingsMenu;
