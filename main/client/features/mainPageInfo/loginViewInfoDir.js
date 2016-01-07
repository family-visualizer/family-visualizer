angular.module('app').directive('loginViewInfoDir', function () {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/mainPageInfo/mainPageInfo.html"
		, controller: "mainPageInfoCtrl"
		, scope: {
			  infoBox: '='
		}
	}

});
