let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  //make all display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //increment the index
  slideIndex++;

  //revert index if it exceeds imgage number
  if (slideIndex > slides.length) {
      slideIndex = 1
    }

  //display a particular slide
  slides[slideIndex-1].style.display = "block";

  // Change image every 2 seconds
  setTimeout(showSlides, 3000); 
}

showSlides();


document.querySelector('.hamburger').addEventListener('click' , function (){
    document.querySelector('.list').classList.toggle ('slide');
    document.querySelector('#menu').classList.toggle ('turn');
});


document.getElementsByClassName('submit').addEventListener('click', function (e) {
  e.preventDefault();
});