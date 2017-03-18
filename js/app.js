// angular.module('app', [])
//     .controller('mainController', mainController);


    var helloApp = angular.module('helloApp', ['ngRoute', 'helloAppControllers']);

helloApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'hello.html',
        controller: 'helloCtrl'
    }).
    when('/people', {
        templateUrl: 'people.html',
        controller: 'peopleCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);
