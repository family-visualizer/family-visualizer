angular.module('app', ['ui.router', 'ngDialog']).config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider) {

	$urlRouterProvider
		.otherwise('/');


	$stateProvider
		.state('login', {
			url: '/'
			, templateUrl: './dist/html/loginView/loginView.html'
			, controller: 'loginViewCtrl'
			, resolve: {
				user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('about', {
			url: '/about'
			, templateUrl: './dist/html/aboutView/about.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
        .state('learnMore', {   
              url: '/learnmore'
            , templateUrl: './dist/html/learnMoreView/learnMore.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
        })
		.state('settings', {
			url: '/settings'
			, templateUrl: './dist/html/settingsView/settings.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('zoomChart', {
			url: '/zoomchart'
			, templateUrl: './dist/html/familyZoomChart/familyZoomChartView.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('lifespan', {
			url: '/lifespan'
			, templateUrl: './dist/html/lifespanChart/lifespanChartView.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('alive', {
			  url: '/living'
			, templateUrl: './dist/html/alivePerYearView/alivePerYearTmpl.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('names', {
			url: '/names'
			, templateUrl: './dist/html/namesChart/namesChartView.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})

		.state('birthMonth', {
			url: '/birthmonth'
			, templateUrl: './dist/html/birthMonthView/birthMonthView.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		})
		.state('thumbnailView', {
			url: '/thumbnailhome'
			, templateUrl: './dist/html/thumbnail-home-view/thumbnail-home.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
				}
				, user(authService) {
					return authService.getAuthedUser();
				}
			}
		});

}


