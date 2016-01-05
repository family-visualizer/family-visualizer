angular.module('app', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');


    $stateProvider
        .state('chart1', {
            url: '/',
			templateUrl: './html/chart1/chart1.html',
			controller: 'chart1Controller'
        })
		.state('test', {
            url: '/test',
			templateUrl: './html/chart1/chart1.html',
			controller: 'chart1Controller'
		});
}