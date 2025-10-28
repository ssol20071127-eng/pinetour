const [prev, next] = document.querySelectorAll("button");
const sliders = document.querySelector(".slides");
const allSlides = document.querySelectorAll(".slide");
let currentSlide = 0;

sliders.style.transform = `translateX(-${(currentSlide - 1) * 400}px)`;

allSlides[currentSlide].style.scale = 1;

prev.addEventListener("click", () => {
  if (currentSlide === 0) return;

  allSlides[currentSlide].style.scale = 0.7;

  currentSlide--;

  allSlides[currentSlide].style.scale = 1;

  sliders.style.transform = `translateX(-${(currentSlide - 1) * 400}px)`;
});

next.addEventListener("click", () => {
  if (currentSlide === allSlides.length - 1) return;

  allSlides[currentSlide].style.scale = 0.7;

  currentSlide++;

  allSlides[currentSlide].style.scale = 1;

  slide.style.tranrsform = `transLateX(-${(currentSlide - 1) * 400}px)`;
});
