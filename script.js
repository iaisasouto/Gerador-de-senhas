function generatePassword() {
  let length = document.querySelector("#slider").value;
  let charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@";
  let password = "";

  for (let contador = 0; contador < length; contador++) {
    let randomIndex = Math.floor(Math.random() * charset.length);

    password += charset[randomIndex];
  }

  let passwordElement = document.querySelector("#password");
  passwordElement.textContent = password;
  passwordElement.parentElement.classList.remove("hide");
  passwordElement.parentElement.style.opacity = 1;

  passwordElement.addEventListener("click", () => {
    copyToClipboard(password);
  });
}

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  showToast("Senha copiada!");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", (event) => {
  let sliderElement = document.querySelector("#slider");
  let buttonElement = document.querySelector("#button");
  let sizePassword = document.querySelector("#valor");

  buttonElement.addEventListener("click", generatePassword);

  sizePassword.textContent = sliderElement.value;
  sliderElement.addEventListener("input", function () {
    sizePassword.textContent = sliderElement.value;
  });
});
