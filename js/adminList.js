adminApp.controller('AdminListCtrl', function ($scope, $http) {
	$scope.list = [];
	$scope.chapters = [];

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
	});
	
	$http({method: 'GET', url: '../php/get_lessons.php'}).success(function(data) {
		$scope.list = data;
	});


	$scope.anyChosenLesson = false;
	$scope.chosenLesson;
	
	$scope.choseLesson = function(lesson) {
		$scope.chosenLesson = lesson;
		$scope.anyChosenLesson = true;
	}

	//thanks stack overflow (http://jsfiddle.net/wizzud/wYndk/)
	$(function(){
	    var left = parseInt($('#left').width(), 10),
	        right = parseInt($('#right').width(), 10),
	        bar = parseInt($('#bar').width(), 10),
	        minw = parseInt((left + right + bar) * 10 / 100, 10),
	        offset = $('#container').offset(),
	        splitter = function(event, ui){
	            var aw = parseInt(ui.position.left),
	                bw = left + right - aw;
	            //set widths and information...
	            $('#left').css({width : aw});
	            $('#right').css({width : bw});
	        };
	    $('#bar').draggable({
	        axis : 'x',
	        containment : [
	            offset.left + minw,
	            offset.top,
	            offset.left + left + right - minw,
	            offset.top + $('#container').height()
	            ],
	        drag : splitter
	    });

	});

});

