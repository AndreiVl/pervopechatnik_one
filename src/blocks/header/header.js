const header = () => {
	jQuery(document).ready(function () {
		jQuery("#hamburger").click(function () {
			/*jQuery(this).toggleClass('close');
			jQuery(".menu").toggleClass('menu--open');*/
			jQuery(".header__nav").slideToggle();
		});

		jQuery(window).resize(function () {
			if (jQuery(window).width() > 767) {
				if ($('.header__nav').attr('style')) {
					$('.header__nav').removeAttr('style');
				}
			}
		});
	});
};

export default header;