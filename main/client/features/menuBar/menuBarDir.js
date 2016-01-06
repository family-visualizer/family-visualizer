angular.module('app').directive('menuBarDir', function () {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/menuBar/MenuBarTmp.html"
		, controller: "menuBarCtrl"
	}

});
