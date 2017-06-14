angular.module('myApp', ['ngRoute', 'LocalStorageModule', 'ngAnimate', 'ngTouch', 'ui.bootstrap', 'angular-growl', 'angularUtils.directives.dirPagination']);
angular.module('myApp').config(['$routeProvider', 'localStorageServiceProvider', '$sceDelegateProvider', 'growlProvider', function($routeProvider, localStorageServiceProvider, $sceDelegateProvider, growlProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/templates/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl'
        })
        .when('/pre-login', {
            templateUrl: 'pre-login.html',
            controller: 'PreLoginCtrl'
        })
        .when('/login', {
            templateUrl: 'app/templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/login/:email', {
            templateUrl: 'app/templates/login.html',
            controller: 'LoginCtrl'
        })
        .when('/sign-up', {
            templateUrl: 'app/templates/sign-up.html',
            controller: 'SignUpCtrl',
            controllerAs: 'signUpCtrl'
        })
        .when('/users-list', {
            templateUrl: 'app/templates/users-list.html',
            controller: 'UsersListCtrl',
            controllerAs: 'usersListCtrl'
        })
        .when('/list', {
            templateUrl: 'app/templates/list.html',
            controller: 'ListCtrl'
        })
        .when('/AsyncList', {
            templateUrl: 'app/templates/AsyncList.html',
            controller: 'AsyncListCtrl'
        })
        .when('/posts', {
            templateUrl: 'app/templates/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/post/:id', {
            templateUrl: 'app/templates/post.html',
            controller: 'PostCtrl'
        })
        .when('/post/:id/comments', {
            templateUrl: 'app/templates/post-comments.html',
            controller: 'PostCommentsCtrl'
        })
        .when('/createPost', {
            templateUrl: 'app/templates/createPost.html',
            controller: 'createPostCtrl'
        })
        .when('/users', {
            templateUrl: 'app/templates/users.html',
            controller: 'UsersCtrl'
        })
        .when('/user/:id', {
            templateUrl: 'app/templates/user.html',
            controller: 'UserCtrl'
        })
        .when('/user/:id/delete', {
            templateUrl: 'app/templates/user.html',
            controller: 'UserCtrl'
        })
        .when('/user/:id/edit', {
            templateUrl: 'app/templates/createUser.html',
            controller: 'createUserCtrl'
        })
        .when('/createUser', {
            templateUrl: 'app/templates/createUser.html',
            controller: 'createUserCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });

    localStorageServiceProvider
        .setPrefix('myApp');

    growlProvider.globalTimeToLive(3000);


}]);
