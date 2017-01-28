(function() {
    'use strict';
    angular.module('latitude')
        .service('LoginService', LoginService);

    LoginService.$inject = ['$http', 'Upload','$cookies'];

    function LoginService($http, Upload,$cookies) {
        var userInformation='';




        this.getUserinformation = function(){
            if ($cookies.get('auth')) {
                userInformation = $cookies.get('auth');
            }
            console.log("service",userInformation);
                return userInformation;
        };
        this.setUserinformation = function(data){
            userInformation=data;
        };
        this.loginDetail = function(data) {
            return $http.post('/user/login', data)
            .then(function(response){
                //username = response.data.user.username;
                return response;
            });
        };
    }
}());
