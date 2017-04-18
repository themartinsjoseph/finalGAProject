angular.module('AppCtrl', ['AppServices'])

.controller('HomeCtrl', ['$scope', '$location', '$http', '$stateParams', 'TracksAPI', function($scope, $location, $http, $stateParams, TracksAPI) {
}])
.controller('NewTrackCtrl', ['$scope', '$location', '$http', '$stateParams', 'TracksAPI', function($scope, $location, $http, $stateParams, TracksAPI) {
   $scope.tracks = {};

	$scope.createTrack = function() {
		TracksAPI.createTrack($scope.tracks).then(function success(res){
			$scope.tracks = res.data; 
			$location.path("/track/" + $scope.tracks.id);
		}, function error(err){
			console.log("error with TrackAPI createTrack");
		});
	};
}])
.controller('ShowTrackCtrl', ['$scope', '$location', '$http', '$stateParams', 'TracksAPI', function($scope, $location, $http, $stateParams, TracksAPI) {
	$scope.tracks = {};

	TracksAPI.getTrack($stateParams.id).then(function success(res){
		$scope.tracks = res.data; 
	}, function error(err){
		console.log("error with TrackAPI createTrack");
	});
}]);

