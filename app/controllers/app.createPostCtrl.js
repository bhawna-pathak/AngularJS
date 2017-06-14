angular.module('myApp')
    .controller('createPostCtrl', createPostCtrl)

createPostCtrl.$inject = ['$scope', 'UserFactory'];

function createPostCtrl($scope, UserFactory) {
    $scope.post = {};
    $scope.createPost = function() {
        console.log($scope.post);
        var data = {
            userId: $scope.post.userId,
            title: $scope.post.title,
            body: $scope.post.body
        };
        UserFactory.createPost(data)
            .then(function(response) {
                console.log(response);
            }, function(error) {
                console.error(error);
            });
    };

}
