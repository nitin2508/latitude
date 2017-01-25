(function(){
    'use strict';
    angular.module('latitude')
    .component('headerComponent',{
    templateUrl:'views/component-template/header.html',
    // bindings:{
    //   menuItem:'<'
    // },
    controller:HeaderController
    });
    HeaderController.$inject=[];
    function HeaderController(){

    }
})();
