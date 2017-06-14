angular.module('myApp')
    .controller('SignUpCtrl', SignUpCtrl)


SignUpCtrl.$inject = ['$scope', 'localStorageService'];

function SignUpCtrl($scope, localStorageService) {
    var signUpCtrl = this;
    signUpCtrl.init = function() {
        signUpCtrl.user = {};
        signUpCtrl.user = {
            "firstName": "Himanshu",
            "lastName": "Pathak",
            "email": "himanshu@gmail.com",
            "password": "asdfasdf",
            "confirmPassword": "asdfasdf"
        };
    };
    signUpCtrl.submit = function() {
        if ($scope.signUp.$valid) {
            if (localStorageService.isSupported) {
                if (localStorageService.get('users')) {
                    var users = localStorageService.get('users');
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].email === signUpCtrl.user.email) {
                            alert('user already exists');
                        } else {
                            users.push(signUpCtrl.user);
                            localStorageService.set('users', users);
                            alert('user is created');
                            break;
                        }
                    }
                } else {
                    localStorageService.set('users', [signUpCtrl.user]);

                }
            }
        } else {
            console.log('form is invalid');
        }
    };

}
