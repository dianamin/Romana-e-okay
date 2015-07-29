var editor;

adminApp.controller('EditPageCtrl', function ($scope, $http, $routeParams) {
	$scope.lesson = {};


	$scope.lessonId =  $routeParams.lessonId;
	
	$scope.chapters = [];

	$http({method: 'GET', url: '../php/get_chapters.php'}).success(function(data) {
		$scope.chapters = data;
	});
	

	$http.post('../php/page_content.php' , $scope.lessonId)
    .success(function(data){
		$scope.lesson = data;
		
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
			$scope.lesson.current = editor.getValue();
			$(function(){
		        $.ajax({
		            type: "POST",
		            url: '../php/edit_page.php',
		            data: ({
		            		'new_content': $scope.lesson.current, 
		            		'lesson_id': $scope.lessonId, 
		            		'new_chapter': $scope.lesson.chapterId,
		            		'new_img': $scope.lesson.img,
		            		'new_type': $scope.lesson.type,
		            		'new_name': $scope.lesson.name,
		            		'new_author': $scope.lesson.author
		            	}),
		            success: function(data) {
		            	window.location.href = "#/";
					}
		        });
		    });
		}
	}

	$scope.cancel = function() {
		$scope.editedPage = editor.getValue();
		if (confirm("Sigur vrei sa renunți la modificări?")) {
			window.location.href = "#/";
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