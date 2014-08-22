function MenuController($scope, $timeout, $rootScope, $location) {

	$scope.images = shuffle(imgs);
	$scope.globalStep = 0;

	$scope.changeCarrouselImage = function() {
		var random = Math.floor(Math.random() * ($scope.images.length - 1));
		$scope.imageName = $scope.images[random].name;
		$timeout($scope.changeCarrouselImage, 3000);
	}

	$scope.changeCarrouselImage();

	$rootScope.$on('finishStep', function() {
		$scope.globalStep++;
		if ($scope.globalStep === 1) {
			$location.path('photos');
		}
	});
};
;
