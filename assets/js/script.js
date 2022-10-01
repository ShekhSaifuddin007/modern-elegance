$(document).ready(() => {
	var currentIndex = 0,
		navItems = $(".hero-section .nav li");

	function setSlide(index) {
		navItems.removeClass("selected");
		navItems.eq(index).addClass("selected");
		$(".hero-section .slide").fadeOut({ queue: false, duration: "slow" });
		$(".hero-section .slide")
			.eq(index)
			.fadeIn({ queue: false, duration: "slow" });
	}

	$(".hero-section .nav li").click(function () {
		var index = $(".hero-section .nav li").index($(this));
		currentIndex = index;
		setSlide(currentIndex);
	});

	function slide() {
		if (currentIndex < navItems.length - 1) {
			currentIndex++;
			setSlide(currentIndex);
		} else {
			currentIndex = 0;
			setSlide(currentIndex);
		}
	}

	var interval = setInterval(slide, 5000);

	$(document)
		.on("mouseenter", "li.mega-menu-dropdown", function () {
			$(".mega-menu-dropdown .drop-menu").css({
				visibility: "visible",
				opacity: "1",
			});

			$("#header").addClass("header-bg");
		})
		.on("mouseleave", "li.mega-menu-dropdown", function () {
			$(".mega-menu-dropdown .drop-menu").css({
				visibility: "hidden",
				opacity: "0",
			});

			$("#header").removeClass("header-bg");
		});

	var aboutCarousel = $(".about-section .owl-carousel");
	aboutCarousel.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: true,
	});

	// Go to the next item
	$(".carousel-content .control").click(function () {
		aboutCarousel.trigger("next.owl.carousel");
	});

	$(".blog-section .owl-carousel").owlCarousel({
		stagePadding: 50,
		margin: 30,
	});

	$("#locations").slimScroll({
		height: "calc(538px - 90px)",
		distance: "-3px",
		alwaysVisible: true,
	});

	$(document)
		.on("mouseenter", ".project-section #second-project", function () {
			$("#second-project .second").css({
				top: "0px",
			});
		})
		.on("mouseleave", ".project-section #second-project", function () {
			$("#second-project .second").css({
				top: "576px",
			});
		});
});
