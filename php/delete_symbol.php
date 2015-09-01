<?php
/*	
	Deletes symbol from database.
	Used in symbols.js.
*/
	include 'db_connect.php';

	$DB->query("set names 'utf8'");
	
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
		$symbol_id = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
		$delete_query = "
			DELETE
			FROM symbols
			WHERE id = '{$symbol_id}' ";

		//echo $delete_query;

		$delete_result = $DB->query($delete_query);
	}

	else echo ":(";

?>
