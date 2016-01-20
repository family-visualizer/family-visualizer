angular.module("app").controller("resolveCtrl", function ($scope, testFamily, user, $state) {
	
	$scope.user = user;
	
	$scope.testFamily = testFamily.data;
	
	function showIfloggedInAndNotOnHome() {
		console.log('state', $state)
		if ( user && $state.current !== '/thumbnailhome') {
			console.log('state', $state)
			return true;
		}
		return false;
	}	

	$scope.onHome = showIfloggedInAndNotOnHome()
});