(function(){
    'use strict';
    angular.module('Affairal')
    .component('registrationCompleteComponent',{
    templateUrl:'views/component-template/registrationComplete.html',
    bindings:{
      user:'<'
    },
    controller:RegistrationCompleteController
    });
    RegistrationCompleteController.$inject=['RegisterService','$state'];
    function RegistrationCompleteController(RegisterService,$state){
        var vm = this;
    vm.$onInit = function(){
    };

    }
})();
