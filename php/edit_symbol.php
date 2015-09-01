<?php
/*	
	Edits symbol in admin view.
	Used in symbols.js
*/

	include 'db_connect.php';

	$DB->query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];

	$DB->query("set names 'utf8'");
	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$symbol_id = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
		$symbol_new_name = isset($_POST['name']) ? $DB->real_escape_string($_POST['name']) : NULL;
		$symbol_new_description = isset($_POST['description']) ? $DB->real_escape_string($_POST['description']) : NULL;;

		$update_query = "
			UPDATE symbols
			SET symbol = '". $symbol_new_name ."',
				description = '" . $symbol_new_description . "'
			WHERE id = '{$symbol_id}'";

		//echo $update_query;

		$update_result = $DB->query($update_query);
	}

	else echo ":(";

?>
