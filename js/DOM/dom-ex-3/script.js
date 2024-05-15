
const slides = document.querySelectorAll('img');
let currentIndex = 0;

function moveSlide(direction) {
  const activeSlide = document.querySelector('.active');
  const nextSlide = activeSlide.nextElementSibling;
  activeSlide.classList.remove('active');
  currentIndex += direction;
  const numberOfSlides = document.querySelectorAll('img')
  const arrOfSlides = Array.from(numberOfSlides)
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= arrOfSlides.length) {
    currentIndex = currentIndex - 1;
  }
  console.log(currentIndex);
  console.log(arrOfSlides);
  arrOfSlides[currentIndex].classList.add('active')
}