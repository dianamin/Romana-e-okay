app.controller('PublishedEssaysCtrl', function($scope, $http) {
	$scope.essays = [];
	$http({method: 'GET', url: 'php/published_essays.php'}).success(function(data, status, headers, config) {
		$scope.essays = data;
		console.log(data);
	});

	$scope.userConnected = userConnected;


	$scope.rate = function(index) {
		var essay = $scope.essays[index];
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/rate_essay.php',
	            data: ({'id_essay': essay.id, 'rating': essay.givenRating, 'rated_by': essay.ratedBy, 'total_rating': essay.totalRating}),
	            success: function(data) {
	            	if (essay.ratedByMe == 0) {
	            		essay.totalRating += essay.givenRating;
	            		essay.ratedBy++;
	            		essay.ratedByMe = 1;
	            	}
	            	else {
	            		essay.totalRating = essay.totalRating + essay.givenRating - essay.initialRating;
	            	}
	            	essay.initialRating = essay.givenRating;
	            	essay.average = essay.totalRating / essay.ratedBy;
	            	$scope.essays[index] = essay;
	            	$scope.$apply();
	            }
	        });
    	});
	}
});