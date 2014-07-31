var app = angular.module("maraPhotos", []);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var error = 0;
var errorLimit = 2000;
var rankValues = [
		{
			text: "¿Es hija tuya?",
			className: "awful",
			color: "rgba(255, 0, 0, 0.5)",
			award: "Te has ganado a pulso  una maravillosa comida en el McDonald's"
		},
		{
			text: "Te suena de lejos",
			className: "bad",
			color: "rgba(255, 120, 0, 0.5)",
			award: "Por que tu hija te suene no puedes pretender mucho más que una cena en el Pecado Carnal"
		},
		{
			text: "La conoces",
			className: "medium",
			color: "rgba(255, 255, 120, 0.5)",
			award: "Otro"
		},
		{
			text: "Madre atenta",
			className: "good",
			color: "rgba(0, 0, 255, 0.5)",
			award: "Tienes derecho a una suculenta comida en el Sushi Ginza"
		},
		{
			text: "Supermamá",
			className: "great",
			color: "rgba(0, 255, 0, 0.5)",
			award: "Te mereces una sesión de Spa con masaje incluido"
		}
			
	];

app.controller("PhotoController", function($scope, $timeout) {

	$scope.images = images;
	$scope.current = n;
	$scope.random = Math.floor((Math.random() * images.length)+1);
	$scope.input = {months: 1, days: 2};
	$scope.selection = {};
	$scope.result = {};
	$scope.errorLimit = errorLimit;
	$scope.error = error;
	$scope.showRanking = "";
	$scope.progressWidth = "100";
	$scope.showIntro = true;
	$scope.help = {
		shown: false,
		width: "0",
		height: "0",
		date: "",
		months: "",
		days: ""
	};
	$scope.rankValues = rankValues;
	$scope.complete = false;

	$scope.start = function() {
		$scope.showIntro = false;
	}

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

		if ($scope.error > errorLimit) {
			$scope.progressWidth = 0;
			$scope.rankIndex = 0;
		} else {
			$scope.progressWidth = 100 - $scope.error * 100 / errorLimit;
			$scope.rankIndex = $scope.rankValues.length - (Math.floor($scope.error * $scope.rankValues.length / $scope.errorLimit) + 1);
		}
	}

	$scope.getBackgroundImage = function(n) {
		var img = $scope.images[n].name;
		return img;
	}

	$scope.toogleHelpWindow = function() {
		if ($scope.help.shown) {
			$scope.help.width = "0";
			$scope.help.height = "0";
			$scope.help.left = "140px";
			$scope.help.date = "";
			$scope.help.months = "-";
			$scope.help.days = "-";
			$scope.help.shown = false;
		} else {
			$scope.help.width = "180px";
			$scope.help.height = "85px";
			$scope.help.left = "0px";
			$scope.help.date = "";
			$scope.help.months = "-";
			$scope.help.days = "-";
			$scope.help.shown = true;
		}
	}

	$scope.validate = function(current) {

		var image = $scope.images[current];

		var ref = image.takenDate;

		var sel = baseDate.clone();
		sel.addMonths(parseInt($scope.input.months));
		sel.addDays(parseInt($scope.input.days));

		var doubleDiff = Math.abs(sel.getTime() - ref.getTime()) / (1000 * 60 * 60 * 24);
		var diff = Math.floor(doubleDiff);

		var refMonths = calculateMonthsBetweenDates(baseDate, ref);
		var refDays  = calculateDaysBetweenDates(baseDate, ref);

		image.done = true;
		image.selection = {
			date: sel,
			months: $scope.input.months,
			days: $scope.input.days
		};
		image.result = {
			months: refMonths,
			days: refDays,
			diff: diff
		};

		$scope.error += diff;

		$scope.updatePhoto(current);

		if ($scope.current == $scope.images.length - 1)
			$scope.complete = true;
	}

	$scope.$watch('help.date', function(newValue) {
		if (newValue.match('..\\/..\\/....')) {
			var d = parseDate(newValue);
			if (d) {
				$scope.help.months = calculateMonthsBetweenDates(baseDate, d);
				$scope.help.days = calculateDaysBetweenDates(baseDate, d);
				$scope.input.months = $scope.help.months;
				$scope.input.days = $scope.help.days;
			} else {
				$scope.help.months = "-";
				$scope.help.days = "-";
				$scope.input.months = "";
				$scope.input.days = "";
			}
		}
	});

	$timeout($scope.updateCarrousel, 3000);
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

function parseDate(date) {
	var parts = date.split("/");
	return new Date(parseInt(parts[2], 10),
                  	parseInt(parts[1], 10) - 1,
                  	parseInt(parts[0], 10));
}

function calculateMonthsBetweenDates(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    if (d2.getDate() < d1.getDate())
	months -= 1;
    return months <= 0 ? 0 : months;
}

function calculateDaysBetweenDates(d1, d2) {
    if (d2.getDate() >= d1.getDate())
	return d2.getDate() - d1.getDate();

    var prevYear = d2.is().january() ? d2.getFullYear() - 1 : d2.getFullYear();
    var prevMonth = d2.is().january() ? 11 : d2.getMonth() - 1;

    return Date.getDaysInMonth(prevYear, prevMonth) - d1.getDate() + d2.getDate();
}

app.directive("flip", function() { 
	return {
		link: function(scope, element, attrs) {
			element.bind("click", function() {
				scope.$apply(attrs.flip);
			});
		}
	}
});
