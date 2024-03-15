// JavaScript to handle the click events and update cont2
document.addEventListener("DOMContentLoaded", function () {
	var cont1Links = document.querySelectorAll("#cont1 a");

	cont1Links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault(); // Prevent default link behavior
			var content = this.getAttribute("data-content"); // Get content from data attribute
			document.getElementById("cont2").innerHTML = content; // Update cont2 content
		});
	});
});
