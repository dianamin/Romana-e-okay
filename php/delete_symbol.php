<?php
/*	
	Deletes symbol from database.
	Used in symbols.js.
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
		$delete_query = "
			DELETE
			FROM symbols
			WHERE id = " . $symbol_id . ";";

		echo $delete_query;

		$delete_result = mysql_query($delete_query);
	}

	else echo ":(";

?>