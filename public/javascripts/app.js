// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: IndexCtrl
            }).
            when('/contact', {
                templateUrl: 'partials/contact',
                controller: ContactCtrl
            }).
            when('/events', {
                templateUrl: 'partials/events',
                controller: EventsCtrl
            }).
            when('/results', {
                templateUrl: 'partials/results',
                controller: ResultsCtrl
            }).
            //when('/deletePost/:id', {
            //    templateUrl: 'partials/deletePost',
            //    controller: DeletePostCtrl
            //}).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);