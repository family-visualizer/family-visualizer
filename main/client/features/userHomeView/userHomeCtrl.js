angular.module('app').controller('userHomeCtrl', function ($scope, authService, familyService) {

	console.log("hello?");
	
	//Get authed user
	var getAuthedUser = function () {
		authService.getAuthedUser().then(function (data) {
			$scope.authedUser = data;

			var getAncestry = function () {
				familyService.getAncestry($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
					$scope.ancestry = data;
					console.log(data);
				});
			};

			getAncestry();

		});
	};

	getAuthedUser();





});