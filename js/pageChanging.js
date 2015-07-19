/*
	Contains PageChangeCtrl - for changing views.
*/


app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 0;
	$scope.pages = pages;
	$scope.currentPage = pages[0];
	$scope.chosenView = "none";
	$scope.SelectedCreation = -1;
	$scope.editablePage = "";
	$scope.editing = false;

	$scope.showLogo = function() {
		return window.innerWidth >= 450;
	}

	$scope.hasLider = function() {
		// for contexts
		return $scope.currentPage.lider != "-";
	}

	$scope.changeEditablePage = function() {
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/change_editable_page.php',
	            data: ({'s': $scope.editablePage}),
	            success: function(data) {}
	        });
	    });
	}

	$scope.changePage = function(x) {
		// changing view
		scrollToTop();
		$scope.selected = x;
		$scope.SelectedCreation = -1;
		$scope.currentPage = pages[x];
		if ($scope.currentPage.category == "lesson") {
			$scope.chosenView = "none";
			$scope.SelectedCreation = -1;
		}
		$scope.editing = false;
		//$('html, body').animate({scrollTop: 0}, "slow");
	}

	$scope.chooseView = function(x) {
		// Creations or Context
		$scope.chosenView = x;
		$scope.SelectedCreation = -1;
		showElement(x);
		if (x == 'context') {
			$scope.editablePage = $scope.currentPage.details;
			$scope.changeEditablePage();
		}
		var position = $('#alege').offset();
		$('html, body').animate({scrollTop: position.top - 100}, "slow");
		$scope.editing = false;
	}

	$scope.selectedPage = -1;

	$scope.chooseView2 = function(page) {
		$scope.selectedPage = page;
		var position = $('#scrollHere').offset();
		$('html, body').animate({scrollTop: position.top - 150}, "slow");
		$scope.editing = false;
	}

	$scope.openCreation = function(id) {
		//opens Creation
		$scope.editing = false;
		console.log(creations[$scope.selected - 1][id].page);
		$scope.SelectedCreation = creations[$scope.selected - 1][id].page;
		$scope.editablePage = $scope.SelectedCreation;
		$scope.changeEditablePage();
		//location.href = "#continut";
		var position = $('#continut').offset();
		$('html, body').animate({scrollTop: position.top}, "slow");
	}

	$scope.editPage = function(id) {
		$scope.editing = true;
	}

});

