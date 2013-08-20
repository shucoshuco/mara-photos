var app = angular.module("maraPhotos", []);

var n = 0;
var baseDate = '20121123';
var error = 0;
var images = [
	{
		name: "img/Chrysanthemum.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Desert.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Hydrangeas.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Jellyfish.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Koala.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Lighthouse.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Penguins.jpg",
		takenDate: "",
		error: 0,
		done: false
	},
	{
		name: "img/Tulips.jpg",
		takenDate: "",
		error: 0,
		done: false
	}
		
];

app.controller("PhotoController", function($scope) {

	$scope.images = images;
	$scope.current = n;
	$scope.input = {months: "1", dates: "2"};
	$scope.error = 0;

	$scope.updateSummary = function(n) {
		$scope.summary = (n + 1) + ' / ' + images.length;
	}

	$scope.getBackgroundImage = function(n) {
		var img = images[n].name;
		return img;
	}

	$scope.updateSummary($scope.current);
})

app.directive("backwardable", function() {
	return {
		link: function(scope, element, attrs) {
			element.bind("mouseenter", function() {
				if (scope.current > 0)
					element.addClass("backwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("backwardShown");
			});

			element.bind("click", function() {
				if (scope.current > 0) {
					scope.current--;
					scope.$apply(attrs.backwardable);
					if (scope.current == 0)
						element.removeClass("backwardShown")
				}
			});
		}
	}
})

app.directive("forwardable", function() {
	return {
		link: function(scope, element, attrs) {
			element.bind("mouseenter", function() {
				if (scope.current < scope.images.length - 1)
					element.addClass("forwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("forwardShown");
			});

			element.bind("click", function() {
				if (scope.current < scope.images.length - 1) {
					scope.current++;
					scope.$apply(attrs.forwardable);
					if (scope.current == scope.images.length - 1)
						element.removeClass("forwardShown");
				}

			});
		}
	}
})
