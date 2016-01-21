angular.module('app').controller('menuBarCtrl', function ($scope, ngDialog, $state, $location, authService) {

	$scope.openLoginModal = function () {	
		ngDialog.open({
			template: './dist/html/menuBar/demoLoginModal.html'
			, scope: $scope
		});
    };

	$scope.closeAll = function () {
		ngDialog.closeAll();
	};

	$scope.loginUser = function () {
		authService.loginUser();
		$scope.getUser();	
	};
	
	$scope.logoutUser = function () {
		authService.logoutUser();
		$scope.getUser();
	};


	$scope.getUser = function () {
		$scope.user = authService.returnUser();
	};

	$scope.getUser();
		
});

