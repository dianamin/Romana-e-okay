/*
	Contains symbol and operations for admin view.
*/

adminApp.controller('SymbolsCtrl', function ($scope, $http) {
	$scope.list = [];
	$scope.symbols = [];
	$scope.chosensymbol= {};
	$scope.anyChosenSymbol = false;
	$scope.editing = false;
	$scope.creating = false;
	$scope.newSymbol = {};
	$scope.initialSymbol = {};

	$http({method: 'GET', url: '../php/get_symbols.php'}).success(function(data) {
		//gets symbols dictionary
		$scope.symbols = data;
	});
	
	
	$scope.chooseSymbol = function(symbol) {
		//changes chosen symbol if there are no changes to save
		if ($scope.editing == true) {
			if (!confirm("Sigur vrei să renunți la modificări?")) return;
		}
		if ($scope.creating == true) {
			if (!confirm("Sigur vrei să renunți la modificări?")) return;
		}
		$scope.chosenSymbol = symbol;
		$scope.anyChosenSymbol = true;
		$scope.editing = false;
		$scope.creating = false;
	}

	$scope.startEditing = function(symbol) {
		//displays symbol in edit view
		$scope.initialSymbol.name = symbol.name;
		$scope.initialSymbol.description = symbol.description;
		$scope.editing = true;
	}

	$scope.startCreating = function() {
		//if there are no changes to save, show create symbol form
		if ($scope.editing == true) {
			if (!confirm("Sigur vrei să renunți la modificări?")) return;
		}
		if ($scope.creating == true) {
			if (!confirm("Sigur vrei să renunți la modificări?")) return;
		}
		$scope.newSymbol = {};
		$scope.editing = false;
		$scope.creating = true;
	}

	$scope.edit = function(symbol) {
		//save symbol changes if user is logged in as admin and is sure about it
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_symbol.php',
		            data: ({ 'id': symbol.id, 'name': symbol.name, 'description': symbol.description }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!"); //if user is not logged in as admin
		            	else location.reload(); //else reload page
					}
		        });
		    });
		}
	}

	$scope.save = function() {
		//save created symbol if user is logged in as admin and is sure about it
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/add_symbol.php',
		            data: ({ 'name': $scope.newSymbol.name, 'description': $scope.newSymbol.description }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!"); //if user is not logged in as admin
		            	else location.reload(); //else reload page
					}
		        });
		    });
		}
	}

	$scope.cancelEditing = function(symbol) {
		//cancels editing symbol if user is sure about it
		if (confirm("Sigur vrei să renunți la modificări?")) {
			$scope.symbols[symbol.index].name = $scope.initialSymbol.name;
			$scope.symbols[symbol.index].description = $scope.initialSymbol.description;
			$scope.editing = false;
		}
	}
	$scope.cancelCreating = function() {
		//cancels editing symbol if user is sure about it
		if (confirm("Sigur vrei să renunți la modificări?")) {
			$scope.creating = false;
		}
	}

	$scope.delete = function(symbol) {
		//deletes symbol if user is logged in as admin and is sure about it
		if (confirm("Sigur vrei să ștergi simbolul?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/delete_symbol.php',
		            data: ({ 'id': symbol.id }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!"); //checks if user is logged in as admin
		            	else location.reload(); //reload page
					}
		        });
		    });
		}
	}
});

