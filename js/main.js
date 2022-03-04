$('.listnumber-ukr').click(function(event) {
	$('.listnumber, .listnumber-ukr').toggleClass('active');
});

$('.about-m-and-fm__details-btn').click(function(event) {
	$('.about-m-and-fm__details, .about-m-and-fm__details-br, .about-m-and-fm__details-btn').toggleClass('active');
});

const time = 1000;
const step = 125;

function outNum(num, elem){
	let l = document.querySelector('.' + elem);
	n = 0;
	let t = Math.round(time / (num / step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
		t);
}

outNum(50000, 'stats__box-title__num');



const timeTwo = 1000;
const stepTwo = 1250;

function outTwoNum(nums, elem){
	let l = document.querySelector('.' + elem);
	ntwo = 0;
	let t = Math.round(timeTwo / (nums / stepTwo));
	let interval = setInterval(() => {
		ntwo = ntwo + stepTwo;
		if (ntwo == nums) {
			clearInterval(interval);
		}
		l.innerHTML = ntwo;
	},
		t);
}
outTwoNum(470000, 'box-title__second');


const timeThree = 100;
const stepThree = 15000;

function outThreeNum(numsThree, elem){
	let l = document.querySelector('.' + elem);
	nthree = 0;
	let t = Math.round(timeThree / (numsThree / stepThree));
	let interval = setInterval(() => {
		nthree = nthree + stepTwo;
		if (nthree == numsThree) {
			clearInterval(interval);
		}
		l.innerHTML = nthree;
	},
		t);
}
outThreeNum(845000, 'box-title__three');



const timeStats = 15000;
const stepStats = 2500000;

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



$('.reviews__inner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1700,
  responsive: [
  	{
  	  breakpoint: 490,
      settings: {
      	arrows: false,
      }
  	},
    
  ]

});

$('.video-trial__bord-inner__videobord').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  dots: true,
  dotsClass: "item-dots",
  responsive: [
  	{
  	  breakpoint: 840,
      settings: {
      	arrows: false,
      }
  	},
    
  ]

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
