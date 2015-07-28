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
			$prev_version = 1 - $version;
			$prev_file = "../" . $url . $prev_version . ".html";
			$prev_file_content = file_get_contents($prev_file);


			$crt_file = fopen("../" . $url . $version . ".html", "r");
			$prev_file = fopen("../" . $url . $prev_version . ".html", "r");

			$crt = array();
			$prev = array();
			$result = array();

			while(!feof($crt_file)) {
				array_push($crt, fgets($crt_file));
			}
			fclose($crt_file);

			while(!feof($prev_file)) {
				array_push($prev, fgets($prev_file));
			}
			fclose($prev_file);
			
			$index_crt = count($crt);
			$index_prev = count ($prev);

			while ($i >= 0 && $j >= 0) {

			}



			$content = array(
				"current" => $file_content,
				"previous" => $prev_file_content
			);
			echo json_encode($content);
			
		}
	}
	else echo ":(";

?>