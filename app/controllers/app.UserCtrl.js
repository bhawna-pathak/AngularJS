angular.module('myApp')
    .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$scope', 'UserFactory', '$routeParams'];

function UserCtrl($scope, UserFactory, $routeParams) {

    $scope.id = $routeParams.id;
    UserFactory.getUser($scope.id)
        .then(function(response) {
            $scope.user = response.data;
        }, function(error) {
            console.log(error);
        });

    UserFactory.deleteUser($scope.id)
        .then(function(response) {
            console.log(response);
        }, function(error) {
            console.log(error);
        });

 



}
