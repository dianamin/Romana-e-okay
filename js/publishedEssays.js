app.controller('PublishedEssaysCtrl', function($scope, $http) {
	$scope.essays = [];
	$http({method: 'GET', url: 'php/published_essays.php'}).success(function(data, status, headers, config) {
		$scope.essays = data;
		console.log(data);
	});
});