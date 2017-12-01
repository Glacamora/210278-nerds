var writeUsBtn = document.querySelector('.write-us-button');
var popup = document.querySelector('.popup');
var popupClose = popup.querySelector('.popup-close-btn');
var form = popup.querySelector("form");
var eMail = popup.querySelector('[name=email]');
var textArea = popup.querySelector('[name=text]');
var storage = localStorage.getItem ("email")

writeUsBtn.addEventListener('click', function(event) {
event.preventDefault();
popup.classList.add('popup-visible');

  if (storage) {
    email.value = storage;
    text.focus()
  }

  else {
    email.focus();
  }
});

  popupClose.addEventListener('click', function(event) {
  popup.classList.remove('popup-visible');
  popup.classList.remove("popup-error");
});

  form.addEventListener("submit", function(event) {

if
  (!email.value && !text.value) {
  event.preventDefault();
  popup.classList.add("popup-error");
  console.log("Нужно ввести имейл и текст письма");
}

if
  (!text.value) {
  event.preventDefault();
  popup.classList.add("popup-error");
  console.log("Нужно ввести текст письма");
  text.focus()
}

if
  (!email.value) {
  event.preventDefault();
  popup.classList.add("popup-error");
  console.log("Нужно ввести имейл");
  email.focus()
}

else {
  localStorage.setItem ("email", email.value);
}
});

window.addEventListener("keydown", function (event) {
if (event.keyCode === 27) {
  if (popup.classList.contains("popup-visible")) {
    popup.classList.remove("popup-visible");
  }
}
});
