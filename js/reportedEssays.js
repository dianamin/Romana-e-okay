/*
	Contains reported essays and operations for admin view.
*/


adminApp.controller('ReportedEssaysCtrl', function($scope, $http) {
	$scope.essays = [];
	$http({method: 'GET', url: '../php/published_essays.php'}).success(function(data, status, headers, config) {
		$scope.essays = data;
		//gets published essay content (only reported essays will be displayed)
	});

	$scope.unreport = function(essay) {
		//approves essay
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/unreport_essay.php',
	            data: ({'id_essay': essay.id}),
	            success: function(data) {
	            	if (data == ":(") alert("Nu ai permisiunea necesară!"); //if the user is not logged in as admin 
	            	else {
		            	alert(data); //shows unreporting php file message and deletes essay from essays array
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

	$scope.unpublish = function(essay) {
		// if the user is logged in as admin unpublish reported essay
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/unpublish_essay.php',
	            data: ({'id_essay': essay.id}),
	            success: function(data) {
	            	alert(data); //shows unpublish php file message
	            	if (data == "Comentariul a fost retras!") {
	            		//if essay was unpublished, delete it from essays array
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