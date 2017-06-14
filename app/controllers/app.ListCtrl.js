angular.module('myApp')
    .controller('ListCtrl', ListCtrl)

ListCtrl.$inject = ['$scope', 'UserFactory', 'growl'];

function ListCtrl($scope, UserFactory, growl) {
    $scope.currentPage = 1;
    $scope.pageSize = 10;


    UserFactory.getUsers()
        .then(function(response) {
            console.log(response);
            $scope.users = response.data;
            growl.success("List is loaded");
        }, function(error) {
            console.error(error);
        });

    $scope.pageChangeHandler = function(num) {
        console.log('user page changed to ' + num);
    };


    $scope.nm = 'Ram';
    $scope.cty = 'Sita';
    $scope.hse = 'tamldf';
    $scope.yrs = 'gafesd';
    $scope.createUsr = function(nm, cty, hse, yrs) {
        var data = {
            nm: $scope.nm,
            cty: $scope.cty,
            hse: $scope.hse,
            yrs: $scope.yrs
        };
        UserFactory.postUsers(data)
            .then(function(response) {
                console.log(response);
                if (response.data) {
                    $scope.msg = "Post Data Submitted Successfully!";
                    $scope.users[$scope.users.length] = data;
                    var newArray = $scope.users;
                    $scope.users = newArray;
                }
            }, function(error) {
                console.error(error);
                $scope.msg = "Service not Exists";
            });
    };
}
