angular.module('app').controller('namesChartCtrl', function ($scope, familyService, authService, namesService) {



	// $scope.getStats = function (family, sliderValue, gender) {
	// 	$scope.stats = lifespanService.getStats(family, sliderValue, gender);
	// 	console.log("stats:", $scope.stats);	
	// };
	

	
	// $scope.gender = "Both";
	
	// $scope.cleanData = function (familyData) {
	// 	return lifespanService.getCleanData(familyData);	
	// };


	$scope.getNames = function (familyData) {
		return namesService.getNames(familyData);
	};
	
	$scope.countNames = function (familyData) {
		return namesService.countNames(familyData);
	}
	

	
	
	
	// //Get authed user
	// var getAuthedUser = function () {
	// 	authService.getAuthedUser().then(function (data) {
	// 		$scope.authedUser = data;
	// 		getAncestryAndChildren();
	// 	});
	// };
	// getAuthedUser();

	// $scope.combinedFamily = [];
	
	// //Get ancestry and children
	
	// var getAncestryAndChildren = function () {
	// 	familyService.getAncestryAndChildren($scope.authedUser.personId, $scope.authedUser.accessToken).then(function (data) {
	// 		$scope.family= data;	
	// 		console.log(data);
	// 	});
	// };


	
	

// 	$scope.lifespanYears = [];
// 	$scope.lifespanTotalsArray = [];
// 	$scope.personNumbers = [];

// 	$scope.test = [$scope.testFamily[0]];	

// 	$scope.getLifespans = function () {
// 		console.log("test", $scope.test);
// 		$scope.testFamily.forEach(function (person) {
// 			person.lifespanArray = person.lifespan.split("-");
// 			person.lifespanArray[0] = Number(person.lifespanArray[0]);
// 			person.lifespanArray[1] = Number(person.lifespanArray[1]);

// 			if (Number.isInteger(person.lifespanArray[0]) && Number.isInteger(person.lifespanArray[1])) {
// 				// $scope.cleanData.push(person);
// 				person.lifespanTotal = Number(person.lifespanArray[1]) - Number(person.lifespanArray[0]);
// 				$scope.lifespanTotalsArray.push(person.lifespanTotal);
// 				$scope.lifespanYears.push(person.lifespanArray[0]);

// console.log("asc #", person.ascendancyNumber);

// 				if (!person.ascendancyNumber) {
// 					console.log("undefined person", person);
// 				} 
// 				if (person.ascendancyNumber) {
// 					console.log("if");
// 					person.ascendancyNumber = person.ascendancyNumber.toString().split("-S");
// 					person.ascendancyNumber = Number(person.ascendancyNumber[0]);
// 					$scope.personNumbers.push(person.ascendancyNumber);
// 				} else {
// 					console.log("else");
// 					console.log("dsc", person.descendancyNumber);
// 					person.descendancyNumber = person.descendancyNumber.toString().split("-S");
// 					person.descendancyNumber = Number(person.descendancyNumber[0]);
// 					$scope.personNumbers.push(person.descendancyNumber);
// 				}
// 				$scope.cleanData.push(person);
// 			}

			
// 		});


// 		function compare(a, b) {
// 			if (a.lifespanArray[0] < b.lifespanArray[0])
// 				return -1;
// 			else if (a.lifespanArray[0] > b.lifespanArray[0])
// 				return 1;
// 			else
// 				return 0;
// 		}

// 		$scope.cleanData.sort(compare);



// 		function compareNumbers(a, b) {
// 			return a - b;
// 		}


// 		$scope.sortedLifespanYears = $scope.lifespanYears.sort(compareNumbers);
// 		$scope.maxYear = $scope.sortedLifespanYears[$scope.sortedLifespanYears.length - 1];
// 		$scope.minYear = $scope.sortedLifespanYears[0];

// 		$scope.lifespanTotalsArray = $scope.lifespanTotalsArray.sort(compareNumbers);
// 		$scope.maxLifespan = $scope.lifespanTotalsArray[$scope.lifespanTotalsArray.length - 1];
// 		$scope.minLifespan = $scope.lifespanTotalsArray[0];



		
// 		$scope.sortedPersonNumbers = $scope.personNumbers.sort(compareNumbers);

// 		$scope.maxPersonNumber = $scope.sortedPersonNumbers[$scope.sortedPersonNumbers.length - 1];
// 		$scope.minPersonNumber = $scope.sortedPersonNumbers[0];

// 	};


// 	$scope.getLifespans($scope.testFamily);
	
// 	console.log("clean data", $scope.cleanData);
	
	// console.log("test people", $scope.testPeople);
	// console.log("test numbers", $scope.testNumbers);	
	// console.log("sortedlifespans", $scope.sortedLifespanYears);
	// console.log("unsorted numbers", $scope.personNumbers);
	// console.log("sorted numbers", $scope.sortedPersonNumbers);
	// console.log("min persn", $scope.minPersonNumber);
	// console.log("max persn", $scope.maxPersonNumber);
});