angular.module('app').directive('lifespanChart', () => {
// $parse, $window
    return {
		restrict: 'EA'
        , templateUrl: './dist/html/lifespanChart/lifespanChartDirective/lifespanChartTemp.html'
        , controller: 'lifespanChartCtrl'
		, scope: {
			testFamily: "="
		}
        , link(scope, elem, attrs) {
			
		// 	var chart = $(".chart"),
		// 	aspect = chart.width() / chart.height(),
		// 	container = chart.parent();
		// $(window).on("resize", function() {
		// 	var targetWidth = container.width();
		// 	chart.attr("width", targetWidth);
		// 	chart.attr("height", Math.round(targetWidth / aspect));
		// }).trigger("resize");

			
			var family;
			
			function updateFamily (familyObject) {
				family = scope.cleanData(familyObject);
				return family;	
			};
			
			
			updateFamily(scope.testFamily);


			var height = 500;
			var width = 850;
			
			var svg = d3.select(".chart")
				.append("svg")
				.attr({
					height: height
					, width: width
					// , viewBox: "0 0 600 200"
					// , preserveAspectRatio: "xMinYMid"
				});

			
			var rscale = d3.scale.linear()
				.domain([family.minLifespan, family.maxLifespan])
				.range([5, 30]);

			var padding = rscale(family.maxLifespan) + 10;	

			var xscale = d3.scale.linear()
				.domain([family.minYear - 1, family.maxYear + 1])
				.range([padding + 55, width - padding])
				.clamp(true);

			var yscale = d3.scale.linear()
				.domain([family.minPersonNumber, family.maxPersonNumber])
				.range([(height - 100) - padding, padding]);

			

			getStats(family.cleanData, family.maxYear);
			
			var stats =
				  [{
					name: "Average Lifespan",
					value: scope.stats.avgLifespan
				  }
				, {
					name: "Longest Lifespan",
					value: scope.stats.maxLifespan
				}
				, {
					name: "Shortest Lifespan",
					value: scope.stats.minLifespan
				  }];
		
			
			var statsElements = d3.select(".lifespanStats")
				.selectAll("div")
				.data(stats)
				.enter()
				.append("div")
				.attr("class", "statName")
				.text(function (d) {return d.name;});

				statsElements.append("p")
				.attr("class", "stat")
				.text(function (d) {return d.value;});

	



			svg.append("rect")
				.attr('width', width - 100)
				.attr('height', height - 100)
				.attr("transform", "translate(60,0)")
				.attr('fill', 'none');


			svg.selectAll("circle")
				.data(family.cleanData)
				.enter()
				.append("circle")
				.attr("class", "personCircle")
				.attr({
					r: 0
					, cx: function (data) {
						return xscale(data.lifespanArray[0]);
					}
					, cy: function (data) {
						return yscale(data.generation);
					}
				})
				.on("mouseover", function (d) {
					
					// move to front
					// this.parentNode.appendChild(this);

					//Position the tooltip <div> and set its content
					var x = d3.event.pageX;
					var y = d3.event.pageY - 40;

					d3.select("#lifespanTooltip")
						.style("left", x + "px")
						.style("top", y + "px")
						.style("opacity", 1)
						.text(d.name + ", age " + d.lifespanTotal);
				})
				.on("mouseout", function (d) {	
					//Hide the tooltip
					d3.select("#lifespanTooltip")
						.style("opacity", 0);
					// move back to origin
					// var nextSibling = d3.select("#circle-" + (d + 1)).node();
					// this.parentNode.insertBefore(this, nextSibling);
				});



//1743

			function animateIn(data) {
				svg.selectAll("circle")
					.data(family.cleanData)
					.transition("draw")
					.delay(function (data, i) {
						// return (data.lifespanArray[0] + ((i+50) * 1000));
						return i * 15;

					})
					.duration(function (data) {
						return (data.lifespanTotal * 20);
					})
					.attr({
						r: function (data) {
							return rscale(data.lifespanTotal);
						}
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							
							return yscale(data.generation);
							
						}
						, class: function (data) {
							return data.ascendancyNumber;
						}
						, fill: function (data) {
							if (data.gender === "Female") {
								return "#ed1e79";
							} else {
								return "#00aeef";
							}
						}
						, stroke: "black"
						, opacity: .5
					})
					.call(endall);
			}


			animateIn(family.cleanData);
			
			function endall(transition, callback) {
				var n = 0; 
				transition 
					.each(function() { ++n; }) 
					.each("end", function() {
						 if (!--n) animateOut.apply(this, arguments); }); 
  			} 
			
			
			function animateOut(data) {
				svg.selectAll("circle")
					.data(family.cleanData)
					.transition("draw")
					.delay(300)
					.duration(function (data) {
						return 2000;
						// return (data.lifespanTotal * 20);
					})
					.attr({
						r: 0
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							
							return yscale(data.generation);
							
						}
						});
			}
		

			var startingValue = family.minYear - 1;

	

			// defines brush
			var brush = d3.svg.brush()
				.x(xscale)
				.extent([startingValue, startingValue])
				.on("brush", brushed);

			svg.append("g")
				.attr("transform", "translate(0," + height + ")");

				
			//X Axis	
			svg.append("g")
				.attr("class", "axisLine lifespanXAxis")
				.attr("transform", "translate(0," + (height - 100) + ")")
				.call(d3.svg.axis()
					.scale(xscale)
					.orient("bottom")
					.tickFormat(function (d) { return d; })
					.tickPadding(10))
				.select(".domain");
			
			 svg.append("text")
				.attr("transform", "translate("+ width / 2 + "," + (height - 45) + ")")
				.style("text-anchor", "middle")
				.attr("class", "axisLabel")
				.text("Birth Year");
		
		
			//Y Axis
			svg.append("g")
				.attr("class", "axisLine lifespanYAxis")
				.attr("transform", "translate(60,0)")
				.call(d3.svg.axis()
					.scale(yscale)
					.orient("left")
					.tickFormat(d3.format("d"))
					.tickPadding(10))
				.select(".domain");
		
			 svg.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 0)
				.attr("x", -((height -75) / 2))
				.attr("dy", "1em")
				.style("text-anchor", "middle")
				.attr("class", "axisLabel")
				.text("Generation");

		

			var slider = svg.append("g")
				.attr("class", "slider")
				.call(brush);

			slider.selectAll(".extent,.resize")
				.remove();

			slider.select(".background")
				.attr("transform", "translate(0," + (height - 30) + ")");

			var handle = slider.append("g")
				.attr("class", "handle");

				
			handle.append("path")
				.attr("transform", "translate(0," + (height - 30) + ")")
				.attr("d", "M 0 -15 V 15");
				
				
			handle.append('text')
				.text(startingValue)
				.attr("class", "yearScroll")
				.attr("transform", "translate(" + (-30) + " ," + (height - 10) + ")");

			handle.append("text")
				.attr("text-anchor", "start")
				.attr("font-family", "FontAwesome")
				.attr("font-size", "20px")
				.attr("class", "handle")
				.text(function (d) {return '\uf060';})
				.attr("transform", "translate(" + (-50) + " ," + (height - 10) + ")");
				
			handle.append("text")
				.attr("text-anchor", "end")
				.attr("font-family", "FontAwesome")
				.attr("font-size", "20px")
				.attr("class", "handle")
				.text(function (d) {return '\uf061';})
				.attr("transform", "translate(" + (35) + " ," + (height - 10) + ")");
				
			slider
				.call(brush.event);


			var sliderValue = startingValue;


			function clearGraph(data) {
				svg.selectAll("circle")
					.attr({
						r: 0
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							return yscale(data.generation);
						}
			});
			}

			function changeGraph(data) {
						
				svg.selectAll("circle")
					.filter(function (data) {
						if (scope.gender !== "Both") {
							return data.gender === scope.gender;
						} else {
							return data;
						}
					})
					.filter(function (data) {
						return data.lifespanArray[0] <= sliderValue;
					})
					.attr("class", "personCircle")
					.attr({
						r: function (data) {
							return rscale(data.lifespanTotal);
						}
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							return yscale(data.generation);
						}
						, fill: function (data) {
							
							if (data.gender === "Female") {
								return "#ed1e79";
							} else {
								return "#00aeef";
							}
						}
						, stroke: "black"
						, opacity: .5

					});
			

				svg.selectAll("circle")
					.filter(function (data) {
						return data.lifespanArray[0] > sliderValue;
					})
					.filter(function (data) {
						if (scope.gender !== "Both") {
							return data.gender === scope.gender;
						} else {
							return data;
						}
					})
					.attr({
						r: 0
						, cx: function (data) {
							return xscale(data.lifespanArray[0]);
						}
						, cy: function (data) {
							return yscale(data.generation);
						}
					});
			}


			function brushed() {


				var value = brush.extent()[0];
				
				// var value = brush.extent(family.maxYear, family.maxYear);
				

				if (d3.event.sourceEvent) { // not a programmatic event
					handle.select('text');
					d3.select('stat');
					value = xscale.invert(d3.mouse(this)[0]);
					brush.extent([value, value]);
				}

				handle.attr("transform", "translate(" + xscale(value) + ",0)");
				handle.select('text').text(Math.floor(value));

				sliderValue = (Math.floor(value));
				
				
				getStats(family.cleanData, sliderValue, scope.gender);
				buildStats(scope.stats);
				changeGraph(family.cleanData);

			}
			
			function getStats (family, sliderValue, gender) {
				scope.getStats(family, sliderValue, gender);
	
			}
			
			function buildStats (stats) {

				var statsStructure = 
				  [{
					name: "Average Lifespan",
					value: stats.avgLifespan
				   }
				 , {
					name: "Longest Lifespan",
					value: stats.maxLifespan
				   }
				 , {
					name: "Shortest Lifespan",
					value: stats.minLifespan
				  }];
						

				d3.select(".lifespanStats")
				.selectAll("p")
				.data(statsStructure)
				.text(function (d) {
					return d.value;})
				.attr("class", "stat");
			}
			
			
			// Creating radio buttons

			var radioButtons = ["Male", "Female", "Both"],
				radioValue = "Both";

			// Create the shape selectors
			var form = d3.select(".lifespanForm").append("form").attr("class", "radioButtonForm");

			form.selectAll("label")
				.data(radioButtons)
				.enter()
				.append("label")
				.text(function (d) { return d; })
				.insert("input")
				.attr({
					type: "radio",
					class: "shape",
					name: "gender",
					value: function (d, i) { 
						return scope.gender = d; }
				})
				.property("checked", function (d, i) { return d === radioValue; })
				.on("click", function (d, i) {
					scope.gender = d;
					clearGraph();
					getStats(family.cleanData, sliderValue, scope.gender);
					buildStats(scope.stats);
					changeGraph();
					});
			
			

			
		}
	};
});
