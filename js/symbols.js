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
		$scope.symbols = data;
	});
	
	
	$scope.chooseSymbol = function(symbol) {
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
		$scope.initialSymbol.name = symbol.name;
		$scope.initialSymbol.description = symbol.description;
		$scope.editing = true;
	}

	$scope.startCreating = function() {
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
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_symbol.php',
		            data: ({ 'id': symbol.id, 'name': symbol.name, 'description': symbol.description }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!");
		            	else location.reload();
					}
		        });
		    });
		}
	}

	$scope.save = function() {
		if (confirm("Sigur vrei să salvezi modificările?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/add_symbol.php',
		            data: ({ 'name': $scope.newSymbol.name, 'description': $scope.newSymbol.description }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!");
		            	else location.reload();
					}
		        });
		    });
		}
	}

	$scope.cancelEditing = function(symbol) {
		if (confirm("Sigur vrei să renunți la modificări?")) {
			$scope.symbols[symbol.index].name = $scope.initialSymbol.name;
			$scope.symbols[symbol.index].description = $scope.initialSymbol.description;
			$scope.editing = false;
		}
	}
	$scope.cancelCreating = function() {
		if (confirm("Sigur vrei să renunți la modificări?")) {
			$scope.creating = false;
		}
	}



	$scope.delete = function(symbol) {
		if (confirm("Sigur vrei să ștergi simbolul?")) {
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/delete_symbol.php',
		            data: ({ 'id': symbol.id }),
		            success: function(data) {
		            	if (data == ":(") alert("Nu ai permisiunea necesară!");
		            	else location.reload();
					}
		        });
		    });
		}
	}
});

