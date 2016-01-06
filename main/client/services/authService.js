angular.module('app').service('authService', ['$q', '$http', authService]);


function authService($q, $http) {

	this.getAuthedUser = function () {
		return $http.get("/getAuthedUser").then(function (response) {
			console.log("service function is working");
			return response.data;
		});
	};


}
