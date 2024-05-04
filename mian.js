const mobileMB = document.getElementById("menu-btn");
const mobileMenu = document.querySelector("aside");

let menuOpen = false;

console.log(JSON.parse(localStorage.getItem("user")));

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

  const user = {
    name: registrationForm.name.value,
    surname: registrationForm.surname.value,
    email: registrationForm.email.value,
    password: registrationForm.password.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("რეგისტრაცია წარმატებით შესრულდა");
});
