angular.module('app').directive('footerDir', function () {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/footer/footer-template.html"
		, controller: "footerCtrl"
		, link(scope, element, attrs) {

		}
	}

});
