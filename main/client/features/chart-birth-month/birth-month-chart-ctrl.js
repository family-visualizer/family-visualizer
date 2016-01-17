angular.module('app').controller('birthMonthCtrl', function($scope, $rootScope, birthMonthService) {

$scope.totalBirthsPerMonth = birthMonthService.totalBirthsPerMonth;

$scope.totalBirthsPerGeneration = birthMonthService.totalBirthsPerGeneration;

$scope.januaryIsChecked = false;
$scope.februaryIsChecked = false;
$scope.marchIsChecked = false;
$scope.aprilIsChecked = false;

$scope.janChecked = function() {
	if(!$scope.januaryIsChecked) {
		$scope.januaryIsChecked = true;
	} else {
		$scope.januaryIsChecked = false;
	}
}

$scope.febChecked = function() {
	if(!$scope.februaryIsChecked) {
		$scope.februaryIsChecked = true;
	} else {
		$scope.februaryIsChecked = false;
	}
}

$scope.marChecked = function() {
	if(!$scope.marchIsChecked) {
		$scope.marchIsChecked = true;
	} else {
		$scope.marchIsChecked = false;
	}
}

$scope.aprChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.aprilIsChecked) {
		$scope.aprilIsChecked = true;
	} else {
		$scope.aprilIsChecked = false;
	}
}

$scope.mayChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.mayIsChecked) {
		$scope.mayIsChecked = true;
	} else {
		$scope.mayIsChecked = false;
	}
}

$scope.junChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.juneIsChecked) {
		$scope.juneIsChecked = true;
	} else {
		$scope.juneIsChecked = false;
	}
}

$scope.julChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.julyIsChecked) {
		$scope.julyIsChecked = true;
	} else {
		$scope.julyIsChecked = false;
	}
}

$scope.augChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.augustIsChecked) {
		$scope.augustIsChecked = true;
	} else {
		$scope.augustIsChecked = false;
	}
}

$scope.sepChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.septemberIsChecked) {
		$scope.septemberIsChecked = true;
	} else {
		$scope.septemberIsChecked = false;
	}
}

$scope.octChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.octoberIsChecked) {
		$scope.octoberIsChecked = true;
	} else {
		$scope.octoberIsChecked = false;
	}
}

$scope.novChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.novemberIsChecked) {
		$scope.novemberIsChecked = true;
	} else {
		$scope.novemberIsChecked = false;
	}
}

$scope.decChecked = function() {
	console.log("JLKSJLKJLKJ DAD DAD DAD");
	if(!$scope.decemberIsChecked) {
		$scope.decemberIsChecked = true;
	} else {
		$scope.decemberIsChecked = false;
	}
}


})
