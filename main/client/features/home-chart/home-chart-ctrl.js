angular.module('app').controller('homeChartCtrl', function($scope, $rootScope) {


	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
		clearInterval($scope.myInterval);
	})

 })
