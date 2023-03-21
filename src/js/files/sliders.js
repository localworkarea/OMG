/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
// import { tree } from 'gulp';
import Swiper, { Navigation, Autoplay } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів

function initSliders() {
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// };
	if (document.querySelector('.clients__top-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.clients__top-slider', {
			modules: [Autoplay, Navigation],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 500,
				disableOnInteraction: false,
			},
		});
	}
	if (document.querySelector('.clients__btm-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.clients__btm-slider', {
			modules: [Autoplay, Navigation],
			slidesPerView: 'auto',
			updateOnWindowResize: true,
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 500,
				disableOnInteraction: false,
			},
			breakpoints: {
				280: {
					enabled: false,
					// destroy: true,
				},
				480: {
					enabled: true,
					// destroy: false,
				}
			}
		});
	}

	if (document.querySelector('.artist__body-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
	new Swiper('.artist__body-slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				566: {
					slidesPerView: 2,
				},
			
			},
		});
	}
	if (document.querySelector('.youtube__body-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
	new Swiper('.youtube__body-slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				566: {
					slidesPerView: 2,
				},
			
			},
		});
	}
	if (document.querySelector('.blogers__body-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.blogers__body-slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				566: {
					slidesPerView: 2,
				},
			
			},
		});
	}
	if (document.querySelector('.experts__body-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.experts__body-slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				566: {
					slidesPerView: 2,
				},
			
			},
		});
	}


	if (document.querySelector('.other-partners__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.other-partners__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			navigation: {
				prevEl: '.other-partners__slider .swiper-button-prev',
				nextEl: '.other-partners__slider .swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				566: {
					slidesPerView: 2,
				},
			
			},
		});
	}
}
window.addEventListener("load", function (e) {
	initSliders();
});


