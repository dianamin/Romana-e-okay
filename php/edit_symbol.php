<?php
/*	
	Edits symbol in admin view.
	Used in symbols.js
*/

	include 'db_connect.php';

	mysql_query("set names 'utf8'");
	
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
		$symbol_id = $_POST['id'];
		$symbol_new_name = $_POST['name'];
		$symbol_new_description = $_POST['description'];

		$update_query = "
			UPDATE symbols
			SET symbol = '". $symbol_new_name ."',
				description = '" . $symbol_new_description . "'
			WHERE id = " . $symbol_id . ";";

		echo $update_query;

		$update_result = mysql_query($update_query);
	}

	else echo ":(";

?>