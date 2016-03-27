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
		// declare paragraph array container
		var paragraphs = [];
		// read in the paragraphs array from the JSON file
		paragraphs = portfolio.paragraphs;
		
		} // end request.readyState function name(params) {
			
			console.log(portfolio);
			

	}) // end addEventListener and anon function
	request.send();

})(); // end IIFE