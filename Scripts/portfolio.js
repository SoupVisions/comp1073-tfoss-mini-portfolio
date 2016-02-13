"use strict";

// IIFE (Immediately Invoked Function Expression) 
(function () {

	/* Portfolio Page
	================== */
	
	function insertPortfolioPageHeading() {
		
		var portfolioPageHeading = document.getElementById("portfolio-heading");
		portfolioPageHeading.innerHTML = "Portfolio";
		
	}
	insertPortfolioPageHeading();
	
	function insertProjectTitles() {
		
		var project01_Title = document.getElementById("website01-title");
		project01_Title.innerHTML = "GWV Law Group";
		var project02_Title = document.getElementById("website02-title");
		project02_Title.innerHTML = "Mondrian Table";
		var project03_Title = document.getElementById("website03-title");
		project03_Title.innerHTML = "Retro Product Minisite";
		var project04_Title = document.getElementById("website04-title");
		project04_Title.innerHTML = "Movie Poster";
	}
	insertProjectTitles()
		
})();
	
	
	