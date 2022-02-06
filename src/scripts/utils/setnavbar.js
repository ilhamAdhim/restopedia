export function navbar() {
	const btn = document.getElementById("hamburger");
	const drawer = document.getElementById("drawer");
	const navbarElement = document.getElementById("nav-menu");
	const el = document.querySelectorAll(".nav-item");
	btn.addEventListener("click", () => {
		console.log("terclcik" + drawer.style.display);
		if (drawer.style.display === "flex") {
			drawer.style.display = "none";
			navbarElement.style.display = "flex";
		} else {
			for (let index = 0; index < el.length; index++) {
				el[index].classList.add("open");
			}
			drawer.style.display = "flex";
			drawer.style.flexDirection = "column";
			drawer.style.textAlign = "center";
			drawer.style.width = "90vw";
			navbarElement.style.display = "none";
		}
	});

	window.onresize = () => {
		if (window.innerWidth > 550) {
			drawer.style.display = "none";
			navbarElement.style.display = "flex";
		}
	};
}
