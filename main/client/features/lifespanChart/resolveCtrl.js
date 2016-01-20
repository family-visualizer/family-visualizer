angular.module("app").controller("resolveCtrl", function ($scope, testFamily, user) {
	
	$scope.user = user;
	
	$scope.testFamily = testFamily.data;
	
	
});