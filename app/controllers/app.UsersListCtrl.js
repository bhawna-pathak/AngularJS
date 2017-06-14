angular.module('myApp')
    .controller('UsersListCtrl', UsersListCtrl)
UsersListCtrl.$inject = ['$scope', 'localStorageService', '$log', 'growl'];

function UsersListCtrl($scope, localStorageService, $log, growl) {
    growl.success('All users are loaded');
    $scope.currentPage = 1;
    $scope.itemsPerPage = 4;
    $scope.users = localStorageService.get('users');
    $scope.totalItems = $scope.users.length;
    console.log($scope.users);
    console.log($scope.totalItems);
    $scope.setItems = function() {
        var start = ($scope.itemsPerPage) * ($scope.currentPage - 1);
        $scope.items = $scope.users.slice(start, start + $scope.itemsPerPage);
    };
    $scope.setItems();
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
        $scope.setItems();
    };

}
