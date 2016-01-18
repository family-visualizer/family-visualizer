angular.module('app').controller('lifespanChartCtrl', function ($scope, familyService, authService, lifespanService, hardCodedDataService) {


	$scope.getStats = function (family, sliderValue, gender) {
		$scope.stats = lifespanService.getStats(family, sliderValue, gender);
	};


	$scope.gender = "Both";

	$scope.cleanData = function (familyData) {
		return lifespanService.getCleanData(familyData);
	};


	// //Get authed user
	// var getAuthedUser = function () {
	// 	authService.getAuthedUser().then(function (data) {
	// 		$scope.authedUser = data;
	// 		getAncestryAndChildren();
	// 	});
	// };
	// getAuthedUser();

	// $scope.combinedFamily = [];
	
	// //Get ancestry and children
	
	// var getAncestryAndChildren = function () {
	// 	familyService.getAncestryAndChildren($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
	// 		$scope.family= data;	
	// 		console.log(data);
	// 	});
	// };


	
	
});