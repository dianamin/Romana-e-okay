<?php
/*	
	Adds user to database if not added.
	Used in facebookLogin.js
*/
	include 'db_connect.php';
	$id = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
	$name = isset($_POST['name']) ? $DB->real_escape_string($_POST['name']) : NULL;
	
	session_start();

	$_SESSION["id"] = $id;

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	
	if ($id_result->num_rows == 0) {
		$insert_user = "INSERT INTO users (id, name, score) VALUES ('{$id}', '{$name}', 0)";
		$inserted = $DB->query($insert_user);
	}
	else {
		$data = $id_result->fetch_array(MYSQLI_ASSOC);
		$user_score = $data['score'];
	}
	echo $user_score;
?>
