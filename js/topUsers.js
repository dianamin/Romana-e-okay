app.controller('TopUsersCtrl', function ($scope, $http) {
	//gets top users from database
	$scope.users = [];
	$http({method: 'GET', url: 'php/top_users.php'}).success(function(data) {
		$scope.users = data;
	});
});