angular.module('myApp')
    .factory('UserFactory', UserFactory);

UserFactory.$inject = ['$q', '$http'];

function UserFactory($q, $http) {
    return {
        getUsers: getUsers,
        getUsersMongo: getUsersMongo,
        postUsers: postUsers,
        getPosts: getPosts,
        getPost: getPost,
        getPostComments: getPostComments,
        createPost: createPost,
        createUser: createUser,
        getUser: getUser,
        deleteUser: deleteUser,
        updateUser: updateUser
    };

    function getUsers() {
        var deferred = $q.defer();
        $http.get('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function postUsers(data) {
        var deferred = $q.defer();
        $http.post('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json', data)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function getPosts() {
        var deferred = $q.defer();
        $http.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function getPost(id) {
        var deferred = $q.defer();
        $http.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function getPostComments(id) {
        var deferred = $q.defer();
        $http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function createPost(data) {
        var deferred = $q.defer();
        $http.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function getUsersMongo() {
        var deferred = $q.defer();
        var config = {
            params: {

            }
        }
        console.log(config);
        $http.get('http://localhost:8000/users/', config)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };


    function createUser(user) {
        var deferred = $q.defer();
        $http.post('http://localhost:8000/user', user)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function getUser(id) {
        var deferred = $q.defer();
        $http.get('http://localhost:8000/user/' + id)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete('http://localhost:8000/user/' + id)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

    function updateUser(id) {
        var deferred = $q.defer();
        $http.put('http://localhost:8000/user/' + id)
            .then(function(response) {
                deferred.resolve(response);
            }, function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };

}
