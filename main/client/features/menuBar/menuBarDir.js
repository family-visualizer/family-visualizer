angular.module('app').directive('menuBarDir', function ($location) {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/menuBar/menuBarTmp.html"
		, controller: "menuBarCtrl"
		, scope: {
			user: '='
		}
	}


});
