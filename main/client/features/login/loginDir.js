angular.module('app').directive('loginDir', function () {
	
	return {
		restrict: "E",
		templateUrl: "./html/login/login.html",
		controller: "loginCtrl"
	}
	
});