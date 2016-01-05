angular.module('app', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
        .otherwise('/');


    $stateProvider
        .state('login', {
            url: '/',
			templateUrl: './dist/html/loginView/login.html'
        })
		.state('about', {
            url: '/about',
			templateUrl: './dist/html/aboutView/about.html'
		})
        .state('learnMore', {
            url: '/learnMore',
            templateUrl: './dist/html/learnMoreView/learnMore.html'
        })
        .state('userHome', {
            url: '/userHome',
            templateUrl: './dist/html/learnMore/learnMore.html'
        });
}
