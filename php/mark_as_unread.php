<?php
/*
	Marks read lesson as not read by user.
	Used in myAccount.js
*/
	include 'db_connect.php';

	$id = $_SESSION["id"];
	$lesson = $_POST["lesson"];

	if ($id != 0) {
		$unread_lesson_query = "DELETE FROM progress WHERE id_lesson = '{$lesson}' AND id_user = '{$id}' ";
		//echo $unread_lesson_query;
		$unread_lesson = $DB->query($unread_lesson_query);
	}
?>
