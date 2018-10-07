var isSlideOneOpen = false
var isSlideTwoOpen = false
var isSlideThreeOpen = false

$( document ).ready(function() {
	$( "#slide-one" ).click(function() {
		console.log("CLICK", isSlideOneOpen);
		if(!isSlideOneOpen) {
  			$(this).animate( { left: '-=80%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=80%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideOneOpen = !isSlideOneOpen
	});
    $( "#slide-two" ).click(function() {
  		$(this).animate( { left: '80px' }, 1000, 'easeOutQuad' );
	});
	$( "#slide-three" ).click(function() {
  		$(this).animate( { left: '80px' }, 1000, 'easeOutQuad' );
	});
});


// left: '80px'
// left: '-=50px', right: '420px'


    // $("#slide-one").click(function () {
    //     if ($(this).is(""))
    //         $(this).animate( { left: '80px' }, 1000, 'easeOutQuad' );
    //     else
    //         $(this).animate( { left: '-80px' }, 1000, 'easeOutQuad' );
    // });

// $( "#slide-one" ).click(function() {
//   $( "#slide-one" ).toggle( "fold", 1000 );
// });
