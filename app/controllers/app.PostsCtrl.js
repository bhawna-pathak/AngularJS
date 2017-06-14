    angular.module('myApp')
        .controller('PostsCtrl', PostsCtrl)

    PostsCtrl.$inject = ['$scope', 'UserFactory', 'growl', '$routeParams'];

    function PostsCtrl($scope, UserFactory, growl, $routeParams) {
        UserFactory.getPosts()
            .then(function(response) {
                console.log(response);
                $scope.posts = response.data;
            }, function(error) {
                console.log(error);
            });
    }
