<?php
/*	
	Shortcut to admin view, editing lesson.
	Used in index.html (public index).
*/
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];

	$find_user_query = "
		SELECT *
		FROM users
		WHERE ID = ". $id ." ;";

	$user_result = mysql_query($find_user_query);
	$found = mysql_numrows($user_result);

	if ($found == 1) {
		if (mysql_result($user_result, 0, "type") == "admin") {
			echo "
				<button class = 'btn btn-primary' ng-click = 'editPage()'> <span class = 'glyphicon glyphicon-pencil'> </span> </button>
			";
		}
	}
?>