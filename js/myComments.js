app.controller('myCommentsCtrl', function($scope, $http, CommentsFactory) {
    $scope.essays = [];
    CommentsFactory.getComments().then(function(response) {
    	$scope.essays = response.data;
    });

    $scope.deleteEssay = function(index) {
    	alert(index);
  		var id = $scope.essays[index].id;
    	if (confirm("Sigur vrei să ștergi comentariul?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: 'php/delete_essay.php',
		            data: ({'id': id}),
		            success: function(data) {
		            	$scope.essays.splice(index, 1);
		            	for (var i = 0; i < $scope.essays.length; i++) {
		            		$scope.essays[i].index = i;
		            	}
		            	$scope.$apply();
		            }
		        });
	    	});
		}
    }

});