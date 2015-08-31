<?php
/*
	Updates rating given by user to a public essay.
	Used in published_essays.php
*/
	include 'db_connect.php';
	$id_essay = $_POST['id_essay'];
	$rating = $_POST['rating'];
	session_start();
	$id = $_SESSION["id"];

	$find_essay_query = "
		SELECT *
		FROM ratings
		WHERE id_essay = '{$id_essay}' 
		AND id_user = '{$id}' ";
	$find_essay = $DB->query($find_essay_query);
	$essay_found = $find_essay->num_rows;

	echo $rating;

	if ($essay_found == 1) {
		$edit_query = "
			UPDATE ratings
			SET rating = '{$rating}'
			WHERE id_essay = '{$id_essay}'
			AND id_user = '{$id}' ";
		$edit = $DB->query($edit_query);
	}
	else {
		$insert_query = "INSERT INTO ratings (id_user, id_essay, rating) VALUES ('{$id}', '{$id_essay}', '{$rating}')";
		$inserted = $DB->query($insert_query);
	}
?>
