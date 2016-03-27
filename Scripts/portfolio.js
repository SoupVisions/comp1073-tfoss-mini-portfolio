//IIFE
(function() {

	"use strict";

	// instantiate xhr object
	var request = new XMLHttpRequest();
	request.open('GET', 'http://localhost/comp1073-client-side-scripting/comp1073-tfoss-mini-portfolio/portfolio.json', true);
	request.addEventListener('readystatechange', function() {
		if(request.readyState === 4) {
		// declare portfolio object
		var portfolio = {};
		// read in the JSON object from the JSON file
		portfolio = JSON.parse(request.responseText);
		// declare paragraphs array container
		var paragraphs = [];
		// read in the paragraphs array from the JSON file
		paragraphs = portfolio.paragraphs;
		
		// store length of the paragraphs array into a variable	
		var paragraphsLength = paragraphs.length;
		
		// loop through the paragraphs array
		for(var i = 0; i < paragraphsLength; i++) {
			// create a reference to each html paragraph element
			var paragraph = document.getElementById("project" + (i + 1) + "-paragraph");
			paragraph.innerHTML = paragraphs[i];
			console.log(paragraph);
		} // end for loop
			

		} // end request.readyState function 

	}) // end addEventListener and anon function
	request.send();

})(); // end IIFE