app.controller('myCommentsCtrl', function($scope, $http, CommentsFactory) {
    $scope.essays = [];
    CommentsFactory.getComments().then(function(response) {
    	$scope.essays = response.data;
    });

    $scope.deleteEssay = function(id) {
    	if (confirm("Sigur vrei să ștergi comentariul?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: 'php/delete_essay.php',
		            data: ({'id': id}),
		            success: function(data) {alert(data);}
		        });
	    	});
		}
    }

});