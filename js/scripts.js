var writeUsBtn = document.querySelector(".write-us-button");
var popup = document.querySelector(".popup");
var popupClose = popup.querySelector(".popup-close-btn");
var form = popup.querySelector("form");
var eMail = popup.querySelector("[name=email]");
var textArea = popup.querySelector("[name=text]");
var storage = localStorage.getItem ("email")

  writeUsBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-visible");

  if (storage) {
    email.value = storage;
    text.focus()
  }

  else {
    email.focus();
  }
});

  popupClose.addEventListener("click", function(event) {
  popup.classList.remove("popup-visible");
  popup.classList.remove("popup-error");
});

  form.addEventListener("submit", function(event) {

  if
    (!email.value && !text.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести имейл и текст письма");
  }

  if (event.keyCode === 32) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести имейл и текст письма");
  }

  if
    (!text.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести текст письма");
    text.focus()
  }

  if (event.keyCode === 32) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести текст письма");
    text.focus()
  }

  if
    (!email.value) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести имейл");
    email.focus()
  }

  if (event.keyCode === 32) {
    event.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
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

/*Слайдер*/

var toggle1 = toggles.querySelector(".slide1");
var toggle2 = toggles.querySelector(".slide2");
var toggle3 = toggles.querySelector(".slide3");

var toggleSlide1 = toggles.querySelector("[data-name=slide1]");
var toggleSlide2 = toggles.querySelector("[data-name=slide2]");
var toggleSlide3 = toggles.querySelector("[data-name=slide3]");

var slider1 = document.querySelector(".slider_1");
var slider2 = document.querySelector(".slider_2");
var slider3 = document.querySelector(".slider_3");

  toggle1.addEventListener("click", function(event) {
  toggleSlide1.classList.add("main-slider-toggle-active");
  slider1.classList.add("main-slide1-wrapper");
  slider1.classList.add("sliders-active");
  slider2.classList.add("sliders");
  slider3.classList.add("sliders");

  slider1.classList.remove("sliders");
  toggleSlide2.classList.remove("main-slider-toggle-active");
  toggleSlide3.classList.remove("main-slider-toggle-active");
});

  toggle1.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    toggleSlide1.classList.add("main-slider-toggle-active");
    slider1.classList.add("main-slide1-wrapper");
    slider1.classList.add("sliders-active");
    slider2.classList.add("sliders");
    slider3.classList.add("sliders");

    slider1.classList.remove("sliders");
    toggleSlide2.classList.remove("main-slider-toggle-active");
    toggleSlide3.classList.remove("main-slider-toggle-active");
  }
  });

  toggle2.addEventListener("click", function(event) {
  toggleSlide2.classList.add("main-slider-toggle-active");
  slider2.classList.add("sliders-active");
  slider1.classList.add("sliders");
  slider1.classList.add("sliders");
  slider3.classList.add("sliders");

  slider2.classList.remove("sliders");
  toggleSlide1.classList.remove("main-slider-toggle-active");
  toggleSlide3.classList.remove("main-slider-toggle-active");
});

  toggle2.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    toggleSlide2.classList.add("main-slider-toggle-active");
    slider2.classList.add("sliders-active");
    slider1.classList.add("sliders");
    slider1.classList.add("sliders");
    slider3.classList.add("sliders");

    slider2.classList.remove("sliders");
    toggleSlide1.classList.remove("main-slider-toggle-active");
    toggleSlide3.classList.remove("main-slider-toggle-active");
  }
  });

  toggle3.addEventListener("click", function(event) {
  toggleSlide3.classList.add("main-slider-toggle-active");
  slider3.classList.add("sliders-active");
  slider1.classList.add("sliders");
  slider2.classList.add("sliders");

  slider3.classList.remove("sliders");
  toggleSlide2.classList.remove("main-slider-toggle-active");
  toggleSlide1.classList.remove("main-slider-toggle-active");
});

  toggle3.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    toggleSlide3.classList.add("main-slider-toggle-active");
    slider3.classList.add("sliders-active");
    slider1.classList.add("sliders");
    slider2.classList.add("sliders");

    slider3.classList.remove("sliders");
    toggleSlide2.classList.remove("main-slider-toggle-active");
    toggleSlide1.classList.remove("main-slider-toggle-active");
  }
});
