const slides = document.getElementsByClassName("carousel-item");
const prev = document.getElementById("carousel-button-prev");
const next = document.getElementById("carousel-button-next");

let slidePostion = 0;
const totalSlides = slides.length;

next.addEventListener("click", moveToNextSlide);

prev.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  removeClass();
  if (slidePostion < totalSlides - 1) {
    slidePostion += 1;
    console.log(slidePostion);
  } else {
    slidePostion = 0;
    console.log(slidePostion);
  }
  addClass();
}

function moveToPrevSlide() {
  console.log(slidePostion);
  removeClass();
  if (slidePostion === 0) {
    slidePostion = totalSlides - 1;
    console.log(slidePostion);
  } else {
    slidePostion -= 1;
    console.log(slidePostion);
  }
  addClass();
}

function removeClass() {
  slides[slidePostion].classList.remove("carousel-item-visible");
}
function addClass() {
  slides[slidePostion].classList.add("carousel-item-visible");
}

/*
    Grabbing all carousel items and attaching button event listeners
    
    1) Grab all 'carousel-item' - hint: elements...by...class name! Store this value in a const called 'slides'
    2) Set a slide position of 0 (as that's what the starting index position will be when we grab all the carousel items - remember that arrays start from 0 and not 1) - we want the slide position to always start at 0. When a user goes to the next or previous slide, we will update this--the reason it's 0 and not one is that we want to match the position in the 'slides' const that we stored above! As this is going to be changing, what seems more appropriate, a let statement or a const?
    3) Store a const value of 'totalSlides' that is equal to the length of the slides
    4) Add event listeners to both buttons 'carousel-button-next' and 'carousel-button-prev' - seeing as though we expect the user to click to change slide position, make sure we set the eventListener to 'click' and the second arguments will be functions!
    5) Create two functions: moveToNextSlide and moveToPrevSlide - use both of these in action 4 as the second argument on your 'addEventListener' - don't worry about these functions being empty, we will add to them in the upcoming screencasts
    6) Use console.log to validate that you have 3 'carousel-item' in your 'slides' const
*/
