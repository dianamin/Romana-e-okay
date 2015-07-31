<?php
/*
	Used for editing questions in admin view.
	Used in questions.js
*/
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];
	mysql_query("set names 'utf8'");

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = ". $id ." ;";

	$id_result = mysql_query($find_id_query);
	$id_found = mysql_numrows($id_result);

	if ($id_found == 1 && mysql_result($id_result, 0, "type") == "admin") {
		$page_id = $_POST['id'];
		$file = "../json/questions/" . $page_id . ".json";
		echo file_get_contents($file);
	}
	else echo ":(";
		
?>