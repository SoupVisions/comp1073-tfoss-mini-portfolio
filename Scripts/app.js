//IIFE
(function() {
	
	"use strict";

	var about = document.getElementById("about");
	var portfolio = document.getElementById("portfolio");
	var contact = document.getElementById("contact");

	/* Header/Consistent Nav
	======================== */
	function insertSiteTitle() {

		var siteTitle = document.getElementById("site-title");
		siteTitle.innerHTML = "Theodore F. Foss";

	}
	insertSiteTitle();

	function insertMenuItems() {
		var menuItems = [
			{ item01: document.getElementById("menu-about") },
			{ item02: document.getElementById("menu-portfolio") },
			{ item03: document.getElementById("menu-contact") }
		];
		menuItems[0].item01.innerHTML = "About Me";
		menuItems[1].item02.innerHTML = "Portfolio";
		menuItems[2].item03.innerHTML = "Contact Me";
	}
	insertMenuItems();

// 	/* About Me Page
// 	================= */
	if (about != null) {

		console.log("About page");

		function insertAboutMePageHeading() {
			var aboutMePageHeading = document.getElementById("about-heading");
			aboutMePageHeading.innerHTML = "About Me";
		}
		insertAboutMePageHeading();

		function insertGoals() {

			var goalsHeading = document.getElementById("goals-heading");
			goalsHeading.innerHTML = "My Mission";

			var goalsList = document.getElementById("goals-paragraph");
			goalsList.innerHTML = "<ol>" + 
																			"<li>" + "* Avoid month-old lasagna in fridge (eat three-day old french fries instead)" + "</li>" +
																			"<li>" + "* Look outside once in a while" + "</li>" +
																			"<li>" + "* Submit COMP1073 project before midnight" + "</li>" +
																   "</ol>";
		}
		insertGoals();

// 		/* Portfolio Page
// 		================= */
	} else if (portfolio != null) {

		console.log("Portfolio page");

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
	insertProjectTitles();


// 		/* Contact Page
// 		================= */
	} else if (contact != null) {

		console.log("Contact page");

		var name = document.getElementById("name");	
		var email = document.getElementById("email");
		var message = document.getElementById("message");
		var submit = document.getElementById("submit");

		submit.addEventListener("click", function(event) {
			// prevent default event (that would otherwise send user to another page once the submit button is pressed)
			event.preventDefault();
			console.log("Name: " + name.value);
			console.log("Email: " + email.value);
			console.log("Message: " + message.value);
		})
	} // end else if
})(); 