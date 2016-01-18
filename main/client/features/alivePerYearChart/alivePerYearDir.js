angular.module('app').directive('aliveChartDir', function (alivePerYearService) {

    return {
          restrict: "E"
        , templateUrl: "./dist/html/alivePerYearChart/alivePerYearTmpl.html"
        , controller: "aliveChartCtrl"
        , link(scope, element, attrs) {
			
			// var minAndMax = alivePerYearService.findMinAndMax(alivePerYearService.famSearchDataset);
			// console.log(minAndMax);
var data = [
 
  {
    date: "April 2000",
    alive:50,
	married: false
  },
  {
    date: "March 2000",
    alive:45,
	married: false
  },
  {
    date:"Mar 2000",
    alive:58,
	married: false
  },
  {
    date:"Apr 2000",
    alive:43
  },
  {
    date:"May 2000",
    alive:60
  },
  {
    date:"Jun 2000",
    alive:60
  },
  {
    date:"Jul 2000",
    alive:83
  },
  {
    date:"Aug 2000",
    alive:68
  },
  {
    date:"Sep 2000",
    alive:51
  },
  {
    date:"Oct 2000",
    alive:40
  },
  {
    date:"Nov 2000",
    alive:95
  },
  {
    date:"Dec 2000",
    alive:28
  },
  {
    date:"Jan 2001",
    alive:1
  },
  {
    date:"Feb 2001",
    alive:94
  },
  {
    date:"Mar 2001",
    alive:33
  },
  {
    date:"Apr 2001",
    alive:46
  },
  {
    date:"May 2001",
    alive:82
  },
  {
    date:"Jun 2001",
    alive:38
  },
  {
    date:"Jul 2001",
    alive:23
  },
  {
    date:"Aug 2001",
    alive:58
  },
  {
    date:"Sep 2001",
    alive:94
  },
  {
    date:"Oct 2001",
    alive:78
  },
  {
    date:"Nov 2001",
    alive:45
  },
  {
    date:"Dec 2001",
    alive:8
  },
  {
    date:"Jan 2002",
    alive:20
  },
  {
    date:"Feb 2002",
    alive:73
  },
  {
    date:"Mar 2002",
    alive:39
  },
  {
    date:"Apr 2002",
    alive:92
  },
  {
    date:"May 2002",
    alive:14
  },
  {
    date:"Jun 2002",
    alive:82
  },
  {
    date:"Jul 2002",
    alive:62
  },
  {
    date:"Aug 2002",
    alive:7
  },
  {
    date:"Sep 2002",
    alive:28
  },
  {
    date:"Oct 2002",
    alive:76
  },
  {
    date:"Nov 2002",
    alive:31
  },
  {
    date:"Dec 2002",
    alive:82
  },
  {
    date:"Jan 2003",
    alive:70
  },
  {
    date:"Feb 2003",
    alive:15
  },
  {
    date:"Mar 2003",
    alive:18
  },
  {
    date:"Apr 2003",
    alive:92
  },
  {
    date:"May 2003",
    alive:59
  },
  {
    date:"Jun 2003",
    alive:53
  },
  {
    date:"Jul 2003",
    alive:31
  },
  {
    date:"Aug 2003",
    alive:1
  },
  {
    date:"Sep 2003",
    alive:97
  },
  {
    date:"Oct 2003",
    alive:71
  },
  {
    date:"Nov 2003",
    alive:23
  },
  {
    date:"Dec 2003",
    alive:92
  },
  {
    date:"Jan 2004",
    alive:13
  },
  {
    date:"Feb 2004",
    alive:94
  },
  {
    date:"Mar 2004",
    alive:21
  },
  {
    date:"Apr 2004",
    alive:33
  },
  {
    date:"May 2004",
    alive:68
  },
  {
    date:"Jun 2004",
    alive:84
  },
  {
    date:"Jul 2004",
    alive:72
  },
  {
    date:"Aug 2004",
    alive:24
  },
  {
    date:"Sep 2004",
    alive:58
  },
  {
    date:"Oct 2004",
    alive:23
  },
  {
    date:"Nov 2004",
    alive:82
  },
  {
    date:"Dec 2004",
    alive:92
  },
  {
    date:"Jan 2005",
    alive:27
  },
  {
    date:"Feb 2005",
    alive:63
  },
  {
    date:"Mar 2005",
    alive:59
  },
  {
    date:"Apr 2005",
    alive:85
  },
  {
    date:"May 2005",
    alive:53
  },
  {
    date:"Jun 2005",
    alive:33
  },
  {
    date:"Jul 2005",
    alive:18
  },
  {
    date:"Aug 2005",
    alive:33
  },
  {
    date:"Sep 2005",
    alive:81
  },
  {
    date:"Oct 2005",
    alive:1
  },
  {
    date:"Nov 2005",
    alive:48
  },
  {
    date:"Dec 2005",
    alive:29
  },
  {
    date:"Jan 2006",
    alive:28
  },
  {
    date:"Feb 2006",
    alive:66
  },
  {
    date:"Mar 2006",
    alive:87
  },
  {
    date:"Apr 2006",
    alive:61
  },
  {
    date:"May 2006",
    alive:9
  },
  {
    date:"Jun 2006",
    alive:23
  },
  {
    date:"Jul 2006",
    alive:66
  },
  {
    date:"Aug 2006",
    alive:82
  },
  {
    date:"Sep 2006",
    alive:85
  },
  {
    date:"Oct 2006",
    alive:94
  },
  {
    date:"Nov 2006",
    alive:63
  },
  {
    date:"Dec 2006",
    alive:33
  },
  {
    date:"Jan 2007",
    alive:24
  },
  {
    date:"Feb 2007",
    alive:82
  },
  {
    date:"Mar 2007",
    alive:86
  },
  {
    date:"Apr 2007",
    alive:37
  },
  {
    date:"May 2007",
    alive:62
  },
  {
    date:"Jun 2007",
    alive:35
  },
  {
    date:"Jul 2007",
    alive:27
  },
  {
    date:"Aug 2007",
    alive:99
  },
  {
    date:"Sep 2007",
    alive:75
  },
  {
    date:"Oct 2007",
    alive:38
  },
  {
    date:"Nov 2007",
    alive:14
  },
  {
    date:"Dec 2007",
    alive:36
  },
  {
    date:"Jan 2008",
    alive:55
  },
  {
    date:"Feb 2008",
    alive:63
  },
  {
    date:"Mar 2008",
    alive:73
  },
  {
    date:"Apr 2008",
    alive:59
  },
  {
    date:"May 2008",
    alive:38
  },
  {
    date:"Jun 2008",
    alive:80
  },
  {
    date:"Jul 2008",
    alive:38
  },
  {
    date:"Aug 2008",
    alive:83
  },
  {
    date:"Sep 2008",
    alive:36
  },
  {
    date:"Oct 2008",
    alive:75
  },
  {
    date:"Nov 2008",
    alive:24
  },
  {
    date:"Dec 2008",
    alive:25
  },
  {
    date:"Jan 2009",
    alive:88
  },
  {
    date:"Feb 2009",
    alive:9
  },
  {
    date:"Mar 2009",
    alive:87
  },
  {
    date:"Apr 2009",
    alive:81
  },
  {
    date:"May 2009",
    alive:14
  },
  {
    date:"Jun 2009",
    alive:32
  },
  {
    date:"Jul 2009",
    alive:48
  },
  {
    date:"Aug 2009",
    alive:62
  },
  {
    date:"Sep 2009",
    alive:8
  },
  {
    date:"Oct 2009",
    alive:19
  },
  {
    date:"Nov 2009",
    alive:63
  },
  {
    date:"Dec 2009",
    alive:13
  },
  {
    date:"Jan 2010",
    alive:87
  },
  {
    date:"Feb 2010",
    alive:49
  },
  {
    date:"Mar 2010",
    alive:45
  }
];
data.forEach(function( item ) {
  item.date = new Date(item.date);
});

var margin = {top: 10, right: 10, bottom: 100, left: 40},
    margin2 = {top: 430, right: 10, bottom: 20, left: 40},
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
    .interpolate("monotone")
    .x(function(d) { return x(d.date); })
    .y0(height)
    .y1(function(d) { return y(d.alive); });

var area2 = d3.svg.area()
    .interpolate("monotone")
    .x(function(d) { return x2(d.date); })
    .y0(height2)
    .y1(function(d) { return y2(d.alive); });

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


	console.log("this is data", data);
  x.domain(d3.extent(data.map(function(d) { return d.date; })));
  y.domain([0, d3.max(data.map(function(d) { return d.alive; }))]);
  x2.domain(x.domain());
  y2.domain(y.domain());






  focus.append("path")
      .datum(data)
      .attr("class", "alivearea")
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

			
        }
    }

});