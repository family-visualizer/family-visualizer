angular.module('app').controller('userHomeCtrl', function ($scope, authService, familyService) {

	//Get authed user
	var getAuthedUser = function () {
		authService.getAuthedUser().then(function (data) {
			$scope.authedUser = data;
			//Using hard-coded data for demo
			// getAncestryAndChildren();
		});
	};
	getAuthedUser();

	$scope.combinedFamily = [];
	
	//We are using hard-coded data for demo
	
	// 	//Get ancestry and children
	
	// 	var getAncestryAndChildren = function () {
	// 		familyService.getAncestryAndChildren($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
	// 			$scope.family = data;	
	// 			console.log(data);
	// 		});
	// 	};


});

