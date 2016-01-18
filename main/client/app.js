angular.module('app', ['ui.router', 'ngDialog']).config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

	$urlRouterProvider
		.otherwise('/');


	$stateProvider
		.state('login', {
			url: '/'
			, templateUrl: './dist/html/loginView/loginView.html'
			, controller: 'loginViewCtrl'
		})
		.state('about', {
			url: '/about'
			, templateUrl: './dist/html/aboutView/about.html'
		})

        .state('learnMore', {
              url: '/learnmore'
            , templateUrl: './dist/html/learnMoreView/learnMore.html'
        })
        .state('userHome', {
              url: '/userhome'
            , templateUrl: './dist/html/userHomeView/userHome.html'
			, controller: 'userHomeCtrl'
        })

		.state('gallery', {
			url: '/gallery'
			, templateUrl: './dist/html/userHomeView/gallery.html'
		})
		.state('settings', {
			url: '/settings'
			, templateUrl: './dist/html/userHomeView/settings.html'
		})
		.state('lifespan', {
			url: '/lifespan'
			, templateUrl: './dist/html/lifespanChart/lifespanChartView.html'
		})
		.state('names', {
			url: '/names'
			, templateUrl: './dist/html/namesChart/namesChartView.html'
		});

}
