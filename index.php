<html ng-app = "app">

<head>
	<meta charset = "utf-8" />
	<meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
	<title> Româna e okay! </title>
    <link rel = "stylesheet" href = "css/glyphicons.css" />
    <link rel = "stylesheet" href = "css/bootstrap.css" />
	<link rel = "stylesheet" href = "css/style.css" />

	<script src = "partials/creations.js"></script>
	<script src = "partials/context.js"></script>

	<script src = "js/jQuery.js"></script>
	<script src = "js/jquery-ui.js"></script>

	<script src = "js/angular.js"></script>
	<script src = "js/app.js"> </script>
	<script src = "js/angular-route.js"></script>
	<script src = "js/sortable.js"></script>

	<script src = "js/bootstrap.js"></script>

	<script src = "js/facebookLogin.js"></script>
	<script src = "js/usefulFunctions.js"></script>
	<script src = "js/pageChanging.js"></script>
	<script src = "js/directives.js"></script>
	<script src = "js/creationscontrollers.js"></script>
	<script src = "js/answers.js"></script>
	<script src = "js/joc.js"></script>
	<script src = "js/eseuriMaker.js"></script>
	<script src = "js/figuriInterpreter.js"></script>
</head>

<body ng-controller = "PageChangeCtrl">
	<header ng-click = "changePage(0)"> 
		<div class = "title">
			<h1 style = "font-size: 45px;"> Româna e okay! </h1>
		</div>
		<div id = "login-panel" ng-show = "showLogo()">
			<div>
				<div id = "profile-photo"> </div>
				<div id = "profile-data"> 
					<div> <center>
						<div id = "user-name"> Bine ai venit! </div>
						<div> Scor: <span id = "user-score">0</span> </div>
						<button id = "login-button" class = "btn-default" onclick = "login()"> Log In </button>
						<div id = "logout-button" onclick = "logout()"> Log Out </button>
					</center> </div>
				</div>
			</div>
			<p id = "status" style = "display: none;"> </p>
		</div>
	</header>
	<div id = "top-line"> </div>
	<center> 
		<div id = "logo" ng-show = "showLogo()" ng-click = "changePage(0)"> 
			<span class = "glyphicon glyphicon-thumbs-up"></span> 
		</div> 
	</center>

	<div id = "topnavbar">
		<nav class = "navbar navbar-default" style = "height: 30px;">
			<div class = "nav-collapse">
			  <div class = "container-fluid">
			    <div class = "navbar-header">
					<button type = "button" class = "navbar-toggle collapsed" data-toggle = "collapse" data-target = "#navbar-collapse">
						<span class = "icon-bar"> </span>
						<span class = "icon-bar"> </span>
						<span class =" icon-bar"> </span>
					</button>
			    </div>

			    <div class = "collapse navbar-collapse" id = "navbar-collapse" style = "background-color: #f8f8f8; z-index: 1000;">
					<ul class = "nav navbar-nav" style = "margin-top: 15px;">
						<li ng-repeat = "page in pages"
							class = "button"
							ng-class = "{'active': selected == page.id}"
							ng-if = "page.place == 'left'"
							ng-click = "changePage(page.id)">
							{{page.name}}
						</li>
					</ul>
			        <ul class = "nav navbar-nav navbar-right" style = "margin-top: 15px; z-index: 1000;">
			      		<li ng-repeat = "page in pages"
							class = "button"
							ng-class = "{'active': selected == page.id}"
							ng-if = "page.place == 'right'"
							ng-click = "changePage(page.id)">
							{{page.name}}
						</li>
			        </ul>
			    </div>
			  </div>
			</div>
		</nav>
	</div>

	<div id = "content">

		<div class = "text-block" ng-show = "editing">
			<div ng-include = "'partials/edit.php'"></div>
		</div>

		<div ng-show = "!editing">
			<center> 
			<div class = "text-block">
				<div ng-show = "pages[selected].category == ''" ng-include = "pages[selected].details"></div>

				<div ng-show = "pages[selected].category == 'lesson'">
					<h3> {{currentPage.name}} </h3>	<hr />
					<h4 ng-show = "hasLider()"> Mentor: {{currentPage.lider}} </h4>
					
					<center>
						<br /> Vreau să aflu despre: <br />
			  			<button class = "btn btn-default subtitle-button" ng-click = "chooseView('context')">
							<div class = "dot subtitle-dot"> 
								<span class = "glyphicon glyphicon-cog"> </span> 
							</div> 
							<span class = "subtitle"> Context </span> 
			  			</button>
			  			<button class = "btn btn-default subtitle-button" ng-click = "chooseView('creations')">
							<div class = "dot subtitle-dot"> 
								<span class = "glyphicon glyphicon-book"> </span> 
							</div> 
							<span class = "subtitle"> Opere </span> 
			  			</button>
						<br /> <br />
		  			</center>
		  			<div id = "alege"> </div>

					<div ng-show = "chosenView == 'context'">
						<div style = "text-align: right;"> <?php include 'php/buttons.php'; ?> </div>
						<div ng-include = "currentPage.details" id = "context" style = "opacity: 0;"></div>
					</div>
					<div id = "creations" ng-show = "chosenView == 'creations'" style = "opacity: 0;">
						<center> <ul id = "creationsMenu">
							<li class = "creation" 
								ng-repeat = "creation in currentPage.creations"
								back-img = {{creation.img}}
								ng-click = "openCreation(creation.id)">
									<div class = "creation-presentation" ng-click = "openCreation(creation.id)">
										<b> {{creation.name}} </b>
										<br /> <br />
										{{creation.author}}
										<br />
										{{creation.type}}
									</div>
							</li>
							<div id = "continut"> </div>
						</ul></center>
						<br /> <br />
						<div ng-show = "SelectedCreation != -1">
							<div style = "text-align: right;"> <?php include 'php/buttons.php'; ?> </div>
							<div ng-include = "SelectedCreation"> </div>
						</div>
					</div>
				</div>
			</div>
		
			<div ng-show = "pages[selected].category == 'buttons'">
				<h3> {{currentPage.name}} </h3>
				<hr />	
				<center>
					<p> {{currentPage.description}} </p>
		  			<button class = "btn btn-default subtitle-button"
						ng-repeat = "button in pages[selected].options"
						ng-click = "chooseView2(button.address)"> 
						<span class = "subtitle"> {{button.name}} </span>
		  			</button>
	  				<div id = "scrollHere"> </div>

		  			<div ng-include = "selectedPage"> </div>
		  		</center>
	  		</div>
	  	</div> 
	  	</center> 
	</div> </div>

	<div id = "back-to-top" onclick = "scrollToTop();"> <span class = "glyphicon glyphicon-arrow-up"> </span> </div>

	<footer id = "page-footer">
		© Diana Ghinea
	</footer>

</body>

</html>