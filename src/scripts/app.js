var app = angular.module("maraPhotos", ['Audio5']);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var error = 0;
var errorLimit = 2000;

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {controller:PhotoController, templateUrl:'views/intro.html'})
		.when('/photos', {controller:PhotoController, templateUrl:'views/photos.html'})
		.when('/words', {controller:AudioController, templateUrl:'views/words.html'})
		.when('/score', {controller:AudioController, templateUrl:'views/prize.html'})
		.otherwise({redirectTo: '/'});
});
