angular.module('app').controller('menuBarCtrl', function ($scope, ngDialog, $state, $location) {

	$scope.openLoginModal = function () {
		
		$scope.showLogin = false;
		$scope.showLogout = true;
		
		ngDialog.open({
			template: './dist/html/menuBar/loginModalTmp.html'
			, scope: $scope
		});
    };

	$scope.closeAll = function () {
		ngDialog.closeAll();
	};


	$scope.url = $location.url();

	$scope.showLogin = function () {
		if ($scope.url !== "/login") {
			return false;
		} else {
			return true;
		}
	};

	$scope.showLogout = false;
	
	$scope.showLogin = true;
	
});

