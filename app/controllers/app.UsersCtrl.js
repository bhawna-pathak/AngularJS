angular.module('myApp')
    .controller('UsersCtrl', UsersCtrl);

UsersCtrl.$inject = ['$scope', 'UserFactory', '$routeParams', '$location'];

function UsersCtrl($scope, UserFactory, $routeParams, $location) {
    // var usersCtrl = this;

    // usersCtrl.userName = 'Himanshu';

    $scope.init = function() {
        // console.log(this, usersCtrl);
        showUsers();
        // var userName = 'path';
        // console.log(userName);
        $scope.order = 'asc';
    }

    $scope.doSorting = function(sortBy) {
        // $location.search({ sortBy: sortBy, order: $scope.order });
        $location.search('sortBy', sortBy);
        console.log($location.search());
        showUsers(sortBy);

    }

    function showUsers() {
        UserFactory.getUsersMongo()
            .then(function(response) {
                $scope.Users = response.data;
            }, function(error) {
                console.log(error);
            });
    }





}
