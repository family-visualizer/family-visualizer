angular.module('app').controller('menuBarCtrl', function ($scope, ngDialog, $state) {

	$scope.openLoginModal = function () {
		ngDialog.open({
			template: './dist/html/menuBar/demoLoginModal.html'
			, scope: $scope
		});
    };

	$scope.closeAll = function () {
		ngDialog.closeAll();
	};

});

