"use strict";

// IIFE (Immediately Invoked Function Expression) 
(function () {

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
		menuItems[1].item02.innerHTML = "My Projects";
		menuItems[2].item03.innerHTML = "Contact Me";
	}
	insertMenuItems();
	
	/* About Me Page
	================= */
	if (about != null) {

		console.log("About page");

		function insertLead() {

			var leadHeadingA = document.getElementById("lead-heading-a");
			leadHeadingA.innerHTML = "100%";

			var leadHeadingB = document.getElementById("lead-heading-b");
			leadHeadingB.innerHTML = "Unnatural";
		}
		insertLead();

		function insertMissionStatement() {

			var missionStatementHeading = document.getElementById("mission-statement-heading");
			missionStatementHeading.innerHTML = "Mission Statement";

			var missionStatement = document.getElementById("mission-statement-paragraph");
			missionStatement.innerHTML = "I make you a nice website. You pay me.";
		}
		insertMissionStatement();
		
		/* Portfolio Page
		================= */
	} else if (portfolio != null) {

		console.log("Portfolio page");
		
	
		/* Contact Page
		================= */
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



})(); //end IIFE





 