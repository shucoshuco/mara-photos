var app = angular.module("maraPhotos", []);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var error = 0;
var images = [
	{
		name: "img/Chrysanthemum.jpg",
		takenDate: Date.parse("Dec 25th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/Desert.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Hydrangeas.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Jellyfish.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Koala.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Lighthouse.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Penguins.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Tulips.jpg",
		takenDate: Date.parse("March 12, 2013"),
		error: 0,
		done: false
	}
		
];

app.controller("PhotoController", function($scope) {

	$scope.images = images;
	$scope.current = n;
	$scope.input = {months: 1, days: 2};
	$scope.selection = {};
	$scope.result = {};
	$scope.error = 0;

	$scope.updatePhoto = function(n) {
		$scope.summary = (n + 1) + ' / ' + images.length;
		if (images[n].done) {
			$scope.input.months = images[n].selection.months;
			$scope.input.days = images[n].selection.days;
			$scope.formEnabled = "disabled";

			$scope.result.date = images[n].takenDate;
			$scope.result.months = images[n].result.months;
			$scope.result.days = images[n].result.days;
			$scope.result.diff = images[n].result.diff; 
		} else {
			$scope.input.months = ""
			$scope.input.days = ""
			$scope.formEnabled = "false";

			$scope.result.date = "-";
			$scope.result.months = "-";
			$scope.result.days = "-";
			$scope.result.diff = "-";
		}
	}

	$scope.getBackgroundImage = function(n) {
		var img = images[n].name;
		return img;
	}

	$scope.updatePhoto($scope.current);
})

app.directive("backwardable", function() {
	return {
		link: function(scope, element, attrs) {

			var canGoBackward = function(value) {
				return value > 0;
			};

			element.bind("mouseenter", function() {
				if (canGoBackward(scope.current))
					element.addClass("backwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("backwardShown");
			});

			element.bind("click", function() {
				if (canGoBackward(scope.current)) {
					scope.current--;
					scope.$apply(attrs.backwardable);
					if (!canGoBackward(scope.current))
						element.removeClass("backwardShown")
				}
			});
		}
	}
})

app.directive("forwardable", function() {
	return {
		link: function(scope, element, attrs) {
		
			var canGoForward = function(value, images) {
				return value < images.length - 1
					&& images[value].done;
			};

			element.bind("mouseenter", function() {
				if (canGoForward(scope.current, scope.images))
					element.addClass("forwardShown");
			});

			element.bind("mouseleave", function() {
				element.removeClass("forwardShown");
			});

			element.bind("click", function() {
				
				if (canGoForward(scope.current, scope.images)) {
					scope.current++;
					scope.$apply(attrs.forwardable);
					if (!canGoForward(scope.current, scope.images))
						element.removeClass("forwardShown");
				}
			});
		}
	}
})

app.directive("validate", function($filter) {
	return {
		link: function(scope, element, attrs) {
			element.bind("click", function() {

				var image = scope.images[scope.current];

				var ref = image.takenDate;

				var sel = baseDate.clone();
				sel.addMonths(scope.input.months);
				sel.addDays(scope.input.days);

				var doubleDiff = Math.abs(sel.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24);
				var diff = Math.floor(doubleDiff);
				console.log(diff);

				image.done = true;
				image.selection = {
					months: scope.input.months,
					days: scope.input.days
				};
				image.result = {
					months: scope.input.months,
					days: scope.input.days,
					diff: diff
				};

				scope.error += diff;

				scope.$apply(attrs.validate);

			});
		}
	}
});
