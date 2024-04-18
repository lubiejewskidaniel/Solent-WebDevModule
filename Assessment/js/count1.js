document.addEventListener("DOMContentLoaded", function () {
	var cont1Links = document.querySelectorAll("#cont1 a");

	cont1Links.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			var content = this.getAttribute("data-content");
			document.getElementById("cont2").innerHTML = content;
		});
	});
});
