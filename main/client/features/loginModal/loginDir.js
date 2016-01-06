angular.module('app').directive('loginDir', function () {

	return {
		restrict: "E",
		templateUrl: "./dist/html/loginModal/login.html",
		controller: "loginCtrl"
	}

});
