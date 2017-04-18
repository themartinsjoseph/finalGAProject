angular.module('AppServices', ['ngResource'])
.factory('TracksAPI', ['$http', function($http){
	return {
		getTrack: function(id){
			return $http.get("api/tracks/" + id);
			},
		createTrack: function(tracks){
			return $http.post("api/tracks", tracks);
			}, 
		}
}]);
