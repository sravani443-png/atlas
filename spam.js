// Get the previous and next buttons
document.addEventListener('DOMContentLoaded', () =>{
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');

// Get the carousel element and its slides
const carouselEl = document.querySelector('.carousel');
const slides = carouselEl.querySelectorAll('.carousel-item');

// Set the initial slide index to 0
let slideIndex = 0;

// Show the initial slide
showSlide(slideIndex);

// Add click event listeners to the previous and next buttons
// Add click event listeners to the previous and next buttons
// Add click event listeners to the previous and next buttons
prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });
  

// Define a function to show a specific slide with a fade animation
function showSlide(index) {
    // Get the currently active slide
    const currentSlide = carouselEl.querySelector('.carousel-item.active');
    
    // Get the slide to be shown
    const slide = slides[index];
    
    // If the slide to be shown is already active, return
    if (slide.classList.contains('active')) {
      return;
    }
    
    // Add the "active" class to the slide to be shown
    slide.classList.add('active');
    
    // Fade in the new slide
    slide.classList.add('fade');
    setTimeout(() => {
      slide.classList.remove('fade');
    }, 1500);
    
    // Fade out the currently active slide
    currentSlide.classList.add('fade');
    setTimeout(() => {
      currentSlide.classList.remove('active', 'fade');
    }, 1500);
  }
  
  
})
firebase.auth().onAuthStateChanged((user)=>{
  if(!user){
      location.replace("index.html")
  }
})


function logout(){
  firebase.auth().signOut()
}