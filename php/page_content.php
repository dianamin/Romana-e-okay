<?php
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
		$page_id = 1;//$_SESSION["editable_page"];

		$find_page_query = "
			SELECT *
			FROM lessons
			WHERE global_id = ". $page_id ." ;";

		$page_result = mysql_query($find_page_query);
		$page_found = mysql_numrows($page_result);


		if ($page_found == 1) {
			$name = mysql_result($page_result, 0, "name");
			$url = mysql_result($page_result, 0, "page");
			$version = mysql_result($page_result, 0, "version");
			$file = "../" . $url . $version . ".html";
			$file_content = file_get_contents($file);
			$prev_version = 1 - $version;
			$prev_file = "../" . $url . $prev_version . ".html";
			$prev_file_content = file_get_contents($prev_file);

			$content = array(
				"name" => $name,
				"current" => $file_content,
				"previous" => $prev_file_content
			);
			echo json_encode($content);
			
		}
	}
	else echo ":(";

?>