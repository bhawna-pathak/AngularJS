angular.module('myApp')
    .controller('createUserCtrl', createUserCtrl)

createUserCtrl.$inject = ['$scope', 'UserFactory', '$routeParams'];

function createUserCtrl($scope, UserFactory, $routeParams) {

    $scope.id = $routeParams.id;


    UserFactory.updateUser($scope.id)
        .then(function(response) {
            $scope.user = response.data;
        }, function(error) {
            console.error(error);
        });

    $scope.user = {};
    $scope.createUser = function() {
        var user = {
            id: $scope.user.id,
            name: $scope.user.name,
            username: $scope.user.username,
            email: $scope.user.email,
            address: {
                street: $scope.user.address.street,
                suite: $scope.user.address.suite,
                city: $scope.user.address.city,
                zipcode: $scope.user.address.zipcode,
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: $scope.user.phone,
            website: $scope.user.website,
            company: {
                name: $scope.user.company.name,
                catchPhrase: $scope.user.company.catchPhrase,
                bs: $scope.user.company.bs
            }
        };
        UserFactory.createUser(user)
            .then(function(response) {
                console.log(response.data);
            }, function(error) {
                console.error(error);
            });
    }




}
