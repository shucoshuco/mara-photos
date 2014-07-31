function AudioController($scope, $timeout, AudioService) {

	//bind AudioService to scope
	$scope.player = AudioService;

	$scope.audios = shuffle(audios);
	$scope.current = n;
	$scope.word = "";
	$scope.right = 50;
	$scope.showRanking = false;
	$scope.progressWidth = "0";
	$scope.rankValues = rankValues;
	$scope.complete = false;

	$scope.updateAudio = function(n) {
		$scope.summary = (n + 1) + ' / ' + $scope.audios.length;
		$scope.formDisabled = $scope.audios[n].done;
		$scope.wrongWord = true;

		$scope.selectedWord = $scope.audios[n].done ? $scope.audios[n].selection : "";
		$scope.matches = new Array();

    		//Load the song, every event, class method and Instance attribute from audio5js are accessible from the template
    		$scope.player.load($scope.audios[n].name);
	}

	$scope.validate = function(current) {

		var audio = $scope.audios[current];

		audio.done = true;
		audio.ok = audio.word.contains($scope.selectedWord);
		audio.selection = $scope.selectedWord;

		if (audio.ok) {
			$scope.right++;
		}

		$scope.formDisabled = true;
		$scope.matches = new Array();

		if ($scope.current == $scope.audios.length - 1) {
			$scope.complete = true;
		}

		$scope.progressWidth = 100 * $scope.right / $scope.audios.length;
	}

	$scope.selectWord = function(word) {
		$scope.selectedWord = word;
		$scope.matches = new Array();
	}

	$scope.$watch('selectedWord', function(newValue) {
		$scope.matches = new Array();
		if (newValue && newValue.length > 1) {
			newValue = newValue.toUpperCase();
			var i = 0;
			for (i = 0; i < $scope.audios.length; i++) {
				var j = 0;
				for (j = 0; j < $scope.audios[i].word.length; j++) {
					if ($scope.audios[i].word[j].toUpperCase().indexOf(newValue) > -1) {
						$scope.matches.push($scope.audios[i].word[j]);
					}
				}
			}
			$scope.matches.sort();

			var exists = false;
			for (i = 0; i < $scope.audios.length; i++) {
				if ($scope.audios[i].word.contains($scope.selectedWord)) {
					exists = true;
					break;
				}
			}

			$scope.wrongWord = !exists;
		}
	});

	$scope.updateAudio($scope.current);
};

