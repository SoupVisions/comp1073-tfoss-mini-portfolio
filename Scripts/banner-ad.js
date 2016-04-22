/// <reference path="../typings/tsd.d.ts" />

// IIFE (Immediately Invoked Function Expression)
(function() {

	"use strict";
	
	// declare global variables
	var canvas;
	var stage;
	var portfolioLabel;
	var portfolioLabelMove = 2;
	var screenWidth = window.innerWidth * 0.25;
	var toiletMonster;
	var toiletMonsterMove = 5;
	
	function init() {
		
	// console msg to check that the init function is running properly
	console.log('initialized');
	
	// grab the canvas element and reference it by assigning it a variable
	canvas = document.getElementById("canvas");
	
	// set width and height of canvas
	// (must be set in js, rather than on the stylesheet, or else things go wonky)
	// (.style won't work properly for working with canvas)
	canvas.width = "468";
	canvas.height = "60";
	
	// create an object for the stage and reference it by assigning it a variable
	stage = new createjs.Stage(canvas);
	
	// set up frame rate (create a ticker for how many frames per second)
	// (ticker is a built-in global object in createjs)
	// set framerate to 60 frames per second:
	createjs.Ticker.setFPS(60);
	// tick event for the stage
	// listen for frame changes (60 times per second). For each frame (tick) call the motionLoop
	createjs.Ticker.addEventListener('tick', motionLoop);
	
	// call the main (stageMagic()) function
	stageMagic();
	
	// on every tick motionLoop runs
	function motionLoop() {
		
		portfolioLabel.rotation += 1;
		portfolioLabel.x += portfolioLabelMove;
		toiletMonster.x += toiletMonsterMove;
		if ((portfolioLabel.x >= screenWidth) || (portfolioLabel.x <= screenWidth)) {
			portfolioLabelMove *= -0.1;
			toiletMonsterMove *= +0.05;
		}
		
		// page redrawn/reset
		stage.update();
	};
	
	// define the stageMagic function, where all the magic happens
	function stageMagic() {
		// create object
		toiletMonster = new createjs.Bitmap("Content/images/toiletmonster.png");
		toiletMonster.regX = toiletMonster.getBounds().width * 0.5;
		toiletMonster.regY = toiletMonster.getBounds().height * 0.5;
		toiletMonster.scaleX = 0.5;
		toiletMonster.scaleY = 0.5;
		toiletMonster.x = screenWidth * 0.3;
		toiletMonster.y = 30;
		// add object to stage 
		stage.addChild(toiletMonster);
		
		//create object
		portfolioLabel = new createjs.Text("Check Out My Portfolio", "30px bahiana-regular", "#893315");
		// set x and y coordinates for the portfolioLabel
		portfolioLabel.regX = portfolioLabel.getMeasuredWidth() * 0.5;
		portfolioLabel.regY = portfolioLabel.getMeasuredHeight() * 0.5;
		portfolioLabel.x = screenWidth * 0.5;
		portfolioLabel.y = 25;
		// add object to the stage
		stage.addChild(portfolioLabel);
		
		
		$('canvas').on("click", function() {
			portfolioLabel.text = "Whoa!";	
		}); // end portfolioLabel on click event/function
		
	}; // end stageMagic function
	
	}; // end init function
	
	// Call the init function once the page loads
	window.onload = init;
	
	})();
