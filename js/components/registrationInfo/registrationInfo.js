(function() {
    'use strict';
    angular.module('latitude')
        .component('registrationInfoComponent', {
            templateUrl: 'views/component-template/registrationInfo.html',
            bindings:{
              users:'<'
            },
            controller: RegistrationInfoController
        });
    RegistrationInfoController.$inject = ['$window', '$scope'];

    function RegistrationInfoController($window, $scope) {
        var vm = this;
        $window.abc = this;

    }
})();
