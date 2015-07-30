<?php
	include 'db_connect.php';
	$id_essay = $_POST['id_essay'];
	$rating = $_POST['rating'];
	session_start();
	$id = $_SESSION["id"];

	$find_essay_query = "
		SELECT *
		FROM ratings
		WHERE id_essay = ". $id_essay ." 
		AND id_user = " . $id . ";";
	$find_essay = mysql_query($find_essay_query);
	$essay_found = mysql_numrows($find_essay);

	echo $rating;

	if ($essay_found == 1) {
		$edit_query = "
			UPDATE ratings
			SET rating = ". $rating . "
			WHERE id_essay = " . $id_essay . "
			AND id_user = " . $id . ";";
		$edit = mysql_query($edit_query);
	}
	else {
		$insert_query = "INSERT INTO ratings (id_user, id_essay, rating) VALUES ('$id', '$id_essay', '$rating')";
		$inserted = mysql_query($insert_query);
	}
?>