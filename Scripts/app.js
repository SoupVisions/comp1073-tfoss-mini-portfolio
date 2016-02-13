"use strict";

// IIFE (Immediately Invoked Function Expression) 
(function () {
	
	/* About Me Page
	================= */
	
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
	
	
})();





 