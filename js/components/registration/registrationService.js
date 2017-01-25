(function(){
  'use strict';
  angular.module('latitude')
  .service('RegisterService',RegisterService);

  RegisterService.$inject = ['$http','Upload'];

  function RegisterService($http,Upload) {

      this.uploadFile = function(file){
         return Upload.upload({
                url: '/image',
                data: {file: file}
            });

          console.log("service");
          console.log(file);
        //   return $http.post('/image',file);
      }

      this.sendUserDetail = function(data){
          return $http.post('/register',data);
      }
  }
}());
