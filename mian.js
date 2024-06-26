const mobileMB = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

// console.log(JSON.parse(localStorage.getItem("user")));

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
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = storedUsers.find((user) => user.email === email);

  if (existingUser) {
    alert("უკვე არს");
  } else {
    const newUser = {
      name: registrationForm.name.value,
      surname: registrationForm.surname.value,
      email: email,
      password: registrationForm.password.value,
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("რეგისტრაცია შესრულდა");
  }
});

function gadayvana() {
  window.location.href = "http://127.0.0.1:5500/index.html";
}

function gadmoyvana() {
  window.location.href = "http://127.0.0.1:5500/login.html";
}
