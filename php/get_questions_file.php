<?php
/*
	Used for editing questions in admin view.
	Used in questions.js
*/
	include 'db_connect.php';

	$id = $_SESSION["id"];

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$page_id = $_POST['id'];
		$file = "../json/questions/" . $page_id . ".json";
		echo file_get_contents($file);
	}
	else echo ":(";
		
?>
