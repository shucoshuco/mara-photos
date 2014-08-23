var app = angular.module("maraPhotos", ['Audio5']);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var errorPhotos = 0;
var errorPhotosLimit = 4000;
var errorAudios = 0;
var errorAudiosLimit = 120;
var globalStep = 0;

app.config(function($routeProvider) {
	$routeProvider
		.when('/intro', {controller:IntroController, templateUrl:'views/intro.html'})
		.when('/photos', {controller:PhotoController, templateUrl:'views/photos.html'})
		.when('/words', {controller:AudioController, templateUrl:'views/words.html'})
		.when('/score', {controller:ScoreController, templateUrl:'views/prize.html'})
		.when('/making', {controller:MakingOffController, templateUrl:'views/makingOff.html'})
		.otherwise({redirectTo: '/intro'});
});
