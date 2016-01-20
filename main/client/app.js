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
			, templateUrl: './dist/html/aboutView/about-view.html'
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
			, templateUrl: './dist/html/galleryView/gallery.html'
		})
		.state('settings', {
			url: '/settings'
			, templateUrl: './dist/html/settingsView/settings.html'
		})
		.state('zoomChart', {
			url: '/zoomchart'
			, templateUrl: './dist/html/familyZoomChart/familyZoomChartView.html'
		})
		.state('lifespan', {
			url: '/lifespan'
			, templateUrl: './dist/html/lifespanChart/lifespanChartView.html'
			, controller: "resolveCtrl"
			, resolve: {
				testFamily: function (hardCodedDataService) {
					return hardCodedDataService.getFamily();
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
			}
		})
		.state('names', {
			url: '/names'
			, templateUrl: './dist/html/namesChart/namesChartView.html'
		})

		.state('birthMonth', {
			url: '/birthmonth'
			, templateUrl: './dist/html/birthMonthView/birthMonthView.html'
		})
		.state('thumbnailView', {
			url: '/thumbnailhome'
			, templateUrl: './dist/html/thumbnail-home-view/thumbnail-home.html'
		});

}


