// JavaScript code here
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideWidth = slides[0].offsetWidth;

function goToSlide(index) {
	slider.style.transform = `translateX(-${slideWidth * index}px)`;
	currentSlide = index;
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	goToSlide(currentSlide);
}

// Auto slide functionality
setInterval(nextSlide, 5000);
