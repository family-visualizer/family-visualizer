angular.module('app').directive('infoBoxDir', function () {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/infoBoxes/infoBoxTmp.html"
		, scope: {
			  infoBox: '='
		}
	}

});
