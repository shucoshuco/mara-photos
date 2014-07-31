function MenuController($scope, $timeout) {

	$scope.images = images;

	$scope.changeCarrouselImage = function() {
		var random = Math.floor(Math.random() * (images.length - 1));
		$scope.imageName = $scope.images[random].name;
		$timeout($scope.changeCarrouselImage, 3000);
	}

	$scope.changeCarrouselImage();
};
;
