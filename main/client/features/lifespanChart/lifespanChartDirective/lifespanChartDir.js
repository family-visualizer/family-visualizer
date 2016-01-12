angular.module('app').directive('lifespanChart', ($parse, $window) => {

    return {
		restrict: 'EA'
        , templateUrl: './dist/html/lifespanChart/lifespanChartDirective/lifespanChartTemp.html'
        , controller: 'lifespanChartCtrl'
        , link(scope, elem, attrs) {

	
			var height = 500;
			var width = 800;
			var padding = 50;
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
				.range([padding, width-padding])
				.clamp(true);
				// .ticks();

			var yscale = d3.scale.linear()
				.domain([d3.min(scope.dataset, function(data) {
					return data[0];}), 
				d3.max(scope.dataset, function (data) {
					return data[1];
				})])
				.range([(height - 100) - padding, padding]);

			var rscale = d3.scale.linear()
				.domain([d3.min(scope.dataset, function(data) {
					return data[0];}), 
				d3.max(scope.dataset, function (data) {
					return data[2];
				})])
				.range([10, 50]);

			var xAxis = d3.svg.axis().scale(xscale);


			var startingValue = d3.min(scope.dataset, function(data) {
						return data[0];});
			
			
			// var value = brush.extent()[0];
			
			var sliderValue = startingValue;
						
						
			// defines brush
			var brush = d3.svg.brush()
				.x(xscale)
				.extent([startingValue, startingValue])
				.on("brush", brushed);
				
					
			function brushed(data) {
				
				var value = brush.extent()[0];

				if (d3.event.sourceEvent) { // not a programmatic event
					handle.select('text');
					value = xscale.invert(d3.mouse(this)[0]);
					brush.extent([value, value]);
				}

				
				
				handle.attr("transform", "translate(" + xscale(value) + ",0)");
				handle.select('text').text(Math.floor(value));
				
				sliderValue = Math.floor(value);
				
				// if (data[0] === sliderValue) {
				// 	svg.selectAll("circle")
				// 		.transition()
				// 		// .delay(function (data) {
				// 		// 	return data[0];
				// 		// })
				// 		// .duration(2000)
				// 		.attr({
				// 			fill: "red",
				// 			r: function (data) {
				// 				return rscale(data[2]);
				// 			}
				// 		});
				// }	
				console.log(sliderValue);
				
							
			}
			
			
			svg.append("rect")
				.attr('width', "100%")
				.attr('height', height - 100)
				.attr('fill', 'rgb(100,0,222)');
				// .attr('margin', 50);
				

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
					, fill: 'green'
					
				});
			
			
			// svg.selectAll("circle")
			// 	.transition()
			// 	// .delay(function (data) {
			// 	// 	return data[0];
			// 	// })
			// 	.duration(2000)
			// 	.attr({
			// 		fill: function (data) {
			// 			if (data[0] === sliderValue) {
			// 				return 'red';
			// 			} else {
			// 				return 'green';
			// 			}
			// 		},
					
			// 		r: function (data) {
			// 			return rscale(data[2]);
			// 		}
			// 	});
					
			
			svg.append("g")
				.attr("class", "x axis")
				// put in middle of screen
				.attr("transform", "translate(0," + (height - 50) + ")")
				// inroduce axis
				.call(d3.svg.axis()
					.scale(xscale)
					.orient("bottom")
					.tickFormat(function(d) { return d; })
					.tickSize(10)
					.tickPadding(12))
					// .tickValues([1900, 2014]))
					.select(".domain")
					.select(function() {console.log(this); return this.parentNode.appendChild(this.cloneNode(true)); })
					.attr("class", "halo");

			var slider = svg.append("g")
				.attr("class", "slider")
				.call(brush);

			slider.selectAll(".extent,.resize")
				.remove();

			slider.select(".background")
				.attr("transform", "translate(0," + (height - 50) + ")")
				.attr("height", 25);

			var handle = slider.append("g")
				.attr("class", "handle");

			handle.append("path")
				.attr("transform", "translate(0," + (height - 50) + ")")
				.attr("d", "M 0 -10 V 10");

			handle.append('text')
			.text(startingValue)
			.attr("transform", "translate(" + 0 + " ," + (height - 75) + ")");

			slider
				.call(brush.event);
					
					
				
			
				
				
				
				
			

		}
	};
});