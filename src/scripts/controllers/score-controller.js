function ScoreController($scope, $rootScope) {
	$scope.rankValues = rankValues;
	var partialErrorPhotos = errorPhotos * 50 / errorPhotosLimit;
	var partialErrorAudios = errorAudios * 50 / errorAudiosLimit;
	$scope.error = partialErrorPhotos + partialErrorAudios;

	$scope.progressWidth = 100 - $scope.error;
	$scope.rankIndex = $scope.rankValues.length - (Math.floor($scope.error * $scope.rankValues.length / 100) + 1);
	
	$scope.errorPhotos = errorPhotos;
	$scope.errorAudios = errorAudios;
	$scope.photosRankIndex = $scope.rankValues.length - (Math.floor(partialErrorPhotos * $scope.rankValues.length / 50) + 1);
	$scope.audiosRankIndex = $scope.rankValues.length - (Math.floor(partialErrorAudios * $scope.rankValues.length / 50) + 1);
};
;
