$(window).on('load', function () {
    // init Isotope
var $grid = $('.container').isotope({
  // options
});
// filter items on button click
$('.button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
    });




