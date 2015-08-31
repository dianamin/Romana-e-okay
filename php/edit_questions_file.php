<?php
/*	
	Editing questions in admin view.
	Used in questions.js
*/
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];
	$DB->query("set names 'utf8'");

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}'";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$page_id = $_POST['id'];
		$content = $_POST['content'];
		$file = "../json/questions/" . $page_id . ".json";
		file_put_contents($file, $content);
		echo ":)";
	}
	else echo ":(";
		
?>
