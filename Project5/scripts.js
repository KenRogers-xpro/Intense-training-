
let slides = document.querySelector(".slider-container");
let slide = document.querySelectorAll(".slider")

let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

let counter = 0;

let slideCount = slide.length;

nextBtn.addEventListener ("click", function (){

    counter ++;

    if (counter >= slideCount) counter = 0;
    slides.style.transform = `translateX(-${counter * 100}%)`

})
prevBtn.onclick = function () {
    counter --;
    if (counter < 0) counter = slideCount - 1;
    slides.style.transform = `translateX(-${counter * 100}%)`

}
// console.log("hello world");
