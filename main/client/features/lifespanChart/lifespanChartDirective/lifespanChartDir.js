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

			var xAxis = d3.svg.axis().scale(xscale);



			
				
				
				
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
					, fill: 'green'
					
				});
				
			var sliderValue = 5;
			
			svg.selectAll("circle")
				.transition()
				// .delay(function (data) {
				// 	return data[0];
				// })
				.duration(2000)
				.attr({
					fill: function (data) {
						if (data[0] === sliderValue) {
							return 'red';
						} else {
							return 'green';
						}
					},
					
					r: function (data) {
						return rscale(data[2]);
					}
				});
				
			
			var margin = { top: 50, right: 50, bottom: 50, left: 50 },
				// width = 960 - margin.left - margin.right,
				// height = 500 - margin.bottom - margin.top,
				startingValue = 1983;

			// sets scale for slider
			var x = d3.scale.linear()
				.domain([1900, 2014])
				.range([0, width])
				.clamp(true);

			// defines brush
			var brush = d3.svg.brush()
				.x(x)
				.extent([startingValue, startingValue])
				.on("brush", brushed);

			// var svg = d3.select(".chart").append("svg")
			// 	.attr("width", width + margin.left + margin.right)
			// 	.attr("height", height + margin.top + margin.bottom)
			// 	.append("g")
			// // classic transform to position g
			// 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			svg.append("g")
				.attr("class", "x axis")
			// put in middle of screen
				.attr("transform", "translate(0," + height / 2 + ")")
			// inroduce axis
				.call(d3.svg.axis()
					.scale(x)
					.orient("bottom")
					.tickFormat(function (d) { return d; })
					.tickSize(0)
					.tickPadding(12)
					.tickValues([1900, 2014]))
				.select(".domain")
				.select(function () { console.log(this); return this.parentNode.appendChild(this.cloneNode(true)); })
				.attr("class", "halo");

			var slider = svg.append("g")
				.attr("class", "slider")
				.call(brush);

			slider.selectAll(".extent,.resize")
				.remove();

			slider.select(".background")
				.attr("height", height);

			var handle = slider.append("g")
				.attr("class", "handle")

			handle.append("path")
				.attr("transform", "translate(0," + height / 2 + ")")
				.attr("d", "M 0 -20 V 20")

			handle.append('text')
				.text(startingValue)
				.attr("transform", "translate(" + (-18) + " ," + (height / 2 - 25) + ")");

			slider
				.call(brush.event)

			function brushed() {
				var value = brush.extent()[0];

				if (d3.event.sourceEvent) { // not a programmatic event
					handle.select('text');
					value = x.invert(d3.mouse(this)[0]);
					brush.extent([value, value]);
				}

				handle.attr("transform", "translate(" + x(value) + ",0)");
				handle.select('text').text(Math.floor(value))
			}





		}
	};
});