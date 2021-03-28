(function($){
	'use strict';

  $('.menu-icon i').on('click', function(){
    $('.slide-menu').animate({
      'left' : 0
    });
  });

  $('.menu-close i').on('click', function(){
  $('.slide-menu').animate({
      'left' : -250
    });
  });

// Code Start
//owl-carousel setup
$('.owl-carousel').owlCarousel({
    loop:true, //product sesh hoye jawr por o tante parbo 1st theke strt hobe abr
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
   //navText:['Prev','Next'], //eta use kora hoy(<,> ei 2 ta icon change korar jonno)
    nav:true, // eta false kore dile next button prev button(<>) thakbe na
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5 //ekhan e 5 mane screen e 5 ta img 1st e show hobe 
        }
    }
})
// isotop
// filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    })

    $('.product-btn button').on('click',function(){
      $('.product-btn button').removeClass('current');
      $(this).addClass('current');
    })


})(jQuery);