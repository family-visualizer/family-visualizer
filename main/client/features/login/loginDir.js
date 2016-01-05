angular.module('app').directive('loginDir', function () {

	return {
		restrict: "E",
		templateUrl: "./dist/html/login/login.html",
		controller: "loginCtrl"
	}

});
