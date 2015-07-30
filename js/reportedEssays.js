adminApp.controller('ReportedEssaysCtrl', function($scope, $http) {
	$scope.essays = [];
	$http({method: 'GET', url: '../php/published_essays.php'}).success(function(data, status, headers, config) {
		$scope.essays = data;
	});

	$scope.unreport = function(essay) {
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/unreport_essay.php',
	            data: ({'id_essay': essay.id}),
	            success: function(data) {
	            	alert(data);
            		$scope.essays.splice(essay.index, 1);
	            	for (var i = 0; i < $scope.essays.length; i++) {
	            		$scope.essays[i].index = i;
	            	}
	            	$scope.$apply();
	            }
	        });
    	});
	}

	$scope.unpublish = function(essay) {
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: '../php/unpublish_essay.php',
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