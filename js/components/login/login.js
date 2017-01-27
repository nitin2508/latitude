(function(){
    'use strict';
    angular.module('latitude')
    .component('login',{
    templateUrl:'views/component-template/login.html',
    // bindings:{
    //   menuItem:'<'
    // },
    controller:LoginController
    });
    LoginController.$inject=['LoginService','$state'];
    function LoginController(LoginService,$state){
        var vm = this;
        vm.username='';
        vm.password='';

        vm.login = function(){
            var loginObj = {
                username:vm.username,
                password:vm.password
            };
            LoginService.loginDetail(loginObj)
            .then(function(response){
                if(response.status ===200){
                $state.go('chart');
            }
            });
        };

    }
})();
