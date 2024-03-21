document.addEventListener("DOMContentLoaded", function () {
	let currentSlide = 0;
	const slides = document.querySelectorAll(".slide");
	const totalSlides = slides.length;

	function showSlide(n) {
		slides.forEach((slide) => (slide.style.display = "none"));
		slides[n].style.display = "block";
		slides[n].style.animation = "slideIn 10s forwards";
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
		showSlide(currentSlide);
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
		showSlide(currentSlide);
	}

	showSlide(currentSlide);

	setInterval(nextSlide, 10000);
	transition;
});
