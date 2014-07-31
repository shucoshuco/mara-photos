function PhotoController($scope, $timeout) {

	$scope.images = shuffle(images);
	$scope.current = n;
	$scope.input = {months: 1, days: 2};
	$scope.selection = {};
	$scope.result = {};
	$scope.errorLimit = errorLimit;
	$scope.error = error;
	$scope.showRanking = false;
	$scope.progressWidth = "100";
	$scope.help = {
		shown: false,
		date: "",
		months: "",
		days: ""
	};
	$scope.rankValues = rankValues;
	$scope.complete = false;

	$scope.updatePhoto = function(n) {
		$scope.summary = (n + 1) + ' / ' + $scope.images.length;
		if ($scope.images[n].done) {
			$scope.input.months = $scope.images[n].selection.months;
			$scope.input.days = $scope.images[n].selection.days;
			$scope.formDisabled = true;

			$scope.result.selDate = $scope.images[n].selection.date;
			$scope.result.actualDate = $scope.images[n].takenDate;
			$scope.result.months = $scope.images[n].result.months;
			$scope.result.days = $scope.images[n].result.days;
			$scope.result.diff = $scope.images[n].result.diff; 
		} else {
			$scope.input.months = ""
			$scope.input.days = ""
			$scope.formDisabled = false;

			$scope.result.date = "-";
			$scope.result.months = "-";
			$scope.result.days = "-";
			$scope.result.diff = "-";
		}

	}

	$scope.toogleHelpWindow = function() {
		if ($scope.help.shown) {
			$scope.help.date = "";
			$scope.help.months = "-";
			$scope.help.days = "-";
			$scope.help.shown = false;
		} else {
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
		error = $scope.error

		$scope.updatePhoto(current);

		if ($scope.current == $scope.images.length - 1)
			$scope.complete = true;

		if ($scope.error > errorLimit) {
			$scope.progressWidth = 0;
			$scope.rankIndex = 0;
		} else {
			$scope.progressWidth = 100 - $scope.error * 100 / errorLimit;
			$scope.rankIndex = $scope.rankValues.length - (Math.floor($scope.error * $scope.rankValues.length / $scope.errorLimit) + 1);
		}
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

	$scope.updatePhoto($scope.current);
};

