angular.module('app').service('lifespanService', ['$q', '$http', lifespanService]);


function lifespanService($q, $http) {


	var cleanData = []
		, lifespanYears = []
		, lifespanTotalsArray = []
		, personNumbers = []
		, sortedPersonNumbers;


	function compare(a, b) {
		if (a.lifespanArray[0] < b.lifespanArray[0])
			return -1;
		else if (a.lifespanArray[0] > b.lifespanArray[0])
			return 1;
		else
			return 0;
	}

	function compareNumbers(a, b) {
		return a - b;
	}


	// create new stats
		
	this.getStats = function (familyArray, sliderValue, gender) {
		console.log("gender", gender);
		var includedStatsPeople = [];
		var avgLifespanArray = [];
		var avgLifespan;
		var maxLifespan;
		var minLifespan;
		var arrayToCheck = familyArray;
		
		if (gender === "Female") {
			console.log("female");
			arrayToCheck =  _.filter(familyArray, (person) => person.gender === "Female");
		} else if (gender === "Male") {
			arrayToCheck =  _.filter(familyArray, (person) => person.gender === "Male");
		}
		
		arrayToCheck.forEach(function (person) {
			person.lifespanArray = person.lifespan.split("-");
			person.lifespanArray[0] = Number(person.lifespanArray[0]);
			person.lifespanArray[1] = Number(person.lifespanArray[1]);

			if (Number.isInteger(person.lifespanArray[0]) && Number.isInteger(person.lifespanArray[1]) && person.lifespanArray[0] <= sliderValue) {
				person.lifespanTotal = Number(person.lifespanArray[1]) - Number(person.lifespanArray[0]);
				includedStatsPeople.push(person);
				if (person.lifespanTotal >= 0) {
					avgLifespanArray.push(person.lifespanTotal);
					// lifespanYears.push(person.lifespanArray[0]);
					
					//Calculate range of lifespans
					avgLifespanArray = avgLifespanArray.sort(compareNumbers);
					maxLifespan = avgLifespanArray[avgLifespanArray.length - 1];
					minLifespan = avgLifespanArray[0];

					var sum = avgLifespanArray.reduce(function (a, b) {
						return a + b;
					});
					avgLifespan = Math.round(sum / (avgLifespanArray.length));
				}


			};
		});

		var stats = {
			maxLifespan: maxLifespan,
			minLifespan: minLifespan,
			avgLifespan: avgLifespan,
		};

		return stats;
	};

	this.getCleanData = function (familyData) {
		familyData.forEach(function (person) {
				
			//Lifespan Ranges for Axis
				
			person.lifespanArray = person.lifespan.split("-");
			person.lifespanArray[0] = Number(person.lifespanArray[0]);
			person.lifespanArray[1] = Number(person.lifespanArray[1]);
			if (Number.isInteger(person.lifespanArray[0]) && Number.isInteger(person.lifespanArray[1])) {
				person.lifespanTotal = Number(person.lifespanArray[1]) - Number(person.lifespanArray[0]);
				if (person.lifespanTotal >= 0) {
					lifespanTotalsArray.push(person.lifespanTotal);
					lifespanYears.push(person.lifespanArray[0]);
					
					
					//Generations (clean ascendancy #s)
					if (person.ascendancyNumber) {

						person.ascendancyNumber = person.ascendancyNumber.toString().split("-S");
						person.ascendancyNumber = Number(person.ascendancyNumber[0]);
						personNumbers.push(person.ascendancyNumber);
					} else {
						person.descendancyNumber = person.descendancyNumber.toString().split("-S");
						person.descendancyNumber = Number(person.descendancyNumber[0]);
						personNumbers.push(person.descendancyNumber);
					}
					cleanData.push(person);

				}
			}
		});

		//Order by birth year
		cleanData.sort(compare);

		//Order birth years
		var sortedLifespanYears = lifespanYears.sort(compareNumbers);
			

		//Calculate range of data
		lifespanTotalsArray = lifespanTotalsArray.sort(compareNumbers);
		var maxYear = sortedLifespanYears[sortedLifespanYears.length - 1];
		var minYear = sortedLifespanYears[0];
			
		//Calculate range of lifespans
		var maxLifespan = lifespanTotalsArray[lifespanTotalsArray.length - 1];
		var minLifespan = lifespanTotalsArray[0];

		//Calculate avg lifespan
		var sum = lifespanTotalsArray.reduce(function (a, b) {
			return a + b;
		});
		var avgLifespan = Math.round(sum / (lifespanTotalsArray.length));
		
		//Order generation numbers
		sortedPersonNumbers = personNumbers.sort(compareNumbers);
		var maxPersonNumber = sortedPersonNumbers[sortedPersonNumbers.length - 1];
		var minPersonNumber = sortedPersonNumbers[0];



		var myData = {
			cleanData: cleanData,
			lifespanYears: lifespanYears,
			lifespanTotalsArray: lifespanTotalsArray,
			personNumbers: personNumbers,
			sortedLifespanYears: sortedLifespanYears,
			maxYear: maxYear,
			minYear: minYear,
			maxLifespan: maxLifespan,
			minLifespan: minLifespan,
			avgLifespan: avgLifespan,
			sortedPersonNumbers: sortedPersonNumbers,
			maxPersonNumber: maxPersonNumber,
			minPersonNumber: minPersonNumber
		};
		console.log("my data", myData);
		return myData;
	};








};






























	
	



