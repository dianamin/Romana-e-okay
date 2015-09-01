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
		WHERE id = {$id}";

	$user_result = $DB->query($find_user_query);
	$user = $user_result->fetch_array(MYSQLI_ASSOC);

	if ($user_result->num_rows == 1) {
		if ($user['type'] == "admin") {
			echo "
				<button class = 'btn btn-primary' ng-click = 'editPage()'> <span class = 'glyphicon glyphicon-pencil'> </span> </button>
			";
		}
	}
?>
