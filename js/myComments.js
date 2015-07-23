app.controller('myCommentsCtrl', function($scope, $http, CommentsFactory) {
    $scope.essays = [];
    $scope.editingEssay = [];
    CommentsFactory.getComments().then(function(response) {
    	$scope.essays = response.data;
    	for (var i = 0; i < $scope.essays.length; i++) {
    		$scope.editingEssay[i] = false;
    		$scope.essays[i].edited = $scope.essays[i].content;
    	}
    });

    $scope.editEssay = function(index) {
    	$scope.editingEssay[index] = true;
    }

    $scope.saveEssay = function(index) {  	
    	var edit = false;
    	if ($scope.essays[index].content == $scope.essays[index].edited) edit = true;
    	else edit = confirm("Sigur vrei să modifici?");
		
		if (edit == true) {
			$scope.essays[index].content = $scope.essays[index].edited;
			var id = $scope.essays[index].id;
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: 'php/edit_essay.php',
		            data: ({'id': id, 'content': $scope.essays[index].content}),
		            success: function(data) {}
		        });
	    	});

			$scope.editingEssay[index] = false;
		}

    }

    $scope.cancelEditingEssay = function(index) {    	
    	var cancel = false;
    	if ($scope.essays[index].content == $scope.essays[index].edited) cancel = true;
    	else cancel = confirm("Sigur vrei să renunți la modificări?");
		
		if (cancel == true) {
			$scope.essays[index].edited = $scope.essays[index].content;
			$scope.editingEssay[index] = false;
		}
    }

    $scope.deleteEssay = function(index) {
  		var id = $scope.essays[index].id;
    	if (confirm("Sigur vrei să ștergi comentariul?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: 'php/delete_essay.php',
		            data: ({'id': id}),
		            success: function(data) {
		            	$scope.essays.splice(index, 1);
		            	$scope.editingEssay.splice(index, 1);
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