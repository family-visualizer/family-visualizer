angular.module("app").controller("resolveCtrl", function ($scope, testFamily, user) {
	
	$scope.authUser = user;
	
	$scope.testFamily = testFamily.data;
	
});