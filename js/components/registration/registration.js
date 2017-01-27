(function(){
    'use strict';
    angular.module('latitude')
    .component('registerComponent',{
    templateUrl:'views/component-template/content.html',
    // bindings:{
    //   menuItem:'<'
    // },
    controller:RegisterController
    });
    RegisterController.$inject=['RegisterService','$state'];
    function RegisterController(RegisterService,$state){
        var vm = this;
        vm.image='';
        vm.picFile = '';
        vm.registrationDetail={};
        // vm.goState = function(){
        //     $state.go('registrationInfo');
        // };
        //
        // vm.chart = function(){
        //     $state.go('chart');
        // };
        vm.uploadFile = function(){
            RegisterService.uploadFile(vm.picFile)
            .then(function(response){
                vm.image=response.data;
            });
        };
        vm.submitUserDetail = function(){
            vm.registrationDetail.image={
                filename:vm.image.filename,
                originalname:vm.image.originalname,
                path:vm.image.path
            };
            RegisterService.sendUserDetail(vm.registrationDetail)
            .then(function(response){
                $state.go('user.registerationSucess',{user:response.data});
            });

        };
    }
})();
