$(function () {

	$('.offers__button-panel').on('click', function (e) {
		var elem = e.target;
		var btnHotTour = $('.offers__hot-tour')[0];
		var btnPopularTour = $('.offers__popular-tour')[0];

		if (elem == btnHotTour) {
			if (elem.classList.contains("active")) return;

			btnHotTour.classList.add("active");
			btnPopularTour.classList.remove("active");
		} else {
			if (elem.classList.contains("active")) return;

			btnPopularTour.classList.add("active");
			btnHotTour.classList.remove("active");
		};

	});


	$(".regular").slick({
		dots: false, // Показ/скрытие навигационных точек под слайдером
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		edgeFriction: 0.1, //Сопротивление при попытки прокрутить карусель, когда дальше нет слайдов и она не зацилена
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
		autoplay: true, //перелистывание слайдов в автоматически
		pauseOnHover: true, //останавливает перелистывание слайдов при наведении мыши на тело слайдера
	});


	$('.advantages__info-block').mCustomScrollbar({
		theme: "rounded-dark",
		scrollInertia: 500,
		mouseWheel: {
			scrollAmount: 20, // устан. количество прокрутки(контента) колесом мыши (в пикселях)
			preventDefault: true, // Предотвращение поведения по умолчанию, которое автоматически прокручивает родительский элемент при достижении конца или начала прокрутки
		},
		// advanced:{ updateOnSelectorChange:
	});




});