var app = angular.module('App', ['ui.router', 'AppCtrl']);

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
        url: '/tracks/:id',
        templateUrl: 'app/views/trackShow.html',
        controller: 'TrackShowCtrl'
    })
    .state('newTrack', {
        url: '/newTrack',
        templateUrl: 'app/views/newTrack.html',
        controller: 'NewTrackCtrl'
    })
    .state('404', {
        url: '/404',
        templateUrl: 'app/views/404.html'
    });

    $locationProvider.html5Mode(true);

}]);