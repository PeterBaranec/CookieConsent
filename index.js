let modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const cookieForm = document.getElementById("cookie-form");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

cookieForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
