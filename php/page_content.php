<?php
/*	
	Gets page file content.
	Used in editPage.js
*/
	include 'db_connect.php';
	
	$id = $_SESSION["id"];

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$page_id = file_get_contents("php://input");

		$find_page_query = "
			SELECT *
			FROM lessons
			WHERE global_id = '{$page_id}' ";

		$page_result = $DB->query($find_page_query);
		$page_found = $page_result->num_rows;
		$page = $page_result->fetch_array(MYSQLI_ASSOC);


		if ($page_found == 1) {
			$name = $page['page'];
			$url = $page['page'];
			$version = $page['version'];
			$file = "../" . $url . $version . ".html";
			$file_content = file_get_contents($file);
			$prev_version = 1 - $version;
			$prev_file = "../" . $url . $prev_version . ".html";
			$prev_file_content = file_get_contents($prev_file);

			$content = array(
				"name" => $name,
				"current" => $file_content,
				"previous" => $prev_file_content,
				"chapterId" => $page['chapter_id'],
				"img" => $page['img'],
				"type" => $page['type'],
				"author" => $page['author']
			);
			echo json_encode($content);
			
		}
	}
	else echo ":(";
		
?>
