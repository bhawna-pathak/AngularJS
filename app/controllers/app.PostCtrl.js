    angular.module('myApp')
        .controller('PostCtrl', PostCtrl)

    PostCtrl.$inject = ['$scope', 'UserFactory', 'growl', '$routeParams'];

    function PostCtrl($scope, UserFactory, growl, $routeParams) {

        $scope.postId = $routeParams.id;
        UserFactory.getPost($scope.postId)
            .then(function(response) {
                $scope.post = response.data;
            }, function(error) {
                console.log(error);
            });

    }
