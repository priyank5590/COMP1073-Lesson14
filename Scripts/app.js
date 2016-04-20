/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

		"use strict";

		// Load the navbar dynamically via jQuery and Ajax
		var header = $('#mainHeader').load("partials/nav.html", function () {
			var bodyid = $('body').attr('id');
			switch (bodyid.toString()) {
				case "index":
					$('#indexLink').attr("class", "active");
					break;
				case "projects":
					$('#projectsLink').attr("class", "active");
					break;
				case "contact":
					$('#contactLink').attr("class", "active");
					break;
			}
		});

		//CreateJS Section
		var stage;
		var canvas;

		function init() {
			console.log("Initialization");
			// reference to canvas element
			canvas = document.getElementById("canvas");
			// create a stage container object
			stage = new createjs.Stage(canvas);
			// set frame rate to 60 fps
			createjs.Ticker.setFPS(60);
			// listen for frame changes and call the animationLoop function
			createjs.Ticker.addEventListener("tick", animationLoop);
			
			//call the main function
			
		}

		// runs every frame
		function animationLoop() {
		//console.log("next frame");
		// refresh the stage object
		stage.update();
    }
	//this is where all the magic happens
	function main() {
		var helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
		stage.addChild(helloLabel);
		
	}
    window.onload = init;
	return {
		stage: stage
	}


})();