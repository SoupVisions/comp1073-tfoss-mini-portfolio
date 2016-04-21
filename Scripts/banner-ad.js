/// <reference path="../typings/tsd.d.ts" />

// IIFE
(function(){
	
	"use strict";
	
	// grab the canvas element and reference it by assigning it a variable
	var canvas = $("#canvas");
	// create an object for the stage and reference it by assigning it a variable
	var stage = new createjs.Stage(canvas);
	// set up frame rate (create a ticker for how many frames per second)
	// (ticker is a built-in global object in createjs)
	// set framerate to 60 frames per second:
	createjs.Ticker.setFPS(60);
	
	
	
})();