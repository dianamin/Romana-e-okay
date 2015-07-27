<html ng-app = "app">
<head>
	<meta charset = "utf-8" />
	<title> Editing </title>
    <link rel = "stylesheet" href = "../css/glyphicons.css" />
    <link rel = "stylesheet" href = "../css/bootstrap.css" />
	<script src = "../js/jQuery.js"></script>
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
			<textarea class = "form-control" style = "width: 90%; height: 50%;" ng-model = "editedPage"></textarea>
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