function validateName(event) {
  const name = event.target.value;
  const georgianLettersRegex = /^[\u10A0-\u10EA]+$/;
  let nameValid = georgianLettersRegex.test(name);
  let error = false;
  const errorExist = event.target.parentElement.querySelector(".error");

  if (errorExist) {
    errorExist.remove();
  }

  if (!nameValid) {
    error = "მხოლოდ ქართული ასოები";
  } else if (name.length < 2) {
    error = "მინიმუმ ორი ასო";
  } else if (name.length > 21) {
    error = "მაქსიმუმ 20 ასო";
  }

  if (error) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
}

function validateSurname(event) {
  const name = event.target.value;
  const georgianLettersRegex = /^[\u10A0-\u10EA]+$/;
  let nameValid = georgianLettersRegex.test(name);
  let error = false;
  const errorExist = event.target.parentElement.querySelector(".error");

  if (errorExist) {
    errorExist.remove();
  }

  if (!nameValid) {
    error = "მხოლოდ ქართული ასოები";
  } else if (name.length < 2) {
    error = "მინიმუმ ორი ასო";
  } else if (name.length > 21) {
    error = "მაქსიმუმ 20 ასო";
  }

  if (error) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
}

function validateEmail(event) {
  const email = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValid = emailRegex.test(email);
  let error = false;
  const errorExist = event.target.parentElement.querySelector(".error");

  if (errorExist) {
    errorExist.remove();
  }

  if (!emailValid) {
    error = "ელ. ფოსტა არასწორია";
  }

  if (error) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
}

function validatePassword(event) {
  const password = event.target.value;
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  let passwordValid = passwordRegex.test(password);
  let error = false;
  const errorExist = event.target.parentElement.querySelector(".error");

  if (errorExist) {
    errorExist.remove();
  }

  if (!passwordValid) {
    if (password.length < 6) {
      error = "მინიმუმ 6 სიმბოლო";
    } else if (!/\d/.test(password)) {
      error = "უნდა შეიცავდეს მინ. ერთ რიცხვს";
    } else if (!/[!@#$%^&*]/.test(password)) {
      error = "უნდა შეიცავდეს მინ. 1 სიმბოლოს";
    }
  }

  if (error) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
}

function validateRepeatPassword(event) {
  const repeatPassword = event.target.value;
  const originalPassword = document.querySelector("#password").value;
  let error = false;
  const errorExist = event.target.parentElement.querySelector(".error");

  if (errorExist) {
    errorExist.remove();
  }

  if (repeatPassword !== originalPassword) {
    error = "პაროლი არ ემთხვევა";
  }

  if (error) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }
}

document
  .querySelector(".hero_form #confrim")
  .addEventListener("input", validateRepeatPassword);

document
  .querySelector(".hero_form #name")
  .addEventListener("input", validateName);
document
  .querySelector(".hero_form #surname")
  .addEventListener("input", validateName);

document
  .querySelector(".hero_form #email")
  .addEventListener("input", validateEmail);
document
  .querySelector(".hero_form #password")
  .addEventListener("input", validatePassword);
