angular.module('app').controller('homeChartCtrl', function($scope, $rootScope) {


	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
		console.log("event", event);
		console.log("toState", toState);
		console.log("toParams", toParams);
		console.log("fromState", fromState);
		console.log("fromParams", fromParams);
		console.log("$scope.interval", $scope.myInterval);
		clearInterval($scope.myInterval);
	})

 })
