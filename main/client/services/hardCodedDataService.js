angular.module('app').service('hardCodedDataService', ['$q', '$http', hardCodedDataService]);


function hardCodedDataService($q, $http) {

	//Request data from data.json file
	this.getFamily = function () {
		return $http.get('./data.json');
	};
};
