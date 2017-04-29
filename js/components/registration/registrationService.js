(function() {
    'use strict';
    angular.module('Affairal')
        .service('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', 'Upload'];

    function RegisterService($http, Upload) {

        this.uploadFile = function(file) {
            return Upload.upload({
                url: '/image',
                data: {
                    file: file
                }
            });
        };

        this.sendUserDetail = function(data) {
            return $http.post('/register', data);
        };
    }
}());
