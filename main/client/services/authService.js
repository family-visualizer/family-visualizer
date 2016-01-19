angular.module('app').service('authService', ['$q', '$http', authService]);


function authService($q, $http) {

var self = this;
var loggedIn;

self.userLoggedIn = loggedIn; 



	this.getAuthedUser = function () {
		return $http.get("/getAuthedUser").then(function (response) {
			return response.data;
		});
	};




	this.loginUser = function () {
		loggedIn = true;
	};
	
	this.logoutUser = function () {
		loggedIn = false;
	};

	this.returnUser = function () {
		return loggedIn;	
	};

	
	
}
