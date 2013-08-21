var app = angular.module("maraPhotos", []);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var error = 0;
var errorLimit = 1000;
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

app.controller("PhotoController", function($scope, $timeout) {

	$scope.images = images;
	$scope.current = n;
	$scope.random = Math.floor((Math.random() * images.length)+1);
	$scope.input = {months: 1, days: 2};
	$scope.selection = {};
	$scope.result = {};
	$scope.error = 0;
	$scope.showRanking = false;
	$scope.progressWidth = "100";

	$scope.updateCarrousel = function() {
		$scope.random = Math.floor((Math.random() * images.length)+1);
		$timeout($scope.updateCarrousel, 3000);
	}

	$scope.updatePhoto = function(n) {
		$scope.summary = (n + 1) + ' / ' + images.length;
		if (images[n].done) {
			$scope.input.months = images[n].selection.months;
			$scope.input.days = images[n].selection.days;
			$scope.formDisabled = true;

			$scope.result.selDate = images[n].selection.date;
			$scope.result.actualDate = images[n].takenDate;
			$scope.result.months = images[n].result.months;
			$scope.result.days = images[n].result.days;
			$scope.result.diff = images[n].result.diff; 
		} else {
			$scope.input.months = ""
			$scope.input.days = ""
			$scope.formDisabled = false;

			$scope.result.date = "-";
			$scope.result.months = "-";
			$scope.result.days = "-";
			$scope.result.diff = "-";
		}

		$scope.progressWidth = $scope.error > errorLimit ? 0 : 100 - $scope.error * 100 / errorLimit;
	}

	$scope.getBackgroundImage = function(n) {
		var img = images[n].name;
		return img;
	}

	$scope.updatePhoto($scope.current);

	$timeout($scope.updateCarrousel, 3000);
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

function calculateMonthsBetweenDates(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function calculateDaysBetweenDates(d1, d2) {
    if (d2.getDate() >= d1.getDate())
	return d2.getDate() - d1.getDate();

    var prevYear = d2.is().january() ? d2.getFullYear() - 1 : d2.getFullYear();
    var prevMonth = d2.is().january() ? 11 : d2.getMonth() - 1;

    return Date.getDaysInMonth(prevYear, prevMonth) - d1.getDate() + d2.getDate();
}

app.directive("validate", function() {
	return {
		link: function(scope, element, attrs) {
			element.bind("click", function() {

				var image = scope.images[scope.current];

				var ref = image.takenDate;

				var sel = baseDate.clone();
				sel.addMonths(parseInt(scope.input.months));
				sel.addDays(parseInt(scope.input.days));

				var doubleDiff = Math.abs(sel.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24);
				var diff = Math.floor(doubleDiff);

				var refMonths = calculateMonthsBetweenDates(baseDate, ref);
				var refDays  = calculateDaysBetweenDates(baseDate, ref);

				image.done = true;
				image.selection = {
					date: sel,
					months: scope.input.months,
					days: scope.input.days
				};
				image.result = {
					months: refMonths,
					days: refDays,
					diff: diff
				};

				scope.error += diff;//

				scope.$apply(attrs.validate);

			});
		}
	}
});

app.directive("flip", function() {
	return {
		link: function(scope, element, attrs) {
			element.bind("click", function() {
				scope.$apply(attrs.flip);
			});
		}
	}
});
