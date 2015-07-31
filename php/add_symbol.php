<?php
/*	
	Adds symbol to database, in admin view.
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
		$symbol_new_name = $_POST['name'];
		$symbol_new_description = $_POST['description'];

		$insert_query = "
			INSERT INTO symbols (id, symbol, description)
			VALUES('NULL', '$symbol_new_name', '$symbol_new_description');";
	
		echo $insert_query;

		$insert_result = mysql_query($insert_query);
	}

	else echo ":(";

?>