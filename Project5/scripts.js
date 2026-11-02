
let slides = document.querySelector(".slider-container");
let slide = document.querySelectorAll(".slider");

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let counter = 0;

let slideCount = slide.length;

// Performance optimization: Lazy load slide background image on demand
// Prevents downloading ~863 KB of offscreen slide images during initial page load
function loadSlideImage(index) {
    let targetSlide = slide[index];
    if (targetSlide && targetSlide.dataset.bg) {
        targetSlide.style.backgroundImage = `url('${targetSlide.dataset.bg}')`;
        delete targetSlide.dataset.bg;
    }
}

nextBtn.addEventListener("click", function () {
    counter++;

    if (counter >= slideCount) counter = 0;
    loadSlideImage(counter);
    slides.style.transform = `translateX(-${counter * 100}%)`;
});

prevBtn.onclick = function () {
    counter--;
    if (counter < 0) counter = slideCount - 1;
    loadSlideImage(counter);
    slides.style.transform = `translateX(-${counter * 100}%)`;
};
// console.log("hello world");
