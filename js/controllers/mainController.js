// MAIN CONTROLLER
// function mainController($scope) {
//
// }

var helloAppControllers = angular.module('helloAppControllers', []);

helloAppControllers.controller('helloCtrl', ['$scope', function($scope) {
    // $scope.name = ')world';
}]);

helloAppControllers.controller('peopleCtrl', ['$scope', function($scope) {
    $scope.tab = [];
    var maLigne;

    $scope.add = function() {
        maLigne = {
            name: $scope.name,
            firstname: $scope.firstname,
            mail: $scope.mail
        };
        $scope.tab.push(maLigne);
        console.log($scope.tab);
    };
}]);
