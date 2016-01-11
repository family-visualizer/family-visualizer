angular.module('app').service('familyDataUtilsService', ['$q', familyDataUtilsService]);

function familyDataUtilsService($q) {
	this.flattenTree = function (familyTree) {

		var flattenedFamily = [];
		var uniqueFlattened = [];

		familyTree.forEach(function (person) {
			console.log('pushing PARENT', person.name);
			flattenedFamily.push(person);
			person.children.forEach(function (child) {
				console.log('pushing child', child.name);

				var split = child.descendancyNumber.split(".");
		
				
				if (split[1].length > 1 ) {
					child.descendancyNumber = person.ascendancyNumber + child.descendancyNumber.slice(1, 4);
				} else {	
					child.descendancyNumber = person.ascendancyNumber + ".0" + child.descendancyNumber.slice(2, 3);
				}


				
				flattenedFamily.push(child);
			});
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
				
				// If that person has an ascendancy number, assign that to their clean version
				if (person.ascendancyNumber) {
					existing.ascendancyNumber = person.ascendancyNumber;
				}
				//If that person has a descendancy number, assign that to their clean version
				if (person.descendancyNumber) {
					existing.descendancyNumber = person.descendancyNumber;
				}
			}




		});



		return uniqueFlattened;

	};
} 