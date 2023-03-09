function(({

    "strict";

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
      
        burger.addEventListener('click', () => {
          // Toggle Nav
          nav.classList.toggle('nav-active');
      
          // Animate Links
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = '';
            } else {
             
      
}));

function()({
    // Add animation on button click
const buttons = document.querySelectorAll('.hero-btn button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.add('animated', 'heartBeat');
    setTimeout(() => {
      button.classList.remove('animated', 'heartBeat');
    }, 1000);
  });
});

})