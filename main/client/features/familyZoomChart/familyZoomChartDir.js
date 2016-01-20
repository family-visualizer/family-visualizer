angular.module('app')
.directive('familyZoomChartDir', () => {
	
	return {
          restrict: 'EA'
		, templateUrl: './dist/html/familyZoomChart/familyZoomChartTmp.html'
        , controller: 'familyZoomChartCtrl'
        , link ( scope, elem, attrs ) {
        	var svg;

        	scope.changeSide = function( side ) {
        		maleBoxIsChecked = false;
        		femaleBoxIsChecked = false;

        		d3.select('#zoom-female')
        			.property('checked', false);

        		d3.select('#zoom-male')
        			.property('checked', false);

        		d3.select('.zoom-chart-wrapper svg').remove()
        		if (side === "male") {
        			buildGraph("./dist/html/familyZoomChart/flare2.json");
        		} else {
        			buildGraph("./dist/html/familyZoomChart/flare.json");
        		}
        	}
			
			var margin = 30
			, diameter = 650;

			var color = d3.scale.linear()
				.domain([-1, 5])
				.range(["hsl(204,80%,80%)", "hsl(204,40%,30%)"])
				.interpolate(d3.interpolateHcl);

			var pack = d3.layout.pack()
				.padding(2)
				.size([diameter - margin, diameter - margin])
				.value(function(d) { return d.size; })

		

function buildGraph( url ) {		

	svg = d3.select(".zoom-chart-wrapper").append("svg")
				.attr("width", diameter)
				.attr("height", diameter)
				// .attr("margin-left", 200px)
				.append("g")
				.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

			d3.json(url, function(error, root) {
				if (error) throw error;

				var focus = root,
				nodes = pack.nodes(root),
				view;

				var circle = svg.selectAll("circle")
					.data(nodes)
					.enter().append("circle")
					.attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
					.style("fill", function(d) { return d.children ? color(d.depth) : null; })
					.on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

				var text = svg.selectAll("text")
					.data(nodes)
					.enter().append("text")
					.attr("class", "label")
					.attr("font-size", "1.5em")
					.style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
					.style("display", function(d) { return d.parent === root ? "inline" : "none"; })
					.text(function(d) { return d.name; });

				var node = svg.selectAll("circle,text");

				d3.select(".zoom-chart-wrapper")
					.on("click", function() { zoom(root); });

				zoomTo([root.x, root.y, root.r * 2 + margin]);

				function zoom(d) {
					var focus0 = focus; focus = d;

					var transition = d3.transition()
						.duration(d3.event.altKey ? 7500 : 750)
						.tween("zoom", function(d) {
							var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
							return function(t) { zoomTo(i(t)); 
						};
				});

				transition.selectAll("text")
					.filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
					.style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
					.each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
					.each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
					}

				function zoomTo(v) {
					var k = diameter / v[2]; view = v;
					node.attr("transform", function(d) { 
						return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; 
					});
					circle.attr("r", function(d) 
						{ return d.r * k; 
					});
				}
			});
}

buildGraph("./dist/html/familyZoomChart/flare.json");

			d3.select(self.frameElement).style("height", diameter + "px");

			var maleBoxIsChecked = false;
			var femaleBoxIsChecked = false;

			d3.select("#zoom-male")
                .on('change', function(d, i) {
                    svg.selectAll('.node--leaf')
                    	.style('fill', function(d) {
                    		if ( !maleBoxIsChecked && d.gender === "male" ) {
                    			return '#a8e0f9'
                    		} else if ( d.gender === "male" ) {
                				return "white";
                    		}
                    		if ( femaleBoxIsChecked && d.gender === "female" ) {
                    			// return 'rgba(237, 30, 121, 0.9)'
                    			return '#f8d4e3';
                    		} else if ( !femaleBoxIsChecked && d.gender === "female" ) {
                				return "white";
                    		}
                    	});
                		maleBoxIsChecked = !maleBoxIsChecked;

                });

            d3.select("#zoom-female")
                .on('change', function(d, i) {
                    svg.selectAll('.node--leaf')
                    	.style('fill', function(d) {
                    		if ( !femaleBoxIsChecked && d.gender === "female" ) {
                    			// return 'rgba(237, 30, 121, 0.9)'
                    			return '#f8d4e3';
                    		} else if ( d.gender === "female" ) {
                				return "white";
                    		}

                    		if ( maleBoxIsChecked && d.gender === "male" ) {
                    			return '#a8e0f9'
                    		} else if ( !maleBoxIsChecked && d.gender === "male" ) {
                				return "white";
                    		}
                    	});
                		femaleBoxIsChecked = !femaleBoxIsChecked;

                });

   //          d3.select("#zoom-female")
   //              .on('change', function(d, i) {
   //                  selectMonthJan(0);
   //              })
		}
	};
});