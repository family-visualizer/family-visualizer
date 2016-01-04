angular.module('app').controller('chart1Controller', function($scope) {
	const whatever = "hey guys";
	
	$scope.test = whatever;
	
	console.log("this is our const test", $scope.test);
})