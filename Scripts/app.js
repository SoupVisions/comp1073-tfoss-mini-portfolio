"use strict";

// ASEF or IIFE (Immediately Invoked Function Expression) 
// IIFE is automatically executed - this is the basic structure everytime you start
(function () {

	console.log("App started...");

	// named function
	// in our class, use the named function 
	/*
	function replaceFirstParagraph() {

		console.log("inside replaceFirstParagraph function");
		
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph...";
	}
	
	// call replaceFirstParagraph function 
	replaceFirstParagraph();

	var secondParagraph;

	secondParagraph = document.getElementById("secondParagraph");

	secondParagraph.innerHTML = "Another new paragraph...";
	*/
	
	// anonymous function with an alias (don't use)
	var replaceFirstParagraph = function() {
		
		console.log("inside replaceFirstParagraph function");
		
		var firstParagraph;

		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph...";
	}
	
	replaceFirstParagraph();

})();



 