angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl)


LoginCtrl.$inject = ['$scope', '$routeParams', 'UserFactory'];

function LoginCtrl($scope, $routeParams, UserFactory) {
    console.log($routeParams);
}
