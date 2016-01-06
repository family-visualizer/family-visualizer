angular.module('app').service('familyService', ['$q', '$http', familyService]);

function familyService($q, $http) {

	var ancestry = [];
	var self = this;
	this.getAncestry = (personId, accessToken) => {
		
		
		/*
			Make promise
			if ! this.ancestry
				make the request
					resolve promise with data
			else
				resolve promise with this.ancestry
				
			return promise
		
		*/
		console.log('get ancestry');
		
		var defer = $q.defer();
		
		if (!this.ancestry){
			makeAncestryCall.call(this, personId, accessToken, defer);
		} else {
			defer.resolve(this.ancestry);
		}
		
		return defer.promise;
		

		
	};
	
	function makeAncestryCall(personId, accessToken, defer){
		
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/ancestry.json?person=' + personId + '&spouse=&personDetails=&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken,
				'Content-Type': 'application/json;charset=UTF-8'
			}
		};



		$http(req).then(function (response) {

			console.log(".then is runnning");



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

			// return ancestry;
			self.ancestry = ancestry;//that === this.. might not work, check later
			defer.resolve(self.ancestry);
		}, function (err) {

		});
		
	}

	

};



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



  
  
       



