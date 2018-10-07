var isSlideOneOpen = false
var isSlideTwoOpen = false
var isSlideThreeOpen = false
var isSlideFourOpen = false
var isSlideFiveOpen = false
var isSlideSixOpen = false
var isSlideSevenOpen = false

function toggleSlide(slide, isSlideOpen) {
		
	if(isSlideOpen) {
		//close slide
		$(slide).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
	}
	else {
		//open slide
		$(slide).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
  	}
}

$( document ).ready(function() {
	$( "#slide-one" ).click(function() {
		toggleSlide(this, isSlideOneOpen);
		isSlideOneOpen = !isSlideOneOpen
		if(isSlideTwoOpen === true) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = false
		}
		if(isSlideThreeOpen === true) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = false
		}
		if(isSlideFourOpen === true) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = false
		}
		if(isSlideFiveOpen === true) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = false
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
		}
	});
	
	









	$( "#slide-two" ).click(function() {
		toggleSlide(this, isSlideTwoOpen);
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
