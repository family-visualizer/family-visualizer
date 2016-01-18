angular.module('app').directive('thumbnailDir', function () {

	return {
		  restrict: "E"
		, templateUrl: "./dist/html/thumbnail-component/thumbnail-component-template.html"
		, controller: "thumbnailCtrl"
		, link(scope, element, attrs) {

		}
	}

});
