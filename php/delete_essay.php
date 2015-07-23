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
			$delete_query = "DELETE FROM essays WHERE id = " . $id_essay . " ;";
			$deleted = mysql_query($delete_query);
		}
	}
?>