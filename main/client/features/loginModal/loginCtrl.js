angular.module('app').controller('loginCtrl', function($scope) {
	
	$scope.openLoginModal = function() {
      ngDialog.open({
        template: 'loginTemplate',
        scope: $scope
      });
    }	
	
	
})