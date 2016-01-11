angular.module('app').directive('lifespanChart', ($parse, $window) => {

    return {
		restrict: 'EA'
        , templateUrl: './dist/html/lifespanChart/lifespanChartDirective/lifespanChartTemp.html'
        , controller: 'lifespanChartCtrl'
        , link(scope, elem, attrs) {

	
			var height = 500;
			var width = 800;
			var padding = 20;
			var svg = d3.select(".chart")
				.append("svg")
				.attr({
					height: height
					, width: width
				});
				
			var xscale = d3.scale.linear()
				.domain([d3.min(scope.dataset, function(data) {
					return data[0];}), 
				d3.max(scope.dataset, function (data) {
					return data[0];
				})])
				.range([padding, width-padding]);

			var yscale = d3.scale.linear()
				.domain([d3.min(scope.dataset, function(data) {
					return data[0];}), 
				d3.max(scope.dataset, function (data) {
					return data[1];
				})])
				.range([height - padding, padding]);

			var rscale = d3.scale.linear()
				.domain([d3.min(scope.dataset, function(data) {
					return data[0];}), 
				d3.max(scope.dataset, function (data) {
					return data[2];
				})])
				.range([10, 50]);


			// var brush = d3.svg.brush()
			// 	.x(xscale)
			// 	.extent(d3.min(scope.dataset, function(data) {
			// 		return data[0];}), 
			// 	d3.max(scope.dataset, function (data) {
			// 		return data[1];
			// 	})])
				
				
			svg.append("rect")
				.attr('width', "100%")
				.attr('height', "100%")
				.attr('fill', 'rgb(100,0,222)')
				.attr('margin', 50);
				

			svg.selectAll("circle")
				.data(scope.dataset)
				.enter()
				.append("circle")
				.attr({
					r: 0
					, cx: function (data) {
						return xscale(data[0]);
					}
					, cy: function (data) {
						return yscale(data[1]);
					}
					// , fill:
					// function (data) {
					// 	// return "rgb(" + data[0] + ",0," + data[1] + ")";
					// 	return 'rgb(150, 250, 100)';
					// }
				});
				
			
			svg.selectAll("circle")
				.transition()
				// .delay(function (data) {
				// 	return data[0];
				// })
				.duration(2000)
				.attr({
					
					fill: function (data, sliderValue) {
						if (data[0] === sliderValue) {
							return 'green';
						}
					},
					
					r: function (data) {
						return rscale(data[2]);
					}
				});
				
				
			
		}
	};
});