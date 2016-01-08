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
						, gender: person.display.gender
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

					if (person.ascendancyNumber > 1 && person.ascendancyNumber < 512 && person.ascendancyNumber % 2 === 0) {
						console.log("searchin this person's children", person.ascendancyNumber);

						var parent =
							{
								parentAscendancyNumber: person.ascendancyNumber
								, ame: person.name
								, children: []
							};

						makeAncestryAndChildrenCall.call(this, accessToken, defer, person).then((response) => {

							response.data.persons.forEach(function (child) {

								if (child.display.descendancyNumber !== "1" && !/[S]/.test(child.display.descendancyNumber)) {

									parent.children.push(
										{
											personId: child.id
											, name: child.display.name
											, gender: child.display.gender
											, lifespan: child.display.lifespan
											, birthDate: child.display.birthDate
											, birthPlace: child.display.birthPlace
											, deathDate: child.display.deathDate
											, deathPlace: child.display.deathPlace
											, marriagePlace: child.display.marriagePlace
											, marriageDate: child.display.marriageDate
											, descendancyNumber: child.display.descendancyNumber
										}

										);

								}


							});
							ancestryAndChildren.push(parent);
							self.ancestryAndChildren = ancestryAndChildren;
							defer.resolve(self.ancestryAndChildren);


							ancestryAndChildren.forEach(function (human) {
								
								human.children.forEach(function (child) {
									if (child.name === person.name) {
								console.log("checking to see if they are in bottom", person);
								console.log('ANCESTRY & CHILDREN!!!!!!', ancestryAndChildren);
								ancestryAndChildren.push(person);
									}	
								});
								
							
							}); 
								

						}


							);
					}





				});
			});
		}

		return defer.promise;
	};

	//Gets ancestry
	function makeAncestryCall(personId, accessToken, defer) {
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/ancestry.json?person=' + personId + '&spouse=&personDetails=&generations=8&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken
				, 'Content-Type': 'application/json;charset=UTF-8'
			}
		};
		return $http(req);
	}

	//Gets children for ancestors
	function makeAncestryAndChildrenCall(accessToken, defer, person) {
		var req = {
			method: 'GET'
			, url: 'https://sandbox.familysearch.org/platform/tree/descendancy.json?person=' + person.personId + '&personDetails=&marriageDetails='
			, headers: {
				'Accept': 'application/x-fs-v1+json'
				, 'Authorization': 'Bearer ' + accessToken,
				'Content-Type': 'application/json;charset=UTF-8'
			}
		};
		return $http(req);
	}



}


  
  
       



