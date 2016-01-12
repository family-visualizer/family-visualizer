angular.module('app').controller('userHomeCtrl', function ($scope, authService, familyService) {

	//Get authed user
	var getAuthedUser = function () {
		authService.getAuthedUser().then(function (data) {
			$scope.authedUser = data;
			getAncestryAndChildren();
		});
	};
	getAuthedUser();

	//Get ancestry and children
	
	var getAncestryAndChildren = function () {
		familyService.getAncestryAndChildren($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
			$scope.ancestryAndChildren = data;
			console.log($scope.ancestryAndChildren);
			// $scope.ancestry = familyService.returnAncestry();
			// $scope.familyLength = $scope.ancestry.length;
			// $scope.childrenLength = $scope.ancestryAndChildren.length;
		});	
	};	
});
