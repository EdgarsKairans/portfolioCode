import "../index.html";
import "../sass/style.scss";

const animationSpan = document.querySelectorAll(
	".contact__animation-vapour span"
);

animationSpan.forEach((elem) => {
	const elemNumber = elem.classList.value * 0.5;
	elem.style.animationDelay = `${elemNumber}s`;

});

