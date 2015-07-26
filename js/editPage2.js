app.controller('EditPageCtrl', function ($scope, $http) {
	$scope.pageContent = "";
	$scope.editedPage = "";
	$http({method: 'GET', url: '../php/page_content.php'}).success(function(data) {
		$scope.pageContent = data;
		$scope.editedPage = data;
	});

	$scope.edit = function() {
		if ($scope.pageContent == $scope.editedPage || confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_page.php',
		            data: ({'new_content': $scope.editedPage}),
		            success: function(data) {
						window.location.href = "http://localhost/Romana-e-okay/";
					}
		        });
		    });
		}
	}

	$scope.cancel = function() {
		if ($scope.pageContent == $scope.editedPage || confirm("Sigur vrei sa renunți la modificări?")) {
			window.location.href = "http://localhost/Romana-e-okay/";
		}
	}

});