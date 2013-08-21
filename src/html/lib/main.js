var app = angular.module("maraPhotos", []);

var n = 0;
var baseDate = Date.parse('Nov 23th, 2012');
var error = 0;
var errorLimit = 1000;
var images = [
	{
		name: "img/mara/DSC_0454.JPG",
		takenDate: Date.parse("Mar 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0464.JPG",
		takenDate: Date.parse("Mar 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0217.JPG",
		takenDate: Date.parse("Jul 06th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0224.JPG",
		takenDate: Date.parse("Jul 06th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0139.JPG",
		takenDate: Date.parse("Apr 20th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0007.JPG",
		takenDate: Date.parse("May 11th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0105.JPG",
		takenDate: Date.parse("May 27th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0173.JPG",
		takenDate: Date.parse("Jun 22th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0008.JPG",
		takenDate: Date.parse("Nov 23th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0019.JPG",
		takenDate: Date.parse("Nov 23th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0078.JPG",
		takenDate: Date.parse("May 25th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0147.JPG",
		takenDate: Date.parse("Jun 09th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0046.JPG",
		takenDate: Date.parse("Dec 02th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0254.JPG",
		takenDate: Date.parse("Jul 26th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0277.JPG",
		takenDate: Date.parse("Jul 31th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0332.JPG",
		takenDate: Date.parse("Feb 16th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0350.JPG",
		takenDate: Date.parse("Feb 17th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0413.JPG",
		takenDate: Date.parse("Feb 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0419.JPG",
		takenDate: Date.parse("Feb 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0062.JPG",
		takenDate: Date.parse("Dec 28th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0063.JPG",
		takenDate: Date.parse("Jan 04th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0050.JPG",
		takenDate: Date.parse("Dec 10th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0052.JPG",
		takenDate: Date.parse("Dec 15th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0065.JPG",
		takenDate: Date.parse("Nov 26th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0074.JPG",
		takenDate: Date.parse("Nov 28th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0086.JPG",
		takenDate: Date.parse("Nov 29th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0090.JPG",
		takenDate: Date.parse("Dec 07th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0096.JPG",
		takenDate: Date.parse("Dec 09th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0120.JPG",
		takenDate: Date.parse("Dec 15th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0071.JPG",
		takenDate: Date.parse("Jan 07th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0153.JPG",
		takenDate: Date.parse("Dec 24th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0164.JPG",
		takenDate: Date.parse("Dec 26th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0183.JPG",
		takenDate: Date.parse("Dec 31th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0188.JPG",
		takenDate: Date.parse("Dec 31th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0191.JPG",
		takenDate: Date.parse("Jan 01th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0199.JPG",
		takenDate: Date.parse("Jan 07th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0212.JPG",
		takenDate: Date.parse("Jan 07th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0282.JPG",
		takenDate: Date.parse("Jan 19th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0291.JPG",
		takenDate: Date.parse("Jan 19th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0074-2.JPG",
		takenDate: Date.parse("Jan 12th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0370.JPG",
		takenDate: Date.parse("Feb 21th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0385.JPG",
		takenDate: Date.parse("Feb 23th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0403.JPG",
		takenDate: Date.parse("Feb 23th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0438.JPG",
		takenDate: Date.parse("Feb 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0448.JPG",
		takenDate: Date.parse("Mar 01th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0468.JPG",
		takenDate: Date.parse("Mar 24th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0479.JPG",
		takenDate: Date.parse("Mar 30th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0483.JPG",
		takenDate: Date.parse("Apr 03th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0500.JPG",
		takenDate: Date.parse("Apr 14th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_4624.JPG",
		takenDate: Date.parse("Apr 14th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMAG0286.JPG",
		takenDate: Date.parse("Apr 14th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMAG0251.JPG",
		takenDate: Date.parse("Mar 02th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMAG0313.JPG",
		takenDate: Date.parse("May 17th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0201.JPG",
		takenDate: Date.parse("Jun 18th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0120-2.JPG",
		takenDate: Date.parse("Jun 08th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0250.JPG",
		takenDate: Date.parse("Jul 06th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0303.JPG",
		takenDate: Date.parse("Ago 01th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0309.JPG",
		takenDate: Date.parse("Ago 01th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0314.JPG",
		takenDate: Date.parse("Ago 03th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0321.JPG",
		takenDate: Date.parse("Ago 04th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/DSC_0322.JPG",
		takenDate: Date.parse("Ago 04th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/MB_DSC_0037.JPG",
		takenDate: Date.parse("Nov 23th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130215-WA0001.JPG",
		takenDate: Date.parse("Feb 15th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130610-WA0001.JPG",
		takenDate: Date.parse("Jun 10th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130227-WA0001.JPG",
		takenDate: Date.parse("Feb 27th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130312-WA0001.JPG",
		takenDate: Date.parse("Mar 12th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130213-WA0001.JPG",
		takenDate: Date.parse("Feb 13th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130130-WA0001.JPG",
		takenDate: Date.parse("Jan 30th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130112-WA0001.JPG",
		takenDate: Date.parse("Jan 12th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20130622-WA0002.JPG",
		takenDate: Date.parse("Jun 22th, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/mara/IMG-20121210-WA000.JPG",
		takenDate: Date.parse("Dec 10th, 2012"),
		error: 0,
		done: false
	}
	/*{
		name: "img/Chrysanthemum.jpg",
		takenDate: Date.parse("Dec 25th, 2012"),
		error: 0,
		done: false
	},
	{
		name: "img/Desert.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Hydrangeas.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Jellyfish.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Koala.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Lighthouse.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Penguins.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	},
	{
		name: "img/Tulips.jpg",
		takenDate: Date.parse("Mar 12, 2013"),
		error: 0,
		done: false
	}*/
];

app.controller("PhotoController", function($scope, $timeout) {

	$scope.images = images;
	$scope.current = n;
	$scope.random = Math.floor((Math.random() * images.length)+1);
	$scope.input = {months: 1, days: 2};
	$scope.selection = {};
	$scope.result = {};
	$scope.error = 0;
	$scope.showRanking = "";
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
