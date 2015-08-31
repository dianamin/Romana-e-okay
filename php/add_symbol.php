<?php
/*	
	Adds symbol to database, in admin view.
	Used in symbols.js
*/
	include 'db_connect.php';

	//mysql_query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];

	$DB->query("set names 'utf8'");
	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = {$id}";

	$data = $DB->query($find_id_query);
	$user = $data->fetch_array(MYSQLI_ASSOC);

	if ($data->num_rows == 1 && $type['type'] == "admin") {
		$symbol_new_name = isset($_POST['name']) ? $DB->real_escape_string($_POST['name']) : NULL;
		$symbol_new_description = isset($_POST['description']) ? $DB->real_escape_string($_POST['description']) : NULL;

		$insert_query = "
			INSERT INTO symbols (id, symbol, description)
			VALUES('NULL', '$symbol_new_name', '$symbol_new_description')";
	
		//echo $insert_query;

		 $DB->query($insert_query);
	}

	else echo ":(";

?>
