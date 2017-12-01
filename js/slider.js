var toggle1 = toggles.querySelector('.slide1');
var toggle2 = toggles.querySelector('.slide2');
var toggle3 = toggles.querySelector('.slide3');

var toggleSlide1 = toggles.querySelector('[data-name="slide1"]');
var toggleSlide2 = toggles.querySelector('[data-name="slide2"]');
var toggleSlide3 = toggles.querySelector('[data-name="slide3"]');

var slider1 = document.querySelector('.slider_1');
var slider2 = document.querySelector('.slider_2');
var slider3 = document.querySelector('.slider_3');

  toggle1.addEventListener('click', function(event) {
  toggleSlide1.classList.add('main-slider-toggle-active');
  slider1.classList.add('main-slide1-wrapper');
  slider1.classList.add('sliders-active');
  slider2.classList.add('sliders');
  slider3.classList.add('sliders');

  slider1.classList.remove('sliders');
  toggleSlide2.classList.remove('main-slider-toggle-active');
  toggleSlide3.classList.remove('main-slider-toggle-active');
});

  toggle2.addEventListener('click', function(event) {
  toggleSlide2.classList.add('main-slider-toggle-active');
  slider2.classList.add('sliders-active');
  slider1.classList.add('sliders');
  slider1.classList.add('sliders');
  slider3.classList.add('sliders');

  slider2.classList.remove('sliders');
  toggleSlide1.classList.remove('main-slider-toggle-active');
  toggleSlide3.classList.remove('main-slider-toggle-active');
});

  toggle3.addEventListener('click', function(event) {
  toggleSlide3.classList.add('main-slider-toggle-active');
  slider3.classList.add('sliders-active');
  slider1.classList.add('sliders');
  slider2.classList.add('sliders');

  slider3.classList.remove('sliders');
  toggleSlide2.classList.remove('main-slider-toggle-active');
  toggleSlide1.classList.remove('main-slider-toggle-active');
});
