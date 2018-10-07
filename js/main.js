var isSlideOneOpen = false
var isSlideTwoOpen = false
var isSlideThreeOpen = false
var isSlideFourOpen = false
var isSlideFiveOpen = false
var isSlideSixOpen = false
var isSlideSevenOpen = false

$( document ).ready(function() {
	$( "#slide-one" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideOneOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideOneOpen = !isSlideOneOpen
	});
	$( "#slide-two" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideTwoOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideTwoOpen = !isSlideTwoOpen
	});
	$( "#slide-three" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideThreeOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideThreeOpen = !isSlideThreeOpen
	});
	$( "#slide-four" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideFourOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideFourOpen = !isSlideFourOpen
	});
	$( "#slide-five" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideFiveOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideFiveOpen = !isSlideFiveOpen
	});
	$( "#slide-six" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideSixOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideSixOpen = !isSlideSixOpen
	});
	$( "#slide-seven" ).click(function() {
		// console.log("CLICK", isSlideOneOpen);
		if(!isSlideSevenOpen) {
  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  		}
  		else {
  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
  		}
  		isSlideSevenOpen = !isSlideSevenOpen
	});
 //    $( "#slide-two" ).click(function() {
 //  		$(this).animate( { left: '80px' }, 1000, 'easeOutQuad' );
	// });
	// $( "#slide-three" ).click(function() {
 //  		$(this).animate( { left: '80px' }, 1000, 'easeOutQuad' );
	// });
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
