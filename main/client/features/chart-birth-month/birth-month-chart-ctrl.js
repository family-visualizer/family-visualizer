angular.module('app').controller('birthMonthCtrl', function($scope, $rootScope, birthMonthService) {

    //Load totalBirthsPerMonth From Service
    $scope.totalBirthsPerMonth = birthMonthService.totalBirthsPerMonth;

    //Load TotalBirthsPer Generation from Service
    $scope.totalBirthsPerGeneration = birthMonthService.totalBirthsPerGeneration;

	$scope.showMonthChecks = true;
	$scope.showGenChecks = false;
	$scope.buttonText = "Generations";

	$scope.toggleChecks = function() {

		if($scope.showMonthChecks) {
			$scope.showMonthChecks = false;
			$scope.showGenChecks = true;
			$scope.buttonText = "Months"
		} else {
			$scope.showMonthChecks = true;
			$scope.showGenChecks = false;
			$scope.buttonText = "Generations";
		}
	}

    //MONTH VIEW LOGIC ====================================================
	//MONTH VIEW LOGIC ====================================================
	//MONTH VIEW LOGIC ====================================================

    $scope.janChecked = function() {
        if (!$scope.januaryIsChecked) {
            $scope.januaryIsChecked = true;
        } else {
            $scope.januaryIsChecked = false;
        }
    }

    $scope.febChecked = function() {
        if (!$scope.februaryIsChecked) {
            $scope.februaryIsChecked = true;
        } else {
            $scope.februaryIsChecked = false;
        }
    }

    $scope.marChecked = function() {
        if (!$scope.marchIsChecked) {
            $scope.marchIsChecked = true;
        } else {
            $scope.marchIsChecked = false;
        }
    }

    $scope.aprChecked = function() {
        if (!$scope.aprilIsChecked) {
            $scope.aprilIsChecked = true;
        } else {
            $scope.aprilIsChecked = false;
        }
    }

    $scope.mayChecked = function() {
        if (!$scope.mayIsChecked) {
            $scope.mayIsChecked = true;
        } else {
            $scope.mayIsChecked = false;
        }
    }

    $scope.junChecked = function() {
        if (!$scope.juneIsChecked) {
            $scope.juneIsChecked = true;
        } else {
            $scope.juneIsChecked = false;
        }
    }

    $scope.julChecked = function() {
        if (!$scope.julyIsChecked) {
            $scope.julyIsChecked = true;
        } else {
            $scope.julyIsChecked = false;
        }
    }

    $scope.augChecked = function() {
        if (!$scope.augustIsChecked) {
            $scope.augustIsChecked = true;
        } else {
            $scope.augustIsChecked = false;
        }
    }

    $scope.sepChecked = function() {
        if (!$scope.septemberIsChecked) {
            $scope.septemberIsChecked = true;
        } else {
            $scope.septemberIsChecked = false;
        }
    }

    $scope.octChecked = function() {
        if (!$scope.octoberIsChecked) {
            $scope.octoberIsChecked = true;
        } else {
            $scope.octoberIsChecked = false;
        }
    }

    $scope.novChecked = function() {
        if (!$scope.novemberIsChecked) {
            $scope.novemberIsChecked = true;
        } else {
            $scope.novemberIsChecked = false;
        }
    }

    $scope.decChecked = function() {
        if (!$scope.decemberIsChecked) {
            $scope.decemberIsChecked = true;
        } else {
            $scope.decemberIsChecked = false;
        }
    }


    //GENERATION VIEW LOGIC ====================================================
	//GENERATION VIEW LOGIC ====================================================
	//GENERATION VIEW LOGIC ====================================================


    $scope.gen1Checked = function() {
        if (!$scope.gen1IsChecked) {
            $scope.gen1IsChecked = true;
        } else {
            $scope.gen1IsChecked = false;
        }
    }
    $scope.gen2Checked = function() {
        if (!$scope.gen2IsChecked) {
            $scope.gen2IsChecked = true;
        } else {
            $scope.gen2IsChecked = false;
        }
    }

    $scope.gen3Checked = function() {
        if (!$scope.gen3IsChecked) {
            $scope.gen3IsChecked = true;
        } else {
            $scope.gen3IsChecked = false;
        }
    }

    $scope.gen4Checked = function() {
        if (!$scope.gen4IsChecked) {
            $scope.gen4IsChecked = true;
        } else {
            $scope.gen4IsChecked = false;
        }
    }

    $scope.gen5Checked = function() {
        if (!$scope.gen5IsChecked) {
            $scope.gen5IsChecked = true;
        } else {
            $scope.gen5IsChecked = false;
        }
    }

    $scope.gen6Checked = function() {
        if (!$scope.gen6IsChecked) {
            $scope.gen6IsChecked = true;
        } else {
            $scope.gen6IsChecked = false;
        }
    }

    $scope.gen7Checked = function() {
        if (!$scope.gen7IsChecked) {
            $scope.gen7IsChecked = true;
        } else {
            $scope.gen7IsChecked = false;
        }
    }
})
