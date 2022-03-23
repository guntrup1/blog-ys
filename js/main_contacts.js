$('.listnumber-ukr').click(function(event) {
	$('.listnumber, .listnumber-ukr').toggleClass('active');
});

$('.about-m-and-fm__details-btn').click(function(event) {
	$('.about-m-and-fm__details, .about-m-and-fm__details-br, .about-m-and-fm__details-btn').toggleClass('active');
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


$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});