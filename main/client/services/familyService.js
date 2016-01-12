angular.module('app').service('familyService', ['$q', '$http', 'familyDataUtilsService', familyService]);

function familyService($q, $http, familyDataUtilsService) {

	var ancestry = [];
	var ancestryAndChildren = [];
	var self = this;
	this.returnAncestry = function () {
		return self.ancestry;
	};

	

	//Here we make the API call for direct ancestors and save their information.
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

				var totalParentResultsReceived = 0;
				var allTheDads = _.filter(self.ancestry, (person) => person.ascendancyNumber > 1 && person.ascendancyNumber < 512 && person.ascendancyNumber % 2 === 0)
				var totalExpectedCalls = allTheDads.length;
				
				console.log("Total expected children calls: " + totalExpectedCalls);
				
				//Here we make each direct ancestor into a 'parent' and then make the API call to fill in their children.
				allTheDads.forEach(function (person, personIndex) {
						var parent =
							{
								personId: person.personId
								, name: person.name
								, gender: person.gender
								, lifespan: person.lifespan
								, birthDate: person.birthDate
								, birthPlace: person.birthPlace
								, deathDate: person.deathDate
								, deathPlace: person.deathPlace
								, marriagePlace: person.marriagePlace
								, marriageDate: person.marriageDate
								, ascendancyNumber: person.ascendancyNumber
								, children: []
							};

						makeAncestryAndChildrenCall.call(this, accessToken, defer, person).then((response) => {

							response.data.persons.forEach(function (child, childIndex) {

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
										});
								}
								
								
							});
							ancestryAndChildren.push(parent);
							self.ancestryAndChildren = ancestryAndChildren;
							totalParentResultsReceived++;
							console.log("Child query received : " + totalParentResultsReceived);
							if(totalParentResultsReceived === totalExpectedCalls){
								console.log("All children received, returning");
								var flattened = familyDataUtilsService.flattenTree(self.ancestryAndChildren);
								self.ancestry = flattened;
								defer.resolve(flattened);
							}
							// console.log('anc and children', ancestryAndChildren);

						});
					
				});
					// return self.ancestryAndChildren;
			});
			
		} else {
			return self.ancestry;
		} 
		
		//TODO else resovle ancestry

		console.log('self.Ancestry in Service', self.ancestryAndChildren);
		return defer.promise;
	};








	//Helper function that makes the API call for direct ancestors
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

	//Helper function that makes the API call for children of direct ancestors
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


  
  
       



