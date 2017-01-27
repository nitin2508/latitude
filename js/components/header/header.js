(function(){
    'use strict';
    angular.module('latitude')
    .component('headerComponent',{
    templateUrl:'views/component-template/header.html',
    bindings:{
      type:'@'
    },
    controller:HeaderController
    });
    HeaderController.$inject=['$state','$http'];
    function HeaderController($state,$http){

    this.logout = function(){
     $http.get('/user/logout')
     .then(function(response){
         if(response){
             $state.go('user');
         }
     });
    };
    this.login = function(){
            $state.go('login');
        };

    }
})();
