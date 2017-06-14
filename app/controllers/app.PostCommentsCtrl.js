    angular.module('myApp')
        .controller('PostCommentsCtrl', PostCommentsCtrl)

    PostCommentsCtrl.$inject = ['$scope', 'UserFactory', 'growl', '$routeParams'];

    function PostCommentsCtrl($scope, UserFactory, growl, $routeParams) {

        $scope.postId = $routeParams.id;
        UserFactory.getPostComments($scope.postId)
            .then(function(response) {
                $scope.comments = response.data;
            }, function(error) {
                console.log(error);
            });

    }
