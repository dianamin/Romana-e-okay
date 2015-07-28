var editor;

adminApp.controller('EditPageCtrl', function ($scope, $http, $routeParams) {
	$scope.pageContent = "Loading";
	$scope.editedPage = "Loading";
	$scope.prevPage = "Loading";
	$scope.name = "Loading";

	$scope.lessonId =  $routeParams.lessonId;

	$http.post('../php/page_content.php' , $scope.lessonId)
    .success(function(data){
		$scope.pageContent = data.current;
		$scope.editedPage = data.current;
		$scope.prevPage = data.previous;
		$scope.name = data.name;
		$scope.$apply();
		editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
		    lineNumbers: true,
		    mode:  "xml"
		});
		$('.CodeMirror').resizable({
			resize: function() {
				editor.setSize($(this).width(), $(this).height());
			}
		});
    })

	$scope.edit = function() {
		if (confirm("Sigur vrei să salvezi modificările?")) {
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


//thanks stack overflow (http://jsfiddle.net/wizzud/wYndk/)
/*$(function(){
    var previous = parseInt($('#previous').width(), 10),
        current = parseInt($('#current').width(), 10),
        bar = parseInt($('#bar').width(), 10),
        minw = parseInt((previous + current + bar) * 10 / 100, 10),
        offset = $('#container').offset(),
        splitter = function(event, ui){
            var aw = parseInt(ui.position.left),
                bw = previous + current - aw;
            //set widths and information...
            $('#previous').css({width : aw});
            $('#current').css({width : bw});
        };
    $('#bar').draggable({
        axis : 'x',
        containment : [
            offset.left + minw,
            offset.top,
            offset.left + previous + current - minw,
            offset.top + $('#container').height()
            ],
        drag : splitter
    });

});*/