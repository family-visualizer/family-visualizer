angular.module('app')
.controller('loginViewInfoCtrl', function( $scope ) {
	
	$scope.pieChartBox = {
		  icon: 'public/images/pieChartIcon.png'
		, text: 'Your families legacy, intelligently organized and exhibited.'
		, class: 'pie-chart'
	};

	$scope.treeBox = {
		  icon: 'public/images/treeIcon.png'
		, text: 'See your family tree displayed in stunningly beautiful visualizations.'
		, class: 'tree-icon'
	};

	$scope.gearBox = {
		  icon: 'public/images/gearIcon.png'
		, text: 'Change settings to view interactive charts based on preferences, statistics, gender, and more.'
		, class: 'gear-icon'
	};

});