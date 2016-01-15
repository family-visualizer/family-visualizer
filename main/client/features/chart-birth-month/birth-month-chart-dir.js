angular.module('app').directive('birthMonth', () => {

    return {
        restrict: 'EA',
        templateUrl: './dist/html/chart-birth-month/birth-month-chart-template.html',
        controller: 'birthMonthCtrl',
        link(scope, elem, attrs) {

			var dataset = scope.chartData;
			// var dataset = {
			//   January: [12, 0, 0, 0, 0],
			//   February: [10, 10, 10, 10, 10],
			//   March: [10, 0, 10, 10, 18],
			//   April: [10, 15, 10, 10, 10],
			//   May: [10, 15, 11, 102, 19],
			// };

            var width = 860,
                height = 900,
                cwidth = 30;

			console.log("d3.scale", d3.scale);
			var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

            var pie = d3.layout.pie()
                .sort(null);

            var arc = d3.svg.arc();

            var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


            var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g");

            var path = gs.selectAll("path")
                .data(function(d) {
                    return pie(d);
                })
                .enter().append("path")
				.attr("class", "test-baby")
                .attr("fill", function(d, i) {
                    return color(i);
                })
                .attr("d", function(d, i, j) {
                    return arc.innerRadius(10 + cwidth * j).outerRadius(cwidth * (j + 1))(d);
                });

			d3.selectAll("path")
				.on("mouseover", darken)
				.on("mouseleave", lighten);

			d3.selectAll("path")
				.style("opacity", 0.4);

			function darken() {
				d3.select(this)
					.style("opacity", 0.8);
			};

			function lighten() {
				d3.select(this)
					.style("opacity", 0.2);
			}

        }
    }

});
