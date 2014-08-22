function AudioController($scope, $timeout, $rootScope, AudioService) {

	//bind AudioService to scope
	$scope.player = AudioService;

	audios = audios || shuffle(words);

	$scope.audios = audios;
	$scope.current = n;
	$scope.word = "";
	$scope.error = errorAudios;
	$scope.errorLimit = errorAudiosLimit;
	$scope.showRanking = false;
	$scope.progressWidth = "100";
	$scope.rankValues = rankValues;
	$scope.playing = false;
	$scope.progress = 0;
	$scope.tries = 3;

	$scope.updateAudio = function(n) {
		$scope.summary = (n + 1) + ' / ' + $scope.audios.length;
		$scope.formDisabled = $scope.audios[n].done;
		$scope.wrongWord = true;

		$scope.selectedWord = $scope.audios[n].done ? $scope.audios[n].selection : "";
		$scope.matches = new Array();

    		//Load the song, every event, class method and Instance attribute from audio5js are accessible from the template
    		$scope.player.load($scope.audios[n].name);
	}

	$scope.play = function() {
		$scope.playing = true;
		$scope.player.play();
	};

	$scope.player.on("ended", function() {
		$scope.playing = false;
	});

	$scope.validate = function(current) {

		var audio = $scope.audios[current];

		var ok = audio.word.contains($scope.selectedWord);

		if (!ok) {
			$scope.error++;
			if ($scope.error > $scope.errorLimit) {
				$scope.error = $scope.errorLimit;
			}
			$scope.tries--;
			errorAudios = $scope.error;
		} 

		$scope.matches = new Array();

		if (ok || $scope.tries === 0) {
			audio.done = true;
			audio.ok = ok;
			audio.selection = $scope.selectedWord;
	
			$scope.formDisabled = true;
			$scope.tries = 3;

			if ($scope.current == $scope.audios.length - 1) {
				$rootScope.$emit('finishStep');
			}
		}

		$scope.progressWidth = 100 - $scope.error * 100 / $scope.errorLimit;
	}

	$scope.selectWord = function(word) {
		$scope.selectedWord = word;
		$timeout(function() {
			$scope.matches = new Array();
		}, 50);
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

