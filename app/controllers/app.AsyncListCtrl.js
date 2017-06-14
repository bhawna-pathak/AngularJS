angular.module('myApp')
    .controller('AsyncListCtrl', AsyncListCtrl)
AsyncListCtrl.$inject = ['$scope', 'UserFactory'];

function AsyncListCtrl($scope, UserFactory) {

    $scope.users = [];
    $scope.totalUsers = 0;
    $scope.usersPerPage = 10;
    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };


    function getResultsPage(pageNumber) {

        UserFactory.getUsers()
            .then(function(response) {
                    console.log(response);
                    var start = ($scope.usersPerPage) * ($scope.pagination.current - 1);
                    $scope.zipCodes = response.data.slice(start, start + $scope.usersPerPage);
                    $scope.totalUsers = response.data.length;

                },
                function(error) {
                    console.error(error);
                })
    }


}
