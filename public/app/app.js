var app = angular.module('App', ['ui.router', 'ui.materialize', 'AppCtrl']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/404');

    //define routes
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'HomeCtrl'
    })
    .state('showTrack', {
        url: '/track/:id',
        templateUrl: 'app/views/trackShow.html',
        controller: 'ShowTrackCtrl'
  
    })
    .state('newTrack', {
        url: '/track',
        templateUrl: 'app/views/newTrack.html',
        controller: 'NewTrackCtrl'
    })
    .state('404', {
        url: '/404',
        templateUrl: 'app/views/404.html'
    });
    $locationProvider.html5Mode(true);
}]);