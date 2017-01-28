(function() {
    'use strict';
    angular.module('latitude')
        .component('headerComponent', {
            templateUrl: 'views/component-template/header.html',
            controller: HeaderController
        });
    HeaderController.$inject = ['$state', '$http', 'LoginService'];

    function HeaderController($state, $http, LoginService) {
        var vm = this;
        var userInformation = LoginService.getUserinformation();

        if (userInformation) {
            userInformation = userInformation.slice(2);
            userInformation = JSON.parse(userInformation);
            vm.name = userInformation.username;
            vm.isLogin = true;
        }
        vm.logout = function() {
            LoginService.setUserinformation(null);
            vm.isLogin = false;
            $http.get('/user/logout')
                .then(function(response) {
                    if (response) {
                        $state.go('user');
                    }
                });
        };
        vm.login = function() {
            $state.go('login');
        };

    }
})();
