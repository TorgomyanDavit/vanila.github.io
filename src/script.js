// document.addEventListener("DOMContentLoaded", function() {
//     const slidesContainer = document.getElementById("slides-container");
//     const slides = document.querySelectorAll(".modatech-look-widget-container");
//     const prevButton = document.getElementById("slide-arrow-prev");
//     const nextButton = document.getElementById("slide-arrow-next");

    
//     prevButton.addEventListener("click", () => {
//         const slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
//         slidesContainer.scrollLeft -= slideWidth;
//     });
//     nextButton.addEventListener("click", () => {
//         const slideWidth = slides.length > 0 ? slides[0].clientWidth : 0;
//         slidesContainer.scrollLeft += slideWidth;
//     });
// });


$(document).ready(function(){
    $('.modatech-look-widgets').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false
    });
});

