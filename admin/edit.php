<html ng-app = "app">
<head>
	<meta charset = "utf-8" />
	<title> Editing </title>
    <link rel = "stylesheet" href = "../css/glyphicons.css" />
    <link rel = "stylesheet" href = "../css/bootstrap.css" />
    <link rel = "stylesheet" href = "../css/admin-page-style.css" />
	<script src = "../js/jQuery.js"></script>
	<script src = "../js/jquery-ui.js"></script>
	<script src = "../js/angular.js"></script>
    <script src = "../js/app.js"></script>
    <script src = "../js/editPage.js"></script>
	<script src = "../js/sortable.js"></script>
</head>

<body ng-controller = "EditPageCtrl">
	<h1> Româna e okay - admin view </h1>
	<hr />
	<br />


	<center>
		<div ng-show = "editedPage == ':('">
			<h2> Nu ai permisiunea necesară pentru a edita pagina. </h2>
		</div>
		<div ng-show = "editedPage != ':('">
			<div id = 'container'>
			    <div id = 'previous'>
			    	<div style = "position: relative; padding: 10px;">
			    		<h2> Previous Version </h2>
			    		<textarea disabled class = "form-control" style = "width: 100%; height: 80%;" ng-model = "prevPage"></textarea>
					</div> 
			    </div>
			    <div id = 'current'>
			    	<div style = "position: relative; padding: 10px;">
			    		<h2> Current Version </h2>
			    		<textarea class = "form-control" style = "width: 100%; height: 80%;" ng-model = "editedPage"></textarea>
					</div> 
			    </div>
			    <div id = 'bar'></div>
			</div>
			<br /> <br />
			<button class = "btn btn-primary" ng-click = "edit()">
				<span class = "glyphicon glyphicon-floppy-disk"> </span>
			</button>
			<button class = "btn btn-danger" ng-click = "cancel()">
				<span class = "glyphicon glyphicon-remove"> </span> 
			</button>
		</div>
	</center>

</body>

</html>