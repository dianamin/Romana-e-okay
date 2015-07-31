<?php
/*
	Used for reporting (unpublishing for admin) an essay.
	Used in publishedEssays.js, reportedEssays.js.
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

	$id_essay = $_POST['id_essay'];

	if ($found == 1) {
		if (mysql_result($user_result, 0, "type") == "admin") {
			echo "Comentariul a fost retras!";
			$unpublish_query = "UPDATE essays
							SET public = '0'
							WHERE id = " . $id_essay . ";";
			$unpublish = mysql_query($unpublish_query);
		}
		else {
			echo "Comentariul a fost raportat!";
			$unpublish_query = "UPDATE essays
							SET reported = '1'
							WHERE id = " . $id_essay . ";";
			$unpublish = mysql_query($unpublish_query);
		}
		else echo ":(";
	}
?>