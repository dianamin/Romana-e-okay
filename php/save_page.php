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

		$url = mysql_result($page_result, 0, "page");
		$version = 1 - mysql_result($page_result, 0, "version");
		$file = "../" . $url . $version . ".html";
		$new_content = $_POST['new_content'];
		$new_chapter = $_POST['new_chapter'];
		$new_img = $_POST['new_img'];
		$new_type = $_POST['new_type'];
		$new_name = $_POST['new_name'];
		$new_author = $_POST['new_author'];
		file_put_contents($file, $new_content);

		$new_page = "abc.html";

		echo "abc";

		$insert_query = "
			INSERT INTO lessons (global_id, id, chapter_id, name, author, type, img, page, version)
			VALUES (NULL, 1, '$new_chapter', '$new_name', '$new_author', '$new_type', '$new_img', '$new_page', 0)";
		/*$update_query = "
		UPDATE lessons
		SET chapter_id = ". $new_chapter .",
			name = '" . $new_name . "',
			author = '" . $new_author . "',
			type = '" . $new_type . "',
			img = '" . $new_img . "',
			version = ". $version . "
		WHERE global_id = " . $page_id . ";";
	*/
		//echo $update_query;

		$insert_result = mysql_query($insert_query);
		//echo $file;

	}
?>