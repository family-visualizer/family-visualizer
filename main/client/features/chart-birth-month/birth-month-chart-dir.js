angular.module('app').directive('birthMonth', birthMonthService => {

    return {
        restrict: 'EA',
        templateUrl: './dist/html/chart-birth-month/birth-month-chart-template.html',
        controller: 'birthMonthCtrl',
        link(scope, elem, attrs) {


			var dataset = birthMonthService.dataset;


			console.log('XXXthis is dataset', dataset);
            // var dataset = {
            //   January: [12, 0, 0, 0, 0],
            //   February: [10, 10, 10, 10, 10],
            //   March: [10, 0, 10, 10, 18],
            //   April: [10, 15, 10, 10, 10],
            //   May: [10, 15, 11, 102, 19],
            // };
			var totalBirthsPerMonthPreObject = {
				  january: 0
				, february: 0
				, march: 0
				, april: 0
				, may: 0
				, june: 0
				, july: 0
				, august: 0
				, september: 0
				, october: 0
				, november: 0
				, december: 0
			};

			var bigDog = 0;
			function addTotalBirthsPerMonth(dataset, t) {
				for (var key in dataset) {
					if(dataset.hasOwnProperty(key)) {
						t.january += dataset[key][0];
						t.february += dataset[key][1];
						t.march += dataset[key][2];
						t.april += dataset[key][3];
						t.may += dataset[key][4];
						t.june += dataset[key][5];
						t.july += dataset[key][6];
						t.august += dataset[key][7];
						t.september += dataset[key][8];
						t.october += dataset[key][9];
						t.november += dataset[key][10];
						t.december += dataset[key][11];
					}
				}
				return t;
			}

			var totalBirthsPerMonth = addTotalBirthsPerMonth(dataset, totalBirthsPerMonthPreObject);
			console.log("this is totalBirthsPerMonth", totalBirthsPerMonth);

			// birthMonthService.totalBirthsPerMonth = totalBirthsPerMonth;

            var width = 860,
                height = 900,
                cwidth = 45;


            var color = d3.scale.ordinal()
                .range(["#01A2A6", "#29D9C2", "#BDF271", "#5E0042", "#005869", "#00856A", "#8DB500", "#C22121", "#047878", "#F57336", "#FFB733", "#8D1C96"]);

            var pie = d3.layout.pie()
                .sort(null);


            var arc = d3.svg.arc();

            var svg = d3.select("body").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
				.attr("class", "graph-main")


            var gs = svg.selectAll("g").data(d3.values(dataset)).enter().append("g").attr("class", function(d, i) {return "genClass" + i; });

            console.log("this is gs", gs);

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

            // d3.select("#january")
            // 	.on('change', function(d, i) {
            // 		svg.selectAll(".class1").classed("selected", true)
            // 		.style("opacity", 1)
            // 		console.log("it's working, it's working");
            // 	})

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




            function selectMonthJan(i) {
                if (!janSelector) {
                    svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
                        // .style("opacity", 1);
                    janSelector = true;
                } else {
                    svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
                        // .style("opacity", 0.2);
                    janSelector = false;
                }
            }

			function selectMonthFeb(i) {
				if (!febSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					febSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					febSelector = false;
				}
			}

			function selectMonthMar(i) {
				if (!marSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					marSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					marSelector = false;
				}
			}

			function selectMonthApr(i) {
				if (!aprSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					aprSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					aprSelector = false;
				}
			}
			function selectMonthMay(i) {
				if (!maySelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					maySelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					maySelector = false;
				}
			}
			function selectMonthJun(i) {
				if (!junSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					junSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					junSelector = false;
				}
			}

			function selectMonthJul(i) {
				if (!julSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					julSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					julSelector = false;
				}
			}

			function selectMonthAug(i) {
				if (!augSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					augSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					augSelector = false;
				}
			}

			function selectMonthSep(i) {
				if (!sepSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					sepSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					sepSelector = false;
				}
			}

			function selectMonthOct(i) {
				if (!octSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					octSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					octSelector = false;
				}
			}

			function selectMonthNov(i) {
				if (!novSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					novSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					novSelector = false;
				}
			}

			function selectMonthDec(i) {
				if (!decSelector) {
					svg.selectAll('.class' + i).classed("selected", true).classed("main", false)
						// .style("opacity", 1);
					decSelector = true;
				} else {
					svg.selectAll('.class' + i).classed("selected", false).classed("main", true)
						// .style("opacity", 0.2);
					decSelector = false;
				}
			}

            // d3.selectAll("path")
            //     .on("mouseover", darken)
            //     .on("mouseleave", lighten);

            // d3.selectAll("path")
            //     .style("opacity", 0.2);
			//
            // function darken() {
            //     d3.select(this)
            //         .style("opacity", 1);
            // };
			//
            // function lighten() {
            //     d3.select(this)
            //         .style("opacity", 0.2);
            // }


			//GENERATION SELECTORS
			//GENERATION SELECTORS
			//GENERATION SELECTORS
			//GENERATION SELECTORS
			//GENERATION SELECTORS

			var   genSelector0 = false
				, genSelector1 = false
				, genSelector2 = false
				, genSelector3 = false
				, genSelector4 = false
				, genSelector5 = false
				, genSelector6 = false
				, genSelector7 = false;

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

			d3.select("#gen8")
                .on('change', function(d, i) {
                    selectGeneration7(7);
                })

			function selectGeneration7(i) {
				if (!genSelector7) {
					svg.selectAll('.genClass' + i)
						.selectAll("path")
						.classed("selected", true)
						.classed("main", false)
					genSelector7 = true;
				} else {
					svg.selectAll('.genClass' + i)
						.selectAll("path")
						.classed("selected", false)
						.classed("main", true)
					genSelector7 = false;
				}
			}



        }
    }

});
