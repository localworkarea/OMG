/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
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

// function initSliders() {
// 	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
// 		// Створюємо слайдер
// 		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
// 			modules: [Navigation],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 			speed: 800,

// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			//loop: true,
// 			//preloadImages: false,
// 			//lazy: true,

// 			/*
// 			// Ефекти
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
// 			*/

// 			// Пагінація
// 			/*
// 			pagination: {
// 				el: '.swiper-pagination',
// 				clickable: true,
// 			},
// 			*/

// 			// Скроллбар
// 			/*
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 				draggable: true,
// 			},
// 			*/

// 			// Кнопки "вліво/вправо"
// 			navigation: {
// 				prevEl: '.swiper-button-prev',
// 				nextEl: '.swiper-button-next',
// 			},
// 			/*
// 			// Брейкпоінти
// 			breakpoints: {
// 				640: {
// 					slidesPerView: 1,
// 					spaceBetween: 0,
// 					autoHeight: true,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 20,
// 				},
// 				1268: {
// 					slidesPerView: 4,
// 					spaceBetween: 30,
// 				},
// 			},
// 			*/
// 			// Події
// 			on: {

// 			}
// 		});
// 	}
// }


window.addEventListener("load", function (e) {

	// breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(max-width:480px)' );
  // keep track of swiper instances to destroy later
	let swiperClientsTop;
	let swiperClientsBtm;
	let swiperBodyArtists;
	let swiperOtherPartners;
  const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
    		  // clean up old instances and inline styles when available
	  		if ( swiperClientsTop !== undefined ) swiperClientsTop.destroy( true, true );
	  		if ( swiperClientsBtm !== undefined ) swiperClientsBtm.destroy( true, true );
	  		if ( swiperBodyArtists !== undefined ) swiperBodyArtists.destroy( true, true );
	  		if ( swiperOtherPartners !== undefined ) swiperOtherPartners.destroy( true, true );
	  		// or/and do nothing
	  		return;
      // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

const enableSwiper = function() {
	swiperClientsTop = new Swiper('.clients__top-slider', {
			modules: [Autoplay],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 500,
				disableOnInteraction: false,
			},
		});

		swiperClientsBtm =	new Swiper('.clients__btm-slider', {
			modules: [Autoplay],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 500,
				disableOnInteraction: false,
			},
		});

		swiperBodyArtists =	new Swiper('.media__body-slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			// loopedSlides: 3,
			navigation: {
				prevEl: '.media__tabs .swiper-button-prev',
				nextEl: '.media__tabs .swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				566: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			
			},
		});
		swiperOtherPartners =	new Swiper('.other-partners__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			speed: 500,
			loop: true,
			// loopedSlides: 3,
			navigation: {
				prevEl: '.other-partners__slider .swiper-button-prev',
				nextEl: '.other-partners__slider .swiper-button-next',
			},
			breakpoints: {
				280: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				566: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			
			},
		});
	};	

		// keep an eye on viewport size changes
	breakpoint.addListener(breakpointChecker);
	// kickstart
	breakpointChecker();



});