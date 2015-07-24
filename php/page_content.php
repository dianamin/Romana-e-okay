<?php
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = ". $id ." ;";

	$id_result = mysql_query($find_id_query);
	$id_found = mysql_numrows($id_result);

	if ($id_found == 1 && mysql_result($id_result, 0, "type") == "admin") {
		$page = "../" . $_SESSION["editable_page"];
		$file_content = file_get_contents($page);
		echo $file_content;
	}
	else echo ":(";

?>