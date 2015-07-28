<html ng-app = "app">
<head>
	<meta charset = "utf-8" />
	<title> Editing </title>
    <link rel = "stylesheet" href = "../css/glyphicons.css" />
    <link rel = "stylesheet" href = "../css/bootstrap.css" />
    <link rel = "stylesheet" href = "../css/admin-page-style.css" />
    <link rel = "stylesheet" href = "../css/codemirror.css" />
	<script src = "../js/jQuery.js"></script>
	<script src = "../js/jquery-ui.js"></script>
	<script src = "../js/angular.js"></script>
    <script src = "../js/app.js"></script>
    <script src = "../js/editPage.js"></script>
	<script src = "../js/sortable.js"></script>
	<script src = "../js/codemirror.js"></script>
    <script src = "../addon/edit/matchbrackets.js"></script>
	<script src = "../mode/javascript.js"></script>
	<script src = "../mode/css.js"></script>
	<script src = "../mode/htmlmixed.js"></script>
	<script src = "../mode/xml.js"></script>

</head>

<body ng-controller = "EditPageCtrl">
	<h1> Româna e okay - admin view </h1>
	<hr />
	<br />

	<!-- <textarea id = "editor" ng-model = "editedPage"> </textarea> -->

	
	<div ng-show = "editedPage == ':('">
		<center> <h2> Nu ai permisiunea necesară pentru a edita pagina. </h2> </center>
	</div>
	<div ng-show = "editedPage != ':('">
		<!--<div id = 'container'>
		    <div id = 'previous'>
		    	<div style = "position: relative; padding: 10px;">
		    		<h2> Previous Version </h2>
		    		<textarea disabled class = "form-control" style = "width: 100%; height: 80%;" ng-model = "prevPage"></textarea>
				</div> 
		    </div>
		    <div id = 'current'>
		    	<div style = "position: relative; padding: 10px;" class = "CodeMirror-gutter-wrapper">
		    		<textarea class = "form-control CodeMirror" style = "width: 100%; height: 80%;" ng-model = "editedPage"></textarea>
		    		<textarea id = "editor" ng-model = "editedPage" style = "Width: 100%;"> </textarea>
				</div> 
		    </div>
		    <div id = 'bar'></div>
		</div> -->
		<h3> Lecția editată: {{name}} </h3>
		<br />
		<textarea id = "editor" ng-model = "editedPage"> </textarea>
		<br /> <br />
		<center>
			<button class = "btn btn-primary" ng-click = "edit()">
				<span class = "glyphicon glyphicon-floppy-disk"> </span>
			</button>
			<button class = "btn btn-danger" ng-click = "cancel()">
				<span class = "glyphicon glyphicon-remove"> </span> 
			</button>
		</center>
	</div>


</body>
	<script src = "../js/highlighter.js"></script>

</html>