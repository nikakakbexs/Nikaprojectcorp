const mobileMB = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

// console.log(JSON.parse(localStorage.getItem("users")));

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
    alert("რეგისტრაცია შესრულდა");
    // Here you can redirect or perform any action after successful login
  } else {
    alert("ელ. ფოსტა ან პაროლი არასწორია");
  }
});

function gadayvana() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}
