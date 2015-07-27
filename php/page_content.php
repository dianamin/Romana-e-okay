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
		$page_id = $_SESSION["editable_page"];

		$find_page_query = "
			SELECT *
			FROM lessons
			WHERE global_id = ". $page_id ." ;";

		$page_result = mysql_query($find_page_query);
		$page_found = mysql_numrows($page_result);


		if ($page_found == 1) {
			$url = mysql_result($page_result, 0, "page");
			$version = mysql_result($page_result, 0, "version");
			$file = "../" . $url . $version . ".html";
			$file_content = file_get_contents($file);
			echo $file_content;
		}
	}
	else echo ":(";

?>