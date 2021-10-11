$('.slider_section').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.svg" alt=""></button>',
  });
$('.container-post').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('.close-btn').on('click', function() {
  $('.sup__header').remove();
  $('.sup__header').children().remove();
})
let btn__Pysan = document.querySelector('.supheader__checked');
btn__Pysan.addEventListener('click', function(){
  alert('Пысан для доставка бесплатна!!!')
})

$('.menu-btn').on('click', function() {
  $('.list-item').toggleClass('list-item--active')
})