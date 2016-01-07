angular.module('app').service('familyService', ['$q', '$http', familyService]);

function familyService($q, $http) {

	var ancestry = [];
	var ancestryAndChildren = [];
	var self = this;

	this.returnAncestry = function () {
		return self.ancestry;
	};

	this.returnAncestryAndChildren = function () {
		return self.ancestryAndChildren;
	};

	this.getAncestryAndChildren = (personId, accessToken) => {
		var defer = $q.defer();
		if (!this.ancestry) {
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
		}
		return defer.promise;
	};

	//Gets ancestry
	function makeAncestryCall(personId, accessToken, defer) {
		console.log("ancestry call");
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/ancestry.json?person=' + personId + '&spouse=&personDetails=&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken
				, 'Content-Type': 'application/json;charset=UTF-8'
			}
		};
		return $http(req);
	}

	//Gets children for ancestors
	function makeAncestryAndChildrenCall(personId, accessToken, defer, person) {
		console.log("ancestry and children call");
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/descendancy.json?person=' + person.personId + '&spouse=&personDetails=&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken,
				'Content-Type': 'application/json;charset=UTF-8'
			}
		};
		return $http(req);
	}



}


  
  
       



