(function(){
    'use strict';
    angular.module('latitude')
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
        //vm.registerData =$state.params.user;
    //vm.registerData={data:{"__v":0,"updatedAt":"2017-01-22T17:04:52.108Z","createdAt":"2017-01-22T17:04:52.108Z","name":"sdasd","email":"sadsada@jkj.sad","phone":"5555555555","registrationType":"group","numberOfTickets":10,"_id":"5884e6345f64ca773c577e04"}}

    }
})();
