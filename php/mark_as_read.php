<?php
	include 'db_connect.php';
	mysql_query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];
	$lesson = $_POST["lesson"];

	if ($id != 0) {
		$read_lesson_query = "
			INSERT INTO progress (id, id_user, id_lesson)
			VALUES ('NULL', '$id', '$lesson')
		;";
		$read_lesson = mysql_query($read_lesson_query);
		echo $read_lesson_query;
	}
?>