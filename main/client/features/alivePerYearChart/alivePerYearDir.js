angular.module('app').directive('aliveChartDir', function (alivePerYearService) {

    return {
		restrict: "E"
        , templateUrl: "./dist/html/alivePerYearChart/alivePerYearTmpl.html"
        , controller: "aliveChartCtrl"
        , link(scope, element, attrs) {
			
			// var minAndMax = alivePerYearService.findMinAndMax(alivePerYearService.famSearchDataset);
			// console.log(minAndMax);
			
			
			var data = alivePerYearService.mainData;
			console.log('this is data in directive', data);

			data.forEach(function (item) {
				item.date = new Date(item.date);
			});

			var margin = { top: 10, right: 10, bottom: 100, left: 40 },
				margin2 = { top: 430, right: 10, bottom: 20, left: 40 },
				width = 960 - margin.left - margin.right,
				height = 500 - margin.top - margin.bottom,
				height2 = 500 - margin2.top - margin2.bottom;

			var parseDate = d3.time.format("%b %Y").parse;

			var x = d3.time.scale().range([0, width]),
				x2 = d3.time.scale().range([0, width]),
				y = d3.scale.linear().range([height, 0]),
				y2 = d3.scale.linear().range([height2, 0]);

			var xAxis = d3.svg.axis().scale(x).orient("bottom"),
				xAxis2 = d3.svg.axis().scale(x2).orient("bottom"),
				yAxis = d3.svg.axis().scale(y).orient("left");

			var brush = d3.svg.brush()
				.x(x2)
				.on("brush", brushed);

			var area = d3.svg.area()
				// .attr('class', 'topArea')
				.interpolate("monotone")
				.x(function (d) { return x(d.date); })
				.y0(height)
				.y1(function (d) { return y(d.alive); });

			var area2 = d3.svg.area()
				// .attr('class', 'bottomArea')
				.interpolate("monotone")
				.x(function (d) { return x2(d.date); })
				.y0(height2)
				.y1(function (d) { return y2(d.alive); });

			var svg = d3.select("body").append("svg")
				.attr("class", "alivesvg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom);

			svg.append("defs").append("clipPath")
				.attr("id", "clip")
				.append("rect")
				.attr("width", width)
				.attr("height", height);

			var focus = svg.append("g")
				.attr("class", "focus")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			var context = svg.append("g")
				.attr("class", "context")
				.attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");


			// console.log("this is data", data);
			x.domain(d3.extent(data.map(function (d) { return d.date; })));
			y.domain([0, d3.max(data.map(function (d) { return d.alive; }))]);
			x2.domain(x.domain());
			y2.domain(y.domain());






			focus.append("path")
				.datum(data)
				.attr("class", "alivearea")
				.classed("upperChart", true)
				.attr("d", area);

			focus.append("g")
				.attr("class", "x aliveaxis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

			focus.append("g")
				.attr("class", "y aliveaxis")
				.call(yAxis);

			context.append("path")
				.datum(data)
				.attr("class", "alivearea")
				.classed("lowerChart", true)
				.attr("d", area2);

			context.append("g")
				.attr("class", "x aliveaxis")
				.attr("transform", "translate(0," + height2 + ")")
				.call(xAxis2);

			context.append("g")
				.attr("class", "x alivebrush")
				.call(brush)
				.selectAll("rect")
				.attr("y", -6)
				.attr("height", height2 + 7);


			function brushed() {
				x.domain(brush.empty() ? x2.domain() : brush.extent());
				focus.select(".alivearea").attr("d", area);
				focus.select(".x.aliveaxis").call(xAxis);
			}

			function type(d) {
				d.date = parseDate(d.date);
				d.alive = +d.alive;
				return d;
			}
			console.log()

			// Creating radio buttons

            var radioButtons = ["Male", "Female", "Both"],
                radioValue = "Both";

            // Create the shape selectors
            var form = d3.select(".genderChoice").append("form").attr("class", "aliveGenderBox");

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
                    console.log('clicked');
					scope.gender = d;
                   changeGender(data);
				
					
                        
						
                    });
					
					function changeGender(data){
						console.log('change gender is running');
						
						// console.log(data);
						if (scope.gender === "Female"){
					area = d3.svg.area()
				.interpolate("monotone")
				.x(function (data) { return x(data.date); })
				.y0(height)
				.y1(function (data) { return y(data.female); });
				
				area2 = d3.svg.area()
				// .attr('class', 'bottomArea')
				.interpolate("monotone")
				.x(function (d) { return x2(d.date); })
				.y0(height2)
				.y1(function (d) { return y2(d.female); });
				
				
				
				} else if (scope.gender === "Male"){
					area = d3.svg.area()
				.interpolate("monotone")
				.x(function (data) { return x(data.date); })
				.y0(height)
				.y1(function (data) { return y(data.male); });
				
				area2 = d3.svg.area()
				// .attr('class', 'bottomArea')
				.interpolate("monotone")
				.x(function (d) { return x2(d.date); })
				.y0(height2)
				.y1(function (d) { return y2(d.male); });
				
				} else {
					area = d3.svg.area()
				.interpolate("monotone")
				.x(function (data) { return x(data.date); })
				.y0(height)
				.y1(function (data) { return y(data.alive); });
				
				area2 = d3.svg.area()
				// .attr('class', 'bottomArea')
				.interpolate("monotone")
				.x(function (d) { return x2(d.date); })
				.y0(height2)
				.y1(function (d) { return y2(d.alive); });
				
				}
				d3.selectAll(".upperChart")

				.attr("d", area);
					
					d3.selectAll(".lowerChart")

				.attr("d", area2);
					}
					
				// function changeGender(data, gender){
				// 	area = d3.svg.area()
				// // .attr('class', 'topArea')
				// .interpolate("monotone")
				// .x(function (d) { return x(data.date); })
				// .y0(height)
				// .y1(function (d) { return y(gender); });
				// }
        }
    }

});