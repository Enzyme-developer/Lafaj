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

gsap.from(".logo", {duration:1.5 ,ease: "bounce" ,rotate:180, x:-50 , y:-300 ,delay:1});


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 30;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = -30;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.3, 
      x: 0,
      y: 0, 
      delay:1,
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });

document.getElementsByClassName('submit').addEventListener('click', function (e) {
  e.preventDefault();
});