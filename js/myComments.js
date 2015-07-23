app.controller('myCommentsCtrl', function($scope, $http, CommentsFactory) {
    $scope.essays = [];
    CommentsFactory.getComments().then(function(response) {
    	$scope.essays = response.data;
    });
  //  $http({method: 'GET', url: 'php/user_homeworks.php'}).success(function(data) {
  //  	$scope.essays = data;
  // 	console.log($scope.essays);
  //  });
});