app.controller('TopUsersCtrl', function ($scope, $http) {
	$scope.users = [];
	$http({method: 'GET', url: 'php/top_users.php'}).success(function(data) {
		$scope.users = data;
	});
});