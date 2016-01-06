angular.module('app').controller('menuBarCtrl', function( $scope, ngDialog ) {
	
	$scope.openLoginModal = function() {
      ngDialog.open({
          template: './dist/html/menuBar/modalTmp.html'
        , scope: $scope
      });
    }	
	
	
})

