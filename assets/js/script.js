$(document).ready(() => {
	var currentIndex = 0,
		navItems = $(".hero-section .nav li");

	function setSlide(index) {
		navItems.removeClass("selected");
		navItems.eq(index).addClass("selected");
		$(".hero-section .slide").css("display", "none");
		$(".hero-section .slide").eq(index).css("display", "block");
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
});
