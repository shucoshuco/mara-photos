function IntroController($scope, $rootScope) {

	$scope.step = 1;

	$scope.nextStep = function() {
		$scope.step++;
	}

	$scope.finishIntro = function() {
		$rootScope.$emit('finishStep');
	}
};
