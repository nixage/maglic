
/*===========================================*/
/*===========================================*/
const $burger = $('.menu-burger');
const $headerMenu = $('.menu');
const $body = $('body');
const $header = $(".header");
$burger.on('click', openMenuBurger)
function openMenuBurger(){
	$header.toggleClass('active')
	$body.toggleClass('lock')
	$burger.toggleClass('active')
	$headerMenu.toggleClass('active')
}
/*===========================================*/
/*===========================================*/
/*===========================================*/
let webpFlag = false;

function testWebP() {
  return new Promise(res => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = () => {
      res(webP.height === 2);
    };
  })
};
testWebP().then(hasWebP => {
  webpFlag = hasWebP
});
/*============================================*/
const windowWidth = $(window).width();
/*============================================*/

/*============================================*/
function ibg() {
  $.each($('.ibg'), function(index, val) {
    if ($(this).find('source').length > 0 && webpFlag) {
      $(this).css('background-image', 'url("' + $(this).find('source').attr('srcset') + '")');
      return;
    }
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      return;
    }
  });
}
ibg();
/*========================================================================================*/
/*============================================*/
$('.slider-hero').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 920,
    settings: {
      arrows: false
    }
  }, ],
});
/*============================================*/
$('.image-slider-reviews').slick({
  slidesToShow: 3,
  arrows: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  centerMode: true,
  centerPadding: "0px"
});
/*============================================*/
$('.text-slider-reviews').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: '.image-slider-reviews',
  dots: true,
  arrows: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      dots: false
    }
  }, ],
});
/*============================================*/
$('.slider-cards-pricing').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  responsive: [{
    breakpoint: 768,
    settings: 'unslick'
  }]
})
/*========================================================================================*/


const itemPortfolio = $('.item-portfolio');
itemPortfolio.on('mouseover', (e) => {
  const item = e.target.closest('.item-portfolio')
  const itemPortfolioHover = $('.hover-item-portfolio', item);
  $(item).addClass('active')
})
itemPortfolio.on('mouseout', (e) => {
  const item = e.target.closest('.item-portfolio')
  $(item).removeClass('active')
})
/*========================================================================================*/
const itemChooseUs = $('.item-choose-us');
addActiveClassItemChooseUs(itemChooseUs)

function addActiveClassItemChooseUs(itemsArray) {
  if (windowWidth < 992) {
    return
  }
  const itemChooseUsLength = itemsArray.length;
  let howManyElement = 0;
  if (itemChooseUsLength <= 3) {
    return
  } else if (itemChooseUsLength % 3 === 0) {
    howManyElement = itemChooseUsLength - 3;
    for (let i = 0; i < howManyElement; i++) {
      $(itemChooseUs[i]).addClass('active')
    }
  } else {
    howManyElement = itemChooseUsLength - (itemChooseUsLength % 3);
    for (let i = 0; i < howManyElement; i++) {
      $(itemChooseUs[i]).addClass('active')
    }
  }
}
/*========================================================================================*/
const cardsItem = $('.item-cards-pricing');
if (windowWidth >= 768) {
  cardsItem.on('click', function (e) {
  	const item = $(this);
  	if(item.hasClass('active')) {
  		item.removeClass('active');
  		return
  	}
  	cardsItem.each( (index, el) => {
  		$(el).removeClass('active')
  	})
  	item.toggleClass('active');
  	
  })
}
/*========================================================================================*/
/*========================================================================================*/
/*========================================================================================*/
/*========================================================================================*/