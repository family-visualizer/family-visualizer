angular.module('app').directive('lifespanChart', ($parse, $window) => {

    return {
		restrict: 'EA'
        , templateUrl: './dist/html/lifespanChart/lifespanChartDirective/lifespanChartTemp.html'
        , controller: 'lifespanChartCtrl'
        , link(scope, elem, attrs) {

			console.log("clean data", scope.cleanData);

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
				.domain([scope.minYear - 1, scope.maxYear + 1])
				.range([padding + 25, width - padding - 25])
				.clamp(true);
			// .ticks();

			var yscale = d3.scale.linear()
				.domain([scope.minPersonNumber, scope.maxPersonNumber])
				.range([(height - 100) - padding, padding]);

			var rscale = d3.scale.linear()
				.domain([scope.minLifespan, scope.maxLifespan])
				.range([.5, 25]);


			// var tip = d3.tip()
			// 	.attr('class', 'd3-tip')
			// 	.offset([-10, 0])
			// 	.html(function (d) {
			// 		return "<strong>Frequency:</strong> <span style='color:red'>" + d.name + "</span>";
			// 	});

			// var delayScale = 	

			svg.append("rect")
				.attr('width', width - 100)
				.attr('height', height - 100)
				.attr("transform", "translate(60,0)")
				.attr('fill', 'none');


			svg.selectAll("circle")
				.data(scope.cleanData)
				.enter()
				.append("circle")
				.attr({
					r: 0
					, cx: function (data) {
						return xscale(data.lifespanArray[0]);
					}
					, cy: function (data) {
						if (data.ascendancyNumber) {
							return yscale(data.ascendancyNumber);
						} else {
							return yscale(data.descendancyNumber);
						}
					},
					class: 'personCircle'

				})
				.on("mouseover", function (d) {

					// move to front
					this.parentNode.appendChild(this);

					//Position the tooltip <div> and set its content
					var x = d3.event.pageX;
					var y = d3.event.pageY - 40;

					d3.select("#lifespanTooltip")
						.style("left", x + "px")
						.style("top", y + "px")
						.style("opacity", 1)
						.text(d.name + ", age " + d.lifespanTotal);
					//Note: No need for an anonymous function here,
					//e.g. function(d) {…}, because the data value
					//'d' we want here belongs to the <g> element
					//on which mouseover was triggered, not the
					//tooltip div (which has no data bound to it).

				})
				.on("mouseout", function () {

					
					//Hide the tooltip
					d3.select("#lifespanTooltip")
						.style("opacity", 0);
					// move back to origin
					var nextSibling = d3.select("#circle-" + (d + 1)).node();
					this.parentNode.insertBefore(this, nextSibling);	

				});

			// svg.call(tip);
				
			/////////
				
		
		
			function animateIn(data) {
				console.log('function running');
				svg.selectAll("circle")
					.data(scope.cleanData)
					.transition("draw")
					.delay(function (data) {
						console.log("delay:", (data.lifespanArray[0] / scope.maxYear) * 1000);
						return rscale((data.lifespanArray[0] / scope.maxYear) * 1000);
					})
					.duration(function (data) {
						return rscale(data.lifespanTotal * 500);
					})
					.attr({
						r: function (data) {
							return rscale(data.lifespanTotal);
						}
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							if (data.ascendancyNumber) {
								return yscale(data.ascendancyNumber);
							} else {
								return yscale(data.descendancyNumber);
							}
						}
						, class: function (data) {
							return data.ascendancyNumber;
						}
						, fill: function (data) {
							if (data.ascendancyNumber % 2 === 0) {
								return "rgb(51, 51, 255)";
							} else {
								return "rgb(255, 0, 102)";
							}
						}
						, stroke: "black"
						, opacity: .5
					})
					.transition("hide")
					.delay(10000)
					.duration(function (data) {
						return rscale(data.lifespanTotal * 500);
					})
					.attr({
						r: 0
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							if (data.ascendancyNumber) {
								return yscale(data.ascendancyNumber);
							} else {
								return yscale(data.descendancyNumber);
							}
						}

					});

			}

			// animateIn();

			var startingValue = scope.minYear - 1;

	

			// defines brush
			var brush = d3.svg.brush()
				.x(xscale)
				.extent([startingValue, startingValue])
				.on("brush", brushed);

			svg.append("g")
			// classic transform to position g
				.attr("transform", "translate(0," + height + ")");

			svg.append("g")
				.attr("class", "axisLine lifespanXAxis")
				.attr("transform", "translate(0," + (height - 100) + ")")
				.call(d3.svg.axis()
					.scale(xscale)
					.orient("bottom")
					.tickFormat(function (d) { return d; })
					.tickPadding(5))

				.select(".domain");
			// .select(function() {console.log(this); return this.parentNode.appendChild(this.cloneNode(true)); })
			// 	.attr("class", "xAxisHalo");
			
			svg.append("g")
				.attr("class", "axisLine lifespanYAxis")
				.attr("transform", "translate(40,0)")
				.call(d3.svg.axis()
					.scale(yscale)
					.orient("left")
					.tickFormat(function (d) { return d; })
					.tickPadding(10))
				.select(".domain");
			// .select(function() {console.log(this); return this.parentNode.appendChild(this.cloneNode(true)); })
			// 	.attr("class", "yAxisHalo");

			var slider = svg.append("g")
				.attr("class", "slider")
				.call(brush);

			slider.selectAll(".extent,.resize")
				.remove();

			slider.select(".background")
				.attr("transform", "translate(0," + (height - 50) + ")")
				.attr("height", 10);

			var handle = slider.append("g")
				.attr("class", "handle");


			// handle.append('circle')
			// 	.attr("transform", "translate(0," + (height - 50) + ")")
			// 	.attr()
				
				
			handle.append("path")
				.attr("transform", "translate(0," + (height - 50) + ")")
				.attr("d", "M 0 -10 V 10")


			handle.append('text')
				.text(startingValue)
				.attr("transform", "translate(" + (-10) + " ," + (height - 25) + ")");

			slider
				.call(brush.event);
			// .transition()
			// .duration(500);


			



			function brushed() {

				var sliderValue = startingValue;
				var value = brush.extent()[0];

				if (d3.event.sourceEvent) { // not a programmatic event
					handle.select('text');
					value = xscale.invert(d3.mouse(this)[0]);
					brush.extent([value, value]);
				}

				handle.attr("transform", "translate(" + xscale(value) + ",0)");
				handle.select('text').text(Math.floor(value));

				sliderValue = (Math.floor(value));
				console.log("slider value", sliderValue);

				function changeGraph(data) {

					svg.selectAll("circle")
						.filter(function (data) {
							return data.lifespanArray[0] <= sliderValue;
						})
						.attr({
							r: function (data) {
								return rscale(data.lifespanTotal);
							}
							, cx: function (data) {
								return xscale(data.lifespanArray[0]);
							}
							, cy: function (data) {
								if (data.ascendancyNumber) {
									return yscale(data.ascendancyNumber);
								} else {
									return yscale(data.descendancyNumber);
								}
							}
							, fill: function (data) {
								if (data.ascendancyNumber % 2 === 0) {
									return "rgb(51, 51, 255)";
								} else {
									return "rgb(255, 0, 102)";
								}

							}
							, stroke: "black"
							, opacity: .5

						});
					// .on('mouseover', tip.show)
					// .on('mouseout', tip.hide);

					svg.selectAll("circle")
						.filter(function (data) {
							return data.lifespanArray[0] > sliderValue;
						})
					// .transition()
						.attr({
							r: 0
							, cx: function (data) {
								return xscale(data.lifespanArray[0]);
							}
							, cy: function (data) {
								if (data.ascendancyNumber) {
									return yscale(data.ascendancyNumber);
								} else {
									return yscale(data.descendancyNumber);
								}
							}
						});
				}

				changeGraph(scope.cleanData);

			}
		}
	};
});
