const firstSlickSlider = document.querySelector(".first-slick-slider");
const secondSlickSliderBig = document.querySelector(".second-slick-slider-big");
const secondSlickSliderSmall = document.querySelector(
	".second-slick-slider-small"
);

function slideUpploadContent(slider) {
	for (let i = 1; i < 12; i++) {
		let div = document.createElement("div");
		let img = document.createElement("img");
		// img.setAttribute("src", `img/${i}.jpg`);
		// img.setAttribute("alt", `${i}.jpg`);
		img.setAttribute("data-lazy", `img/${i}.jpg`);
		div.prepend(img);
		slider.prepend(div);
	}
}

if (firstSlickSlider) {
	slideUpploadContent(firstSlickSlider);
}
if (secondSlickSliderBig && secondSlickSliderSmall) {
	slideUpploadContent(secondSlickSliderBig);
	slideUpploadContent(secondSlickSliderSmall);
}

$(document).ready(function () {
	$(".first-slick-slider").slick({
		lazyLoad: "ondemand",
		dots: true,
		slidesToShow: 1,
		fade: true,
	});
	$(".second-slick-slider-big").slick({
		lazyLoad: "ondemand",
		asNavFor: ".second-slick-slider-small",
		fade: true,
		arrows: false,
	});
	$(".second-slick-slider-small").slick({
		lazyLoad: "progressive",
		asNavFor: ".second-slick-slider-big",
		variableWidth: true,
		focusOnSelect: true,
		dots: true,
		arrows: false,
	});
});
