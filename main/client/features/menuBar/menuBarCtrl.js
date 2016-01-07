angular.module('app').controller('menuBarCtrl', function( $scope, ngDialog, $state ) {
	
	$scope.openLoginModal = function() {
      ngDialog.open({
          template: './dist/html/menuBar/loginModalTmp.html'
        , scope: $scope
      });
    }	
	
	
})

