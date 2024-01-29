const sign_in_btn = document.querySelector("#sign-in-btn");
const forgot_pass_btn = document.querySelector("#forgot-pass-btn");
const container = document.querySelector(".container");

forgot_pass_btn.addEventListener("click", () => {
  container.classList.add("forgot-pass-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("forgot-pass-mode");
});

let input = document.getElementById("password");
let icon = document.getElementById("icon");

let input2 = document.getElementById("password2");
let icon2 = document.getElementById("icon2");

function action() {
  if (input.type == "text") {
    input.type = "password";
    icon.src = "img/hide.svg";
  } else {
    input.type = "text";
    icon.src = "img/show.svg";
  }
}
function action2() {
  if (input2.type == "text") {
    input2.type = "password";
    icon.src = "img/hide.svg";
  } else {
    input2.type = "text";
    icon2.src = "img/show.svg";
  }
}
