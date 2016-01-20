angular.module('app').directive('menuBarDir', function ($location) {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/menuBar/MenuBarTmp.html"
		, controller: "menuBarCtrl"
	};

});
