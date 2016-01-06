angular.module('app').directive('linearChart', function($parse, $window) {

            return {
                restrict: 'EA',
                template: "<svg width='850' height='200'></svg>",
                controller: 'homeChartCtrl',
                link: function(scope, elem, attrs) {
                    var data = [
                        [5, 3],
                        [10, 17],
                        [15, 4],
                        [2, 8],
						[12, 2],
						[12, 9],
						[1, 9],
						[20, 38],
						[12, 2],
						[23, 75],
						[9, 13],
						[20, 7],
						[19, 18],
						[20, 34],
						[29, 3],
						[50, 5],
						[46, 7]
                    ];
					var x = 3000;
					var y = 1000;
					// MY TRY
					function radiusGenerator() {
						return Math.floor(Math.random() * 10) + 5;
					}

					function randomColor (data) {
						if(data[0] === 5 || data[0] === 12 || data[0] === 2 ) {
							return "#1bb54a";
						} else {
							return "#f89e31";
						}
					}
					var svg = d3.select('body').append('svg')
						.attr({
							width: 3000,
							height: 1000
						});

					var dots = svg.selectAll('circle')
						.data(data)
						.enter()
						.append('circle')
					.attr({
						cx: function(d) { return d[0] * 20; },
						cy: function(d) { return d[1] * 25; },
						r: function() {return radiusGenerator(); },
						"fill": function(d) { return randomColor(d); }
					});

					//draw the x axis
					var xAxis = d3.svg.axis()
					    .scale(x)
					    .orient('bottom');

					main.append('g')
					    .attr('transform', 'translate(0,' + height + ')')
					    .attr('class', 'main axis date')
					    .call(xAxis);

					// draw the y axis
					var yAxis = d3.svg.axis()
					    .scale(y)
					    .orient('left');

					main.append('g')
					    .attr('transform', 'translate(0,0)')
					    .attr('class', 'main axis date')
					    .call(yAxis);

					var g = main.append("svg:g");
					// // INITIAL CHART
					// // INITIAL CHART
					// // INITIAL CHART
					//
                    // var margin = {
                    //         top: 20,
                    //         right: 15,
                    //         bottom: 60,
                    //         left: 60
                    //     },
                    //     width = 960 - margin.left - margin.right,
                    //     height = 500 - margin.top - margin.bottom;
					//
                    // var x = d3.scale.linear()
                    //     .domain([0, d3.max(data, function(d) {
                    //         return d[0];
                    //     })])
                    //     .range([0, width]);
					//
                    // var y = d3.scale.linear()
                    //     .domain([0, d3.max(data, function(d) {
                    //         return d[1];
                    //     })])
                    //     .range([height, 0]);
					//
                    // var chart = d3.select('body')
                    //     .append('svg:svg')
                    //     .attr('width', width + margin.right + margin.left)
                    //     .attr('height', height + margin.top + margin.bottom)
                    //     .attr('class', 'chart')
					//
                    // var main = chart.append('g')
                    //     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                    //     .attr('width', width)
                    //     .attr('height', height)
                    //     .attr('class', 'main')
					//
                    // // draw the x axis
                    // var xAxis = d3.svg.axis()
                    //     .scale(x)
                    //     .orient('bottom');
					//
                    // main.append('g')
                    //     .attr('transform', 'translate(0,' + height + ')')
                    //     .attr('class', 'main axis date')
                    //     .call(xAxis);
					//
                    // // draw the y axis
                    // var yAxis = d3.svg.axis()
                    //     .scale(y)
                    //     .orient('left');
					//
                    // main.append('g')
                    //     .attr('transform', 'translate(0,0)')
                    //     .attr('class', 'main axis date')
                    //     .call(yAxis);
					//
                    // var g = main.append("svg:g");
					//
                    // g.selectAll("scatter-dots")
                    //     .data(data)
                    //     .enter().append("svg:circle")
                    //     .attr("cx", function(d, i) {
                    //         return x(d[0]);
                    //     })
                    //     .attr("cy", function(d) {
                    //         return y(d[1]);
                    //     })
                    //     .attr("r", function(d) {
					// 		return (d[0]);
					// 	});
                }
			}

            });
