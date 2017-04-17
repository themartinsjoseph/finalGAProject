angular.module('AppCtrl', ['AppServices'])
// place your controllers down here
    
.controller('TrackShowCtrl', ['$scope', '$stateParams', 'Tracks', function($scope, $stateParams, Tracks) {
  $scope.track = {};

  Tracks.get({id: $stateParams.id}, function success(data) {
    $scope.track = data;
  }, function error(data) {
    console.log(data);
  });
}])


