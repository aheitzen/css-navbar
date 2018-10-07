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
		var hasChildrenOpen = false
		if(isSlideTwoOpen === true) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = false
			hasChildrenOpen = true
		}
		if(isSlideThreeOpen === true) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = false
			hasChildrenOpen = true
		}
		if(isSlideFourOpen === true) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = false
			hasChildrenOpen = true
		}
		if(isSlideFiveOpen === true) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-one" ), isSlideOneOpen);
			isSlideOneOpen = !isSlideOneOpen
		}
	});
	
	$( "#slide-two" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideThreeOpen === true) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = false
			hasChildrenOpen = true
		}
		if(isSlideFourOpen === true) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = false
			hasChildrenOpen = true
		}
		if(isSlideFiveOpen === true) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-two" ), isSlideTwoOpen);
			isSlideTwoOpen = !isSlideTwoOpen
		}
	});

	$( "#slide-three" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideTwoOpen === false) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = true
		}
		if(isSlideFourOpen === true) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = false
			hasChildrenOpen = true
		}
		if(isSlideFiveOpen === true) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-three" ), isSlideThreeOpen);
			isSlideThreeOpen = !isSlideThreeOpen
		}
	});

	$( "#slide-four" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideTwoOpen === false) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = true
		}
		if(isSlideThreeOpen === false) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideFiveOpen === true) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-four" ), isSlideFourOpen);
			isSlideFourOpen = !isSlideFourOpen
		}
	});

	$( "#slide-five" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideTwoOpen === false) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = true
		}
		if(isSlideThreeOpen === false) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideFourOpen === false) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = true
		}
		if(isSlideSixOpen === true) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = false
			hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-five" ), isSlideFiveOpen);
			isSlideFiveOpen = !isSlideFiveOpen
		}
	});

	$( "#slide-six" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideTwoOpen === false) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = true
		}
		if(isSlideThreeOpen === false) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideFourOpen === false) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = true
		}
		if(isSlideFiveOpen === false) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideSevenOpen === true) {
			toggleSlide($( "#slide-seven"), isSlideSevenOpen);
			isSlideSevenOpen = false
			hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-six" ), isSlideSixOpen);
			isSlideSixOpen = !isSlideSixOpen
		}
	});

	$( "#slide-seven" ).click(function() {
		var hasChildrenOpen = false
  		//if slide 1 is closed
  		if(isSlideOneOpen === false) {
			toggleSlide($( "#slide-one"), isSlideOneOpen);
			isSlideOneOpen = true
		}
		if(isSlideTwoOpen === false) {
			toggleSlide($( "#slide-two"), isSlideTwoOpen);
			isSlideTwoOpen = true
		}
		if(isSlideThreeOpen === false) {
			toggleSlide($( "#slide-three"), isSlideThreeOpen);
			isSlideThreeOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideFourOpen === false) {
			toggleSlide($( "#slide-four"), isSlideFourOpen);
			isSlideFourOpen = true
		}
		if(isSlideFiveOpen === false) {
			toggleSlide($( "#slide-five"), isSlideFiveOpen);
			isSlideFiveOpen = true
			// hasChildrenOpen = true
		}
		if(isSlideSixOpen === false) {
			toggleSlide($( "#slide-six"), isSlideSixOpen);
			isSlideSixOpen = true
			// hasChildrenOpen = true
		}
		//if children are open do not close this tab
		if(hasChildrenOpen === false) {
			toggleSlide($( "#slide-seven" ), isSlideSevenOpen);
			isSlideSevenOpen = !isSlideSevenOpen
		}
	});







	// $( "#slide-seven" ).click(function() {
	// 	// console.log("CLICK", isSlideOneOpen);
	// 	if(!isSlideSevenOpen) {
 //  			$(this).animate( { left: '-=60%' }, 1000, 'easeOutQuad' );
 //  		}
 //  		else {
 //  			$(this).animate( { left: '+=60%'}, 1000, 'easeOutQuad' );
 //  		}
 //  		isSlideSevenOpen = !isSlideSevenOpen
	// });

});


