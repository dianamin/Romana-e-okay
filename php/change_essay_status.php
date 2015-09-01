<?php
/*
	Publishes or unpublishes user's essay.
	Used in myComments.js
*/
	include 'db_connect.php';
	$id_essay = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
	session_start();
	$id = $_SESSION["id"];

	$find_essay_query = "
		SELECT *
		FROM essays
		WHERE id = {$id_essay}";
	$find_essay = $DB->query($find_essay_query);
	$essay = $find_essay->fetch_array(MYSQLI_ASSOC);

	if ($find_essay->num_rows == 1) {
		if ($essay['id_user'] == $id) {
			$status = $essay['public'];
			$status = ($status == 0) ? 1 : 0;
			
			$edit_query = "	UPDATE essays
							SET public = '{$status}'
							WHERE id = '{$id_essay}'";
			//echo $edit_query;
			$edit = $DB->query($edit_query);
		}
	}
?>
