angular.module('app')
.controller('loginViewCtrl', function( $scope, user ) {

	$scope.user = user;
	
	$scope.pieChartBox = {
		  icon: 'images/pieChartIcon.png'
		, text: 'Your family\'s legacy, intelligently organized and exhibited.'
		, class: 'pie-chart'
	};

	$scope.treeBox = {
		  icon: 'images/treeIcon.png'
		, text: 'See your family tree displayed in stunningly beautiful visualizations.'
		, class: 'tree-icon'
	};

	$scope.gearBox = {
		  icon: 'images/gearIcon.png'
		, text: 'Change settings on interactive charts to customize what you see.'
		, class: 'gear-icon'
	};

});