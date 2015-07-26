<?php
	include 'db_connect.php';
	$id_essay = $_POST['id'];
	session_start();
	$id = $_SESSION["id"];

	$find_essay_query = "
		SELECT *
		FROM essays
		WHERE id = ". $id_essay ." ;";
	$find_essay = mysql_query($find_essay_query);
	$essay_found = mysql_numrows($find_essay);

	if ($essay_found == 1) {
		if (mysql_result($find_essay, 0, "id_user") == $id) {
			$status = mysql_result($find_essay, 0, "public");
			if ($status == 0) $status = 1;
			else $status = 0;
			$edit_query = "	UPDATE essays
							SET public = '". $status . "'
							WHERE id = " . $id_essay . ";";;
			echo $edit_query;
			$edit = mysql_query($edit_query);
		}
	}
?>