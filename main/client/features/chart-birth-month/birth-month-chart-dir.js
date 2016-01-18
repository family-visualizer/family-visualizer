angular.module('app').directive('birthMonth', birthMonthService => {

    return {
          restrict: 'EA'
        , templateUrl: './dist/html/chart-birth-month/birth-month-chart-template.html'
        , controller: 'birthMonthCtrl'
        , link(scope, elem, attrs) {

            //load in data from Service
            var dataset = birthMonthService.dataset;

            //set height, width, etc
            var width = 720,
                height = 640,
                cwidth = 42;

            //set different colors
            var color = d3.scale.ordinal()
                .range(["#01A2A6", "#29D9C2", "#BDF271", "#5E0042", "#005869", "#00856A", "#8DB500", "#C22121", "#047878", "#F57336", "#FFB733", "#8D1C96"]);

            //allow d3 to set angles of pie
            var pie = d3.layout.pie()
                .sort(null);
            var arc = d3.svg.arc();

            //Create SVG element
            var svg = d3.select("#svg").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
                .attr("class", "graph-main")

            //add data and classes to all 'g' elements
            var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g").attr("class", function(d, i) {
                return "genClass" + i;
            });


            var path = gs.selectAll("path")
                .data(function(d) {
                    return pie(d);
                })
                .enter().append("path")
                .attr("fill", function(d, i) {
                    return color(i);
                })
                .attr("class", function(d, i) {
                    return "class" + i;
                })
                .on('click', function(d, i) {
                    svg.selectAll(".class" + i).classed("selected", true)
                })
                .attr("d", function(d, i, j) {
                    return arc.innerRadius(10 + cwidth * j).outerRadius(cwidth * (j + 1))(d);
                });


            path.classed("main", true);

            //MONTH SELECTORS MONTH SELECTORS MONTH SELECTORS
            //MONTH SELECTORS MONTH SELECTORS MONTH SELECTORS
            //MONTH SELECTORS MONTH SELECTORS MONTH SELECTORS
            //MONTH SELECTORS MONTH SELECTORS MONTH SELECTORS
            //MONTH SELECTORS MONTH SELECTORS MONTH SELECTORS

            var   janSelector = false
                , febSelector = false
                , marSelector = false
                , aprSelector = false
                , maySelector = false
                , junSelector = false
                , julSelector = false
                , augSelector = false
                , sepSelector = false
                , octSelector = false
                , novSelector = false
                , decSelector = false;

            //Check different Selectors
            d3.select("#january")
                .on('change', function(d, i) {
                    selectMonthJan(0);
                })

            d3.select("#february")
                .on('change', function(d, i) {
                    selectMonthFeb(1);
                })

            d3.select("#march")
                .on('change', function(d, i) {
                    selectMonthMar(2);
                })

            d3.select("#april")
                .on('change', function(d, i) {
                    selectMonthApr(3);
                })

            d3.select("#may")
                .on('change', function(d, i) {
                    selectMonthMay(4);
                })


            d3.select("#june")
                .on('change', function(d, i) {
                    selectMonthJun(5);
                })

            d3.select("#july")
                .on('change', function(d, i) {
                    selectMonthJul(6);
                })

            d3.select("#august")
                .on('change', function(d, i) {
                    selectMonthAug(7);
                })

            d3.select("#september")
                .on('change', function(d, i) {
                    selectMonthSep(8);
                })

            d3.select("#october")
                .on('change', function(d, i) {
                    selectMonthOct(9);
                })

            d3.select("#november")
                .on('change', function(d, i) {
                    selectMonthNov(10);
                })

            d3.select("#december")
                .on('change', function(d, i) {
                    selectMonthDec(11);
                })



            //Alter Correct arcs based on selection
            function selectMonthJan(i) {
                if (!janSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
                    janSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
                    janSelector = false;
                }
            }

            function selectMonthFeb(i) {
                if (!febSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    febSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    febSelector = false;
                }
            }

            function selectMonthMar(i) {
                if (!marSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    marSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    marSelector = false;
                }
            }

            function selectMonthApr(i) {
                if (!aprSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    aprSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    aprSelector = false;
                }
            }

            function selectMonthMay(i) {
                if (!maySelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    maySelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    maySelector = false;
                }
            }

            function selectMonthJun(i) {
                if (!junSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    junSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    junSelector = false;
                }
            }

            function selectMonthJul(i) {
                if (!julSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    julSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    julSelector = false;
                }
            }

            function selectMonthAug(i) {
                if (!augSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    augSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    augSelector = false;
                }
            }

            function selectMonthSep(i) {
                if (!sepSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    sepSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    sepSelector = false;
                }
            }

            function selectMonthOct(i) {
                if (!octSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    octSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    octSelector = false;
                }
            }

            function selectMonthNov(i) {
                if (!novSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    novSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    novSelector = false;
                }
            }

            function selectMonthDec(i) {
                if (!decSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false);
                    decSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true);
                    decSelector = false;
                }
            }

            d3.selectAll("path")
                .on("mouseover", darken)
                .on("mouseleave", lighten);

            function darken() {
                d3.select(this)
                    .classed("selected", true);
            };

            function lighten() {
                d3.select(this)
                    .classed("selected", false);
            }


            //GENERATION SELECTORS
            //GENERATION SELECTORS
            //GENERATION SELECTORS
            //GENERATION SELECTORS
            //GENERATION SELECTORS

            var genSelector0 = false,
                genSelector1 = false,
                genSelector2 = false,
                genSelector3 = false,
                genSelector4 = false,
                genSelector5 = false,
                genSelector6 = false,
                genSelector7 = false;

            d3.select("#gen1")
                .on('change', function(d, i) {
                    selectGeneration0(0);
                })

            function selectGeneration0(i) {

                if (!genSelector0) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector0 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector0 = false;
                }
            }

            d3.select("#gen2")
                .on('change', function(d, i) {
                    selectGeneration1(1);
                })

            function selectGeneration1(i) {
                if (!genSelector1) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector1 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector1 = false;
                }
            }


            d3.select("#gen3")
                .on('change', function(d, i) {
                    selectGeneration2(2);
                })

            function selectGeneration2(i) {
                if (!genSelector2) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector2 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector2 = false;
                }
            }

            d3.select("#gen4")
                .on('change', function(d, i) {
                    selectGeneration3(3);
                })

            function selectGeneration3(i) {
                if (!genSelector3) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector3 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector3 = false;
                }
            }

            d3.select("#gen5")
                .on('change', function(d, i) {
                    selectGeneration4(4);
                })

            function selectGeneration4(i) {
                if (!genSelector4) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector4 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector4 = false;
                }
            }

            d3.select("#gen6")
                .on('change', function(d, i) {
                    selectGeneration5(5);
                })

            function selectGeneration5(i) {
                if (!genSelector5) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector5 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector5 = false;
                }
            }

            d3.select("#gen7")
                .on('change', function(d, i) {
                    selectGeneration6(6);
                })

            function selectGeneration6(i) {
                if (!genSelector6) {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", true)
                        .classed("main", false)
                    genSelector6 = true;
                } else {
                    svg.selectAll('.genClass' + i)
                        .selectAll("path")
                        .classed("selected", false)
                        .classed("main", true)
                    genSelector6 = false;
                }
            }

        }
    }
});
