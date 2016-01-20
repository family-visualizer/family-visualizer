angular.module('app').directive('menuBarDir', function ($location) {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/menuBar/demoMenuBarTmp.html"
		, controller: "menuBarCtrl"
		, scope: {
			user: '='
		}
	}


});
