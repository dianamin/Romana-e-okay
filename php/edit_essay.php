<?php
/*	
	Edits user's essay.
	Used in myComments.js
*/
	include 'db_connect.php';
	
	$id_essay = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
	$content = isset($_POST['content']) ? $DB->real_escape_string($_POST['content']) : NULL;
	$id = $_SESSION["id"];

	$find_essay_query = "
		SELECT *
		FROM essays
		WHERE id = '{$id_essay}'";
	$find_essay = $DB->query($find_essay_query);
	$essay = $find_essay->fetch_array(MYSQLI_ASSOC);

	if ($find_essay->num_rows == 1) {
		if ($essay['id_user'] == $id) {
			$edit_query = "	
				UPDATE essays
				SET homework = '{$content}'
				WHERE id = '{$id_essay}' ";
			$edit = $DB->query($edit_query);
		}
	}
?>
