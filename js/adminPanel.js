/*
	Gets recent changes for admin view - home page.
*/

adminApp.controller('AdminPanelCtrl', function ($scope, $http) {
	$scope.changes = [];
	$http({method: 'GET', url: '../php/get_recent_changes.php'}).success(function(data) {
		$scope.changes = data;
	});

});

