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
		$new_page = $_POST['new_page'];

		$path = "../" . $new_page . "0.html";
		$file = fopen($path, "w");
		fwrite($file, $new_content);
		echo $path;

		$file2 = fopen("../" . $new_page . "1.html", "w");
		fwrite($file2, $new_content);

		echo $new_content ."abc";
		$insert_query = "
			INSERT INTO lessons (global_id, chapter_id, name, author, type, img, page, version)
			VALUES (NULL, '$new_chapter', '$new_name', '$new_author', '$new_type', '$new_img', '$new_page', 0)";
		
		$insert_result = mysql_query($insert_query);
		
		$insert_change_query = "
			INSERT INTO changes (id, lesson_name, operation, date)
			VALUES ('NULL', '$new_name', 'create', now())";
		
		$insert_change_result = mysql_query($insert_change_query);
		echo ":)";
	}
	else echo ":(";
?>