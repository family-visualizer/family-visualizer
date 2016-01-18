angular.module('app').directive('aliveChartDir', function () {

    return {
          restrict: "E"
        , templateUrl: "./dist/html/alivePerYearChart/alivePerYearTmpl.html"
        , controller: "aliveChartCtrl"
        , link(scope, element, attrs) {

        }
    }

});