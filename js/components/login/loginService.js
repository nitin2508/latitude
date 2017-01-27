(function() {
    'use strict';
    angular.module('latitude')
        .service('LoginService', LoginService);

    LoginService.$inject = ['$http', 'Upload'];

    function LoginService($http, Upload) {


        this.loginDetail = function(data) {
            return $http.post('/user/login', data);
        };
    }
}());
