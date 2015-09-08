<?php
/*	
	Saved created page in admin view and adding creating to recent changes.
	Used in createPage.js.
*/
	include 'db_connect.php';
;
	$id = $_SESSION["id"];

	$DB->query("set names 'utf8'");
	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}' ";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {

		$url = mysql_result($page_result, 0, "page");
		$version = 1 - mysql_result($page_result, 0, "version");
		$file = "../" . $url . $version . ".html";
		$new_content = $_POST['new_content'];
		$new_chapter = $_POST['new_chapter'];
		$new_img = $_POST['new_img'];
		$new_type = $_POST['new_type'];
		$new_name = $_POST['new_name'];
		$new_author = $_POST['new_author'];
		$new_page = $_POST['new_page'];

		$path = "../" . $new_page . "0.html";
		$file = fopen($path, "w");
		fwrite($file, $new_content);

		$file2 = fopen("../" . $new_page . "1.html", "w");
		fwrite($file2, $new_content);

		$insert_query = "
			INSERT INTO lessons (global_id, chapter_id, name, author, type, img, page, version)
			VALUES (NULL, '$new_chapter', '$new_name', '$new_author', '$new_type', '$new_img', '$new_page', 0)";
		
		$insert_result = $DB->query($insert_query);
		
		$insert_change_query = "
			INSERT INTO changes (id, lesson_name, operation, date)
			VALUES ('NULL', '$new_name', 'create', now())";

		
		$insert_change_result = $DB->query($insert_change_query);


		$get_id_query = "
			SELECT *
			FROM lessons
			WHERE page = " . $new_page . "
		;";
		$get_id = $DB->query($get_id_query);
		$id = $get_id->fetch_array(MYSQLI_ASSOC);
		$count = mysql_numrows($get_id);
		if ($count == 1) {
			$global_id = $id['global_id'];
			$file3 = fopen("../json/questions" . $global_id . "json", "w");
			echo "../json/questions" . $global_id . "json";
			fwrite($file3, "");
		}

		echo ":)";
	}
	else echo ":(";
?>
