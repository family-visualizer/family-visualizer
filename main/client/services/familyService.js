angular.module('app').service('familyService', ['$q', '$http', familyService]);

function familyService($q, $http) {

	var ancestry = [];
	var ancestryAndChildren = [];
	var self = this;

	this.returnAncestry = function () {
		return self.ancestry;	
	};

	this.getAncestry = (personId, accessToken) => {
		var defer = $q.defer();
		if (!this.ancestry) {
			makeAncestryCall.call(this, personId, accessToken, defer);
		} else {
			defer.resolve(this.ancestry);
		}
		return defer.promise;
	};

	function makeAncestryCall(personId, accessToken, defer) {
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/ancestry.json?person=' + personId + '&spouse=&personDetails=&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken
				, 'Content-Type': 'application/json;charset=UTF-8'
			}
		};
		return $http(req);//.then(function (response) {
		// response.data.persons.forEach(function (person) {
		// 	ancestry.push({
		// 		personId: person.id
		// 		, name: person.display.name
		// 		, gender: person.display.gener
		// 		, lifespan: person.display.lifespan
		// 		, birthDate: person.display.birthDate
		// 		, birthPlace: person.display.birthPlace
		// 		, deathDate: person.display.deathDate
		// 		, deathPlace: person.display.deathPlace
		// 		, marriagePlace: person.display.marriagePlace
		// 		, marriageDate: person.display.marriageDate
		// 		, ascendancyNumber: person.display.ascendancyNumber
		// 	});
		// });
		// self.ancestry = ancestry;
		// defer.resolve(self.ancestry);
		// return defer.promise;
		// }, function (err) {
		// });
	}








	this.getAncestryAndChildren = (personId, accessToken) => {
		var defer = $q.defer();
		if (!this.ancestry) {
			console.log('!this.anc');
			makeAncestryCall.call(this, personId, accessToken, defer).then(function (response) {
				response.data.persons.forEach(function (person) {
					ancestry.push({
						personId: person.id
						, name: person.display.name
						, gender: person.display.gener
						, lifespan: person.display.lifespan
						, birthDate: person.display.birthDate
						, birthPlace: person.display.birthPlace
						, deathDate: person.display.deathDate
						, deathPlace: person.display.deathPlace
						, marriagePlace: person.display.marriagePlace
						, marriageDate: person.display.marriageDate
						, ascendancyNumber: person.display.ascendancyNumber
					});
				});
				self.ancestry = ancestry;

self.ancestry.forEach(function (person) {

				if (person.ascendancyNumber > 1 && person.ascendancyNumber < 8 && person.ascendancyNumber % 2 === 0) {

					makeAncestryAndChildrenCall.call(this, personId, accessToken, defer, person).then((response) => {
						response.data.persons.forEach(function (person) {
							ancestryAndChildren.push({
								personId: person.id
								, name: person.display.name
								, gender: person.display.gener
								, lifespan: person.display.lifespan
								, birthDate: person.display.birthDate
								, birthPlace: person.display.birthPlace
								, deathDate: person.display.deathDate
								, deathPlace: person.display.deathPlace
								, marriagePlace: person.display.marriagePlace
								, marriageDate: person.display.marriageDate
								, ascendancyNumber: person.display.ascendancyNumber
							});
						});
						self.ancestryAndChildren = ancestryAndChildren;
						defer.resolve(self.ancestryAndChildren);
					});
				}
				
});
			});
		} else {
			console.log('else');
			makeAncestryAndChildrenCall.call(this, personId, accessToken, defer).then((data) => {
				defer.resolve(self.ancestryAndChildren);
			});
		}
		console.log('defer.promise in getAncestryAndChildren', defer.promise);
		return defer.promise;
	};



	function makeAncestryAndChildrenCall(personId, accessToken, defer, person) {

		

			var req = {
				method: 'GET'
				, url: 'https://sandbox.familysearch.org/platform/tree/descendancy.json?person=' + person.personId + '&spouse=&personDetails=&marriageDetails='
				, headers: {
					'Accept': 'application/x-fs-v1+json'
					, 'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/json;charset=UTF-8'
				}
			};
			return $http(req);//.then(function (response) {
			// 		response.data.persons.forEach(function (person) {
			// 			ancestryAndChildren.push({
			// 				personId: person.id
			// 				, name: person.display.name
			// 				, gender: person.display.gener
			// 				, lifespan: person.display.lifespan
			// 				, birthDate: person.display.birthDate
			// 				, birthPlace: person.display.birthPlace
			// 				, deathDate: person.display.deathDate
			// 				, deathPlace: person.display.deathPlace
			// 				, marriagePlace: person.display.marriagePlace
			// 				, marriageDate: person.display.marriageDate
			// 				, ascendancyNumber: person.display.ascendancyNumber
			// 			});
			// 		});
			// 		self.ancestryAndChildren = ancestryAndChildren;
			// 	}, function (err) {
			// 	});

			// }
			// defer.resolve(self.ancestryAndChildren);
			// return defer.promise;

			// });



	




	}
}



// {

//     "persons": [
//         {
//             "id": "KWZX-7GN",
//             "display": {
//                 "name": "Zach Meyers",
//                 "gender": "Male",
//                 "lifespan": "1925-1998",
//                 "birthDate": "9 May 1925",
//                 "birthPlace": "Oklahoma City, Oklahoma, Oklahoma, United States",
//                 "deathDate": "16 July 1998",
//                 "deathPlace": "Boise, Idaho, United States",
//                 "ascendancyNumber": "14"
//             }
//         }]
// }



  
  
       



