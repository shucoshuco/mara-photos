function MakingOffController($scope, $timeout, $rootScope, AudioService) {

	//bind AudioService to scope
	$scope.player = AudioService;

	$scope.list = makingOff;
	$scope.current = {};
	$scope.playing = false;

	$scope.play = function(audio) {
    		//Load the song, every event, class method and Instance attribute from audio5js are accessible from the template
		if (!audio.playing) {
    			$scope.player.load(audio.file);
			$scope.current = audio;
		}
		audio.playing = !audio.playing;
		$scope.playing = audio.playing;
		$scope.player.playPause();
	}

	$scope.player.on("ended", function() {
		$scope.current.playing = false;
		$scope.playing = false;
	});
};

