const mobileMB = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");
const mainBtn = document.querySelector(".main-btn");
const loginForm = document.querySelector(".login_form");

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

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    mainBtn.textContent = loggedInUser.name;
    document.querySelector(".hero_form").classList.add("hidden");
  }
});

const registrationForm = document.querySelector(".hero_form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const errorExist = document.querySelector(".error");

  if (errorExist) {
    alert("სწორად შეავსეთ რეგისტრაციის ფორმა");
    return;
  }

  const email = registrationForm.email.value;
  const password = registrationForm.password.value;
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = storedUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (existingUser) {
    alert("შესვლა არს");
    mainBtn.textContent = existingUser.name;
    registrationForm.classList.add("hidden");
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
  } else {
    loginForm.email.classList.add("invalid");
    loginForm.password.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "ელ. ფოსტა ან პაროლი არასწორია";
    loginForm.password.parentElement.appendChild(errorElement);
  }
});

function gadayvana() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
