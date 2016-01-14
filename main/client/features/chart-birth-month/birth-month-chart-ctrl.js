// angular.module('app').controller('birthMonthCtrl', function($scope, $rootScope) {
//
//  })
//

var data = [
  {
      personId:"KWZK-SJV",
      name:"Rufus B. Humphrey",
      gender:"Male",
      lifespan:"1814-1890",
      birthDate:"5 September 1814",
      birthPlace: "Flemingsburg, Fleming, Kentucky, United States",
      deathDate: "5 July 1890",
      deathPlace: "Rowan, Kentucky, United States",
      marriagePlace: "Lawrence, Kentucky, United States",
      marriageDate: "5 March 1834",
      ascendancyNumber: 322
}
   ];

console.log("data[0]", data[0].ascendancyNumber);

function addBirthMonthToRelative (bigDataArray) {
	console.log("this is bigDataArray", bigDataArray);
	var birthMonth;
	for(var i = 0; i < bigDataArray.length; i++) {
		var birthDateArray = bigDataArray[i].birthDate.split(' ');
		console.log("this is birthDateArray", birthDateArray);
		if(birthDateArray.length === 3) {
			var birthMonth = birthDateArray[1].toLowerCase();
		} else if (birthDate.length === 2) {
			var birthMonth = birthDateArray[0].toLowerCase();
		} else {
			var birthMonth = null;
		}
		console.log("this is birthMonth", birthMonth);
		bigDataArray[i]["birthMonth"] = birthMonth;
	}
	return bigDataArray
}

function addGenerationNumberToRelative (bigDataArray) {
	for(var i = 0; i < bigDataArray.length; i++) {
		if(bigDataArray[i].ascendancyNumber >= 2 && bigDataArray.ascendancyNumber < 4) {
			bigDataArray[i]["generation"] = 2;
		}

		if(bigDataArray[i].ascendancyNumber >= 4 && bigDataArray[i].ascendancyNumber < 8) {
			bigDataArray[i]["generation"] = 3;
		}

		if(bigDataArray[i].ascendancyNumber >= 8 && bigDataArray[i].ascendancyNumber < 16) {
			bigDataArray[i]["generation"] = 4;
		}

		if(bigDataArray[i].ascendancyNumber >= 16 && bigDataArray[i].ascendancyNumber < 32) {
			bigDataArray[i]["generation"] = 5;
		}

		if(bigDataArray[i].ascendancyNumber >= 32 && bigDataArray[i].ascendancyNumber < 64) {
			bigDataArray[i]["generation"] = 6;
		}

		if(bigDataArray[i].ascendancyNumber >= 64 && bigDataArray[i].ascendancyNumber < 128) {
			bigDataArray[i]["generation"] = 7;
		}

		if(bigDataArray[i].ascendancyNumber >= 128 && bigDataArray[i].ascendancyNumber < 256) {
			bigDataArray[i]["generation"] = 8;
		}

		if(bigDataArray[i].ascendancyNumber >= 256 && bigDataArray[i].ascendancyNumber < 512) {
			bigDataArray[i]["generation"] = 9;
		}
	}
	return bigDataArray
}

console.log("this is addGenerationNumberToRelative", addGenerationNumberToRelative(data));

var dataset = {
	january: [0, 1, 2, 3, 4, 5, 6, 7]
};

console.log("this is dataset.January", dataset.january);
console.log("this is dataset.january[1]", dataset.january[1]);

dataset[bigDataArray.birthMonth][generation] ++

// var data = [
//   {
//       personId:"KWZK-SJV",
//       name:"Rufus B. Humphrey",
//       gender:"Male",
//       lifespan:"1814-1890",
//       birthDate:"5 September 1814",
//       birthPlace: "Flemingsburg, Fleming, Kentucky, United States",
//       deathDate: "5 July 1890",
//       deathPlace: "Rowan, Kentucky, United States",
//       marriagePlace: "Lawrence, Kentucky, United States",
//       marriageDate: "5 March 1834",
//       ascendancyNumber: 322
// }
//    ];
