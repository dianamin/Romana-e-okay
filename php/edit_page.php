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
			$version = 1 - mysql_result($page_result, 0, "version");
			$file = "../" . $url . $version . ".html";
			$new_content = $_POST['new_content'];
			file_put_contents($file, $new_content);
			$update_version_query = "
			UPDATE lessons
			SET version = ". $version . "
			WHERE global_id = " . $page_id . ";";
			$version_result = mysql_query($update_version_query);
			echo $file;
		}
	}
?>