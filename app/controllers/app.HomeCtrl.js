angular.module('myApp')
    .controller('HomeCtrl', HomeCtrl)

HomeCtrl.$inject = ['$scope'];

function HomeCtrl($scope) {
    console.log($scope);
}
