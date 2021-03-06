(function(){
    'use strict';
    angular.module('Affairal')
    .component('chartComponent',{
    templateUrl:'views/component-template/chart.html',
    bindings:{
     stats:'<'
    },
    controller:ChartController
    });
    ChartController.$inject=['$cookies'];
    function ChartController($cookies){
        //
        // if($cookies){
        //     console.log($cookies.get('auth'));
        // }
        this.$onInit = function(){
            this.myChartObject = {};
            this.myChartObject.type = 'PieChart';
            var stats =this.stats;
            var row = [];
            for(var i=0;i<stats.length;i++){
                var obj={c: [
                    {v: stats[i]._id},
                    {v: stats[i].count},
                ]};
                row.push(angular.copy(obj));
            }
            this.myChartObject.data = {'cols': [
                {id: 't', label: 'ping', type: 'string'},
                {id: 'a', label: 'ices', type: 'number'}
            ],rows:row

        };

    };
}
})();
