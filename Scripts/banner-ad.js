/// <reference path="../typings/tsd.d.ts" />

// IIFE
(function(){

	"use strict";
	
	// declare global variables
	var canvas;
	var stage;
	
	function init() {
		
	// console msg to check that the init function is running properly
	console.log('initialized');
	
	// grab the canvas element and reference it by assigning it a variable
	canvas = document.getElementById("canvas");
	// create an object for the stage and reference it by assigning it a variable
	stage = new createjs.Stage(canvas);
	// set up frame rate (create a ticker for how many frames per second)
	// (ticker is a built-in global object in createjs)
	// set framerate to 60 frames per second:
	createjs.Ticker.setFPS(60);
	// tick event for the stage
	// listen for frame changes (60 times per second). For each frame (tick) call the motionLoop
	createjs.Ticker.addEventListener('tick', motionLoop);
	
	// on every tick the stage is redrawn/refreshed
	function motionLoop() {
		console.log('next frame');
		stage.update();
	};
	
	}; // end init function
	
	// Call the init function once the page loads
	window.onload = init;
	
	
})();