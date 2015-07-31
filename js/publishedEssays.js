/*
	Controlling published essays page (models.html). Gets published essays from database and allows logged in users to rate them or report them.
*/

app.controller('PublishedEssaysCtrl', function($scope, $http) {
	$scope.essays = [];
	$http({method: 'GET', url: 'php/published_essays.php'}).success(function(data, status, headers, config) {
		$scope.essays = data;
		//get published essays content from database
	});

	$scope.userConnected = userConnected;
	
	$scope.minRating = 0;


	$scope.rate = function(index) {
		//allows logged in user to rate essay
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

	$scope.unpublish = function(essay) {
		//report essay or unpublish it if logged in as admin
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/unpublish_essay.php',
	            data: ({'id_essay': essay.id}),
	            success: function(data) {
	            	alert(data);
	            	if (data == "Comentariul a fost retras!") {
	            		$scope.essays.splice(essay.index, 1);
		            	for (var i = 0; i < $scope.essays.length; i++) {
		            		$scope.essays[i].index = i;
		            	}
		            	$scope.$apply();
	            	}
	            }
	        });
    	});
	}
});