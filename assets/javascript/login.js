const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const navigateSignup = document.querySelector(".navigate--signup");
const navigateSignin = document.querySelector(".navigate--signin");
const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");
const navigateToSignup = function () {
  signup.classList.remove("hidden");
  signin.classList.add("hidden");
};
const navigateToSignin = function () {
  signup.classList.add("hidden");
  signin.classList.remove("hidden");
};
navigateSignup.addEventListener("click", navigateToSignup);
navigateSignin.addEventListener("click", navigateToSignin);
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// change