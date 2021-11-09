const firstSlider = document.querySelector(".first-slider");
const secondSlider = document.querySelector(".second-slider-carousel");

function slideUpploadContent(slider) {
	for (let i = 1; i < 12; i++) {
		let div = document.createElement("div");
		let img = document.createElement("img");
		img.classList.add("owl-lazy");
		// img.setAttribute("src", `img/${i}.jpg`);
		// img.setAttribute("alt", `${i}.jpg`);
		img.setAttribute("data-src", `img/${i}.jpg`);
		div.prepend(img);
		slider.prepend(div);
	}
}

if (firstSlider) {
	slideUpploadContent(firstSlider);
}
if (secondSlider) {
	slideUpploadContent(secondSlider);
}

$(document).ready(function () {
	$(".first-slider").owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		lazyLoadEager: 2,
	});

	var secondSliderCurrent = $(".second-slider-current");

	$(".second-slider-carousel")
		.owlCarousel({
			loop: true,
			lazyLoad: true,
			lazyLoadEager: 2,
			dots: false,
			center: true,
			mouseDrag: false,
		})
		.on("changed.owl.carousel", changeSecondSliderCurrent);

	function changeSecondSliderCurrent() {
		secondSliderCurrent.empty();

		var secondSliderCarouselItems = $(".second-slider .owl-item");

		secondSliderCarouselItems.each(function (index, item) {
			if ($(this).hasClass("center")) {
				$(this).clone().appendTo(secondSliderCurrent);
			}
		});
	}
	changeSecondSliderCurrent();
});
