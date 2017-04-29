UserDetails.$inject = ['$state'];

function UserDetails($state) {
    if ($state.params.user) {
        this.user = $state.params.user;
    } else {
        $state.go('user');
    }

}

angular.module('Affairal')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('user', {
                url: '/',
                views: {
                    'header': {
                        template: '<header-component></header-component>'
                    },
                    'content': {
                        template: '<register-component></register-component>'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            .state('user.registerationSucess', {
                url: 'registerdetails',
                params: {
                    user: null
                },
                views: {
                    'content@': {
                        template: '<registration-complete-component  user="userCtrl.user">'+
                        '</registration-complete-component>',
                        controller: UserDetails,
                        controllerAs: 'userCtrl'
                    }
                }


            })
            .state('login', {
                url: '/login',
                views: {
                    'content@': {
                        template: '<login></login>'
                    }
                }


            })

            .state('chart', {
                url: '/dashboard',
                views: {
                    'header': {
                        template: '<header-component type="logout"></header-component>'
                    },
                    'content': {
                        template: '<chart-component stats="$resolve.data">'+
            '</chart-component><registration-info-component users="$resolve.users"></registration-info-component>'
                    }
                },
                resolve: {
                    data: ['$http', function($http) {
                        return $http.get('/stats')
                            .then(function(response) {
                                return response.data;
                            });
                    }],
                    users: ['$http', function($http) {
                        return $http.get('/register')
                            .then(function(response) {
                                return response.data;
                            });
                    }]
                }
            });


        $urlRouterProvider.otherwise('/');
    }]);
