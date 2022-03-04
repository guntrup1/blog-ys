$('.listnumber-ukr').click(function(event) {
	$('.listnumber, .listnumber-ukr').toggleClass('active');
});

$('.about-m-and-fm__details-btn').click(function(event) {
	$('.about-m-and-fm__details, .about-m-and-fm__details-br, .about-m-and-fm__details-btn').toggleClass('active');
});

const timeStats = 1200;
const stepStats = 781250;

function outNumStats(numStats, elem){
	let l = document.querySelector('.' + elem);
	nStats = 0;
	let t = Math.round(timeStats / (numStats/ stepStats));
	let interval = setInterval(() => {
		nStats = nStats+ stepStats;
		if (nStats == numStats) {
			clearInterval(interval);
		}
		l.innerHTML = nStats;
	},
		t);
}

outNumStats(25000000, 'page-blog__stats-counter');


document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 1) + window.scrollY;
		console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 1);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} 
			// else {
			// 	el.classList.remove('animation-class');
			// }
		});
	};
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});



$('.header__search-button').click(function(event) {
	$('.popup-search').toggleClass('active-popup');
	$('body').toggleClass('lock');
});

$('.popup-search__area').click(function(event) {
	$('.popup-search').toggleClass('active-popup');
	$("body").removeClass("lock");
});


$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(".menu__list-section").click(function(){
    $(".menu__list, .header__burger").removeClass("active");
    $("body").removeClass("lock");
  });

  $(".burger__close").click(function(){
    $(".menu__list, .header__burger").removeClass("active");
    $("body").removeClass("lock");
  });
});
