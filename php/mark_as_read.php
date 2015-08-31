<?php
/*	
	Marks lesson as read by user.
	Used in pageChanging.js
*/
	include 'db_connect.php';
	$DB->query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];
	$lesson = $_POST["lesson"];

	if ($id != 0) {
		$read_lesson_query = "
			INSERT INTO progress (id, id_user, id_lesson)
			VALUES ('NULL', '$id', '$lesson')
		";
		$read_lesson = $DB->query($read_lesson_query);
		echo $read_lesson_query;
	}
?>
