angular.module('app').service('authService', ['$q', '$http', authService]);


function authService($q, $http) {

	this.getAuthedUser = function () {
		return $http.get("/getAuthedUser").then(function (response) {
			return response.data;
		});
	};


}
