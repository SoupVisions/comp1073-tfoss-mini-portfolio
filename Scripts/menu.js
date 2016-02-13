"use strict";

// IIFE (Immediately Invoked Function Expression) 
(function () {
	
	/* Header/Nav
	============== */
	
	function insertSiteTitle() {
		
		var siteTitle = document.getElementById("site-title");
		siteTitle.innerHTML = "Theodore F. Foss";
		
	}
	insertSiteTitle();
	
	function insertMenuItems() {
		var menuItems = [ 
						  {item01: document.getElementById("menu-about")},
						  {item02: document.getElementById("menu-portfolio")},
						  {item03: document.getElementById("menu-contact")}
						]; 
						menuItems[0].item01.innerHTML = "About Me";
						menuItems[1].item02.innerHTML = "My Projects";
						menuItems[2].item03.innerHTML = "Contact Me";	
	}
	insertMenuItems();
	
})();