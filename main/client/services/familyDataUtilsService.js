angular.module('app').service('familyDataUtilsService', ['$q', familyDataUtilsService]);

function familyDataUtilsService($q) {
	this.flattenTree = function (familyTree) {

		var flattenedFamily = [];
		var uniqueFlattened = [];

		familyTree.forEach(function (person) {
			console.log('pushing PARENT', person.name);
			flattenedFamily.push(person);
			if (person.children) {
				person.children.forEach(function (child) {
					console.log('pushing child', child.name);

					var split = child.descendancyNumber.split(".");
		
					// "1.1-S"
					// ["1", "1-S"]
					// "1-S"
				

					if (split.length > 1) {			
						//If no S
						if (split[1].indexOf("S") === -1) {
						
							//"1.11"
							//["1", "11"]
							if (split[1].length > 1) {
								//"53.11"
								child.descendancyNumber = person.ascendancyNumber + "." + split[1];
							} else {
								//"53.03"
								child.descendancyNumber = person.ascendancyNumber + ".0" + split[1];
							}

						} else {
							//If t here is an S
							var splitDash = split[1].split("-");
							// ["13", "S"]
							if (splitDash[0].length > 1) {
								//"53.10-S"
								child.descendancyNumber = person.ascendancyNumber + "." + splitDash[0] + "-S";
							} else {
								//"53.01-S"
								child.descendancyNumber = person.ascendancyNumber + ".0" + splitDash[0] + "-S";
							}
						}
					} else {
						// ['1-S']	
						child.descendancyNumber = person.ascendancyNumber + "-S";
					}


					flattenedFamily.push(child);
				});
			}
		});

		console.log('flattened family', flattenedFamily);

		var addedIds = [];

		flattenedFamily.forEach(function (person) {
			if (addedIds.indexOf(person.personId) === -1) {
				uniqueFlattened.push(person);
				addedIds.push(person.personId);
			} else {
				console.log('else');


				var existing = _.find(uniqueFlattened, function (p) {
					return p.personId === person.personId;
				});

				if (!existing) {
					console.log("Big fat error!  Cannot find person that really should exist!");
				}

				console.log("existing", existing);
				
				//If the person in flattenedFamily(flattenedfamily has duplicates) has an ascendancy# then give that number to the person in uniqueFlattened
				if (person.ascendancyNumber) {
					console.log('ascendancyNumber found,', person.name, ":", person.ascendancyNumber);
					existing.ascendancyNumber = person.ascendancyNumber;
				}
				
				
				//If the person in flattenedFamily(flattenedfamily has duplicates) has an descendancy# then give that number to the person in uniqueFlattened
				if (person.descendancyNumber) {
					existing.descendancyNumber = person.descendancyNumber;
				}
			}




		});
		
		// adding generation number
		function addGenerationNumberToRelative(bigDataArray) {

			for (var i = 0; i < bigDataArray.length; i++) {

				
				

				if (bigDataArray[i].ascendancyNumber) {

					bigDataArray[i].splitAscendancyNumber = bigDataArray[i].ascendancyNumber.split("-")[0];

					if (bigDataArray[i].splitAscendancyNumber >= 2 && bigDataArray.splitAscendancyNumber < 4) {
						bigDataArray[i]["generation"] = 2;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 4 && bigDataArray[i].splitAscendancyNumber < 8) {
						bigDataArray[i]["generation"] = 3;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 8 && bigDataArray[i].splitAscendancyNumber < 16) {
						bigDataArray[i]["generation"] = 4;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 16 && bigDataArray[i].splitAscendancyNumber < 32) {
						bigDataArray[i]["generation"] = 5;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 32 && bigDataArray[i].splitAscendancyNumber < 64) {
						bigDataArray[i]["generation"] = 6;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 64 && bigDataArray[i].splitAscendancyNumber < 128) {
						bigDataArray[i]["generation"] = 7;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 128 && bigDataArray[i].splitAscendancyNumber < 256) {
						bigDataArray[i]["generation"] = 8;
					}

					if (bigDataArray[i].splitAscendancyNumber >= 256 && bigDataArray[i].splitAscendancyNumber < 512) {
						bigDataArray[i]["generation"] = 9;
					}
				} else {

					bigDataArray[i].splitDescendancyNumber = bigDataArray[i].descendancyNumber.split("-")[0];
					
					if (bigDataArray[i].splitDescendancyNumber >= 2 && bigDataArray.splitDescendancyNumber < 4) {
						bigDataArray[i]["generation"] = 1;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 4 && bigDataArray[i].splitDescendancyNumber < 8) {
						bigDataArray[i]["generation"] = 2;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 8 && bigDataArray[i].splitDescendancyNumber < 16) {
						bigDataArray[i]["generation"] = 3;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 16 && bigDataArray[i].splitDescendancyNumber < 32) {
						bigDataArray[i]["generation"] = 4;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 32 && bigDataArray[i].splitDescendancyNumber < 64) {
						bigDataArray[i]["generation"] = 5;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 64 && bigDataArray[i].splitDescendancyNumber < 128) {
						bigDataArray[i]["generation"] = 6;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 128 && bigDataArray[i].splitDescendancyNumber < 256) {
						bigDataArray[i]["generation"] = 7;
					}

					if (bigDataArray[i].splitDescendancyNumber >= 256 && bigDataArray[i].splitDescendancyNumber < 512) {
						bigDataArray[i]["generation"] = 8;
					}
				}
			}
			return bigDataArray;
		}

		addGenerationNumberToRelative(uniqueFlattened);

		console.log("uniq/flat with gen", uniqueFlattened);

		return uniqueFlattened;

	};
} 