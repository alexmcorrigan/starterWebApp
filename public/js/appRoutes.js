angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/frontPage.html',
            controller: 'FrontPageController'
        })

        .when('/subPage', {
            templateUrl: 'views/subPage.html',
            controller: 'SubPageController'
        });

    $locationProvider.html5Mode(true)

}]);