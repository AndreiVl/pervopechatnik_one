const slaider = () => {
	let swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '"> </span>';
			},
		},
	});
};

export default slaider;