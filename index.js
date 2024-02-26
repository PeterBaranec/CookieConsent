// getting elements from dom
let modal = document.getElementById("modal");
const closeBtn = document.getElementById("modal-close-btn");
const cookieForm = document.getElementById("cookie-form");
const modalText = document.getElementById("modal-text");
const choiceBtns = document.getElementById("modal-choice-btns");
const declineBtn = document.getElementById("decline-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  choiceBtns.classList.toggle("modal-choice-btns-reverse");
});

cookieForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //create new object and then getting input values from it
  const consentFormData = new FormData(cookieForm);
  const name = consentFormData.get("fullName");

  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="uploadText">
  Uploading your data to the dark web...
  </p>
  </div>`;

  setTimeout(function () {
    document.getElementById("uploadText").innerHTML = "Making the sale...";
  }, 1500);

  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    closeBtn.disabled = false;
  }, 3000);
});
