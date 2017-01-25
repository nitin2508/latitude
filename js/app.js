'use strict';

angular.module('latitude',['ui.router','googlechart','ngFileUpload'])
    .controller('IndexController', ['$scope',  function($scope) {
        $scope.search = "dsadsds";


        // $scope.filterByStatus = {};
        // $scope.filterStats = CodeCafeService.getStats();
        //
        // CodeCafeService.getCode()
        //     .then(function(websites) {
        //         console.log(websites);
        //         $scope.websites = websites;
        //     });

    }]);
