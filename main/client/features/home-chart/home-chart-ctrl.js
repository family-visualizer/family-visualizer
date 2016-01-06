angular.module('app').controller('homeChartCtrl', function($scope, $interval) {

	$scope.salesData=[
		[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
    ];

    $interval(function(){
        var hour=$scope.salesData.length+1;
        var sales= Math.round(Math.random() * 100);
        $scope.salesData.push({hour: hour, sales:sales});
    }, 1000, 10);

 })
