<?php
/*	
	Editing lesson in admin view and adding editing to recent changes
	Used in editPage.js
*/
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];

	$DB->query("set names 'utf8'");
	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$page_id = isset($_POST['lesson_id']) ? $DB->real_escape_string($_POST['lesson_id']) : NULL;

		$find_page_query = "
			SELECT *
			FROM lessons
			WHERE global_id = '{$page_id}'";

		$page_result = $DB->query($find_page_query);
		$page = $page_result->fetch_array(MYSQLI_ASSOC);


		if ($page_result->num_rows == 1) {
			$url = $page['page'];
			$version = 1 - $page['version'];
			$file = "../" . $url . $version . ".html";
			$new_content = $_POST['new_content'];
			$new_chapter = $_POST['new_chapter'];
			$new_img = $_POST['new_img'];
			$new_type = $_POST['new_type'];
			$new_name = $_POST['new_name'];
			$new_author = $_POST['new_author'];
			file_put_contents($file, $new_content);
			$update_query = "
			UPDATE lessons
			SET chapter_id = ". $new_chapter .",
				name = '" . $new_name . "',
				author = '" . $new_author . "',
				type = '" . $new_type . "',
				img = '" . $new_img . "',
				version = ". $version . "
			WHERE global_id = " . $page_id . ";";


			$update_result = $DB->query($update_query);

			$update_change_query = "
				INSERT INTO changes (id, lesson_name, operation, date)
				VALUES ('NULL', '$new_name', 'edit', now())";
			
			$update_change_result = $DB->query($update_change_query);
			echo ":)";
		}
	}
	else echo ":(";
?>
