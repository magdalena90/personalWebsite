
$(function() {

	/* GET NAVBAR HEIGHT */
	var navbar_height = $('.navbar').height();
	$('.bg-transparent').css('margin-top',-navbar_height+'px');

  $(window).scroll(function () {

  	/* CHANGE COVER'S BACKGROUND COLOUR ON SCROLL */
    if ( $(this).scrollTop() > 150) {
      $('.cover_color_layer').addClass('cover_color_layer_transparent')
      $('.cover_color_layer').removeClass('cover_color_layer_acqua')
    } else {
      $('.cover_color_layer').removeClass('cover_color_layer_transparent')
      $('.cover_color_layer').addClass('cover_color_layer_acqua')
    }

    /* STICKY NAVBAR */
		if( $(this).scrollTop() > $(window).height() - navbar_height ) {
	    $('.navbar').removeClass('bg-transparent');
	    $('.navbar').addClass('bg-dark');
	    $('.navbar').css('margin-top','0');
	    $('.navbar').addClass('fixed-top no-transition');
	  } else {
	    $('.navbar').removeClass('fixed-top no-transition');
	    $('.navbar').removeClass('bg-dark');
	    $('.navbar').addClass('bg-transparent');
	    $('.navbar').css('margin-top',-navbar_height+'px');
	  }
   });

});