angular.module('app')
.controller('loginViewCtrl', function( $scope ) {
	
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
		, text: 'Change settings to view interactive charts based on preferences, statistics, gender, and more.'
		, class: 'gear-icon'
	};

});