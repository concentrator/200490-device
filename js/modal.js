var link = document.querySelector(".contact-link");
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("textarea");
var form = popup.querySelector("form");
var input = popup.querySelectorAll("input");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

      if (localStorage.getItem("login")) {
        login.value = localStorage.getItem("login");
      }
      if (localStorage.getItem("email")) {
        email.value = localStorage.getItem("email");
      }
      if (localStorage.getItem("message")) {
        message.value = localStorage.getItem("message");
      }
      if (!login.value) {
        login.focus();
      }
      if (!email.value) {
        email.focus();
      }
      if (!message.value) {
        message.focus();
      } else {
      login.focus();
      }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !message.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      if (!login.value) {
        login.classList.add("invalid");
      } else {
        login.classList.remove("invalid");
        localStorage.setItem("login", login.value);
      }
      if (!email.value) {
        email.classList.add("invalid");
      } else {
        email.classList.remove("invalid");
        localStorage.setItem("email", email.value);
      }
      if (!message.value) {
        message.classList.add("invalid");
      } else {
        message.classList.remove("invalid");
        localStorage.setItem("message", message.value);
      }
    }
  });

var mapLink = document.querySelector(".contacts-map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
