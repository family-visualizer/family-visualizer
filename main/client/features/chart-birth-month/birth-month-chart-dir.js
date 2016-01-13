angular.module('app').directive('birthMonth', () => {

    return {
        restrict: 'EA',
        templateUrl: './dist/html/chart-birth-month/birth-month-chart-template.html',
        controller: 'birthMonthCtrl',
        link(scope, elem, attrs) {
            // var generationArray =
			// [
			// 	{
			// 		generation: 1,
			// 		data:
			// 		{
			// 			{
			// 				amonth: "January",
			// 				births: 6
			// 			},
			// 			{
			// 				amonth: "February",
			// 				births: 8
			// 			},
			// 			{
			// 				amonth: "March",
			// 				births: 3
			// 			}
			// 		}
			// 	},
			// 	{
			// 		generation: 2,
			// 		data:
			// 		{
			// 			{
			// 				amonth: "January",
			// 				births: 14
			// 			},
			// 			{
			// 				amonth: "February",
			// 				births: 0
			// 			},
			// 			{
			// 				amonth: "March",
			// 				births: 8
			// 			}
			// 		}
			// 	},
			// 	{
			// 		generation: 3,
			// 		data:
			// 		{
			// 			{
			// 				amonth: "January",
			// 				births: 12
			// 			},
			// 			{
			// 				amonth: "February",
			// 				births: 12
			// 			},
			// 			{
			// 				amonth: "March",
			// 				births: 8
			// 			}
			// 		}
			// 	}
			//
			// ];

			// passInGenerations(generationArray);

			// function passInGenerations(generationArray) {
			// 	for(var i = 0; i < generationArray.length; i++) {
			// 		console.log("this is generationArray[i]", generationArray[i]);
			// 		// console.log("this is generationArray[i][data]", generationArray[i][data]);
			// 		// console.log("this is generationArray[i][generation]", generationArray[i][generation])
			// 		generateDonut(generationArray[i].data, generationArray[i].generation);
			// 	}
			// }
			var test = [
				{
					month: "January",
					birthss: 6
				},
				{
					month: "February",
					births: 8
				},
				{
					month: "March",
					births: 4
				}
			]

			generateDonut(test, 3);

            function generateDonut(data, genMultiplier) {
				console.log("this is data", data);
				console.log("this is genMultiplier", genMultiplier);
                var width = 960,
                    height = 500,
                    radius = Math.min(width, height) / 2;

                var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(radius - 70);

                var pie = d3.layout.pie()
                    .sort(null)
                    .value(function(d) {
                        return d.population;
                    });

                var svg = d3.select("body").append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


                console.log("this is daXXXta", data);


                var g = svg.selectAll(".arc")
                    .data(pie(data))
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    .attr("d", arc)
                    .style("fill", function(d) {
                        console.log("this is d", d);
                        return color(d.data.age);
                    });

                g.append("text")
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".35em")
                    .text(function(d) {
                        return d.data.age;
                    });


                function type(d) {
                    d.population = +d.population;
                    return d;
                }
            }
        }
    }

});
