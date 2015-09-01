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
		WHERE id = '{$id}' ";

	$user_result = $DB->query($find_user_query);
	$found = $user_result->num_rows;
	$data = $user_result->fetch_array(MYSQLI_ASSOC);
	
	$id_essay = $_POST['id_essay'];

	if ($found == 1) {
		if ($data['type'] == "admin") {
			echo "Comentariul a fost retras!";
			$unpublish_query = "UPDATE essays
							SET public = '0'
							WHERE id = '{$id_essay}' ";
			$unpublish = $DB->query($unpublish_query);
		}
		else {
			echo "Comentariul a fost raportat!";
			$unpublish_query = "UPDATE essays
							SET reported = '1'
							WHERE id = '{$id_essay}' ";
			$unpublish = $DB->query($unpublish_query);
		}
	}
?>
