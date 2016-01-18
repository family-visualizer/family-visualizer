angular.module('app').directive('namesChart', () => {
// $parse, $window
    return {
		restrict: 'EA'
        , templateUrl: './dist/html/namesChart/namesChartDirective/namesChartTemp.html'
        , controller: 'namesChartCtrl'
        , link(scope, elem, attrs) {
			
			
			
			
			
			var family;
			
			function updateFamily (familyObject) {
				family = scope.getNames(familyObject);
				return family;	
			};
			
			updateFamily(scope.testFamily);
			
			var height = 500;
			var width = 850;
			
			
			d3.layout.cloud().size([width - 20, height - 20])
            .words(family)
            .rotate(0)
            .fontSize(function(d) { return d.size; })
            .on("end", draw)
            .start();

			
			
			function draw(words) {
        	d3.select(".namesChart").append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("class", "wordcloud")
                .append("g")
                .attr("transform", "translate(320,200)")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .style("font-size", function(d) { return d.size + "px"; })
                // .style("fill", function(d, i) { return color(i); })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.name; });
    }
			
			var countedNames =
				_.chain(family)
				.map(function (person) { return person.name; })
				// .flatten()
				.reduce(function (counts, word) {
					counts[word] = (counts[word] || 0) + 1;
					return counts;
				}, {})
				.value();
	



			
		}
	};
});
