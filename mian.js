const mobileMB = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

mobileMB.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (menuOpen) {
    mobileMB.src = "./menu.png";
    menuOpen = false;
  } else {
    mobileMB.src = "./close.png";
    menuOpen = true;
  }
});
