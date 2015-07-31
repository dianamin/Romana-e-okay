<?php
/*
	Marks read lesson as not read by user.
	Used in myAccount.js
*/
	include 'db_connect.php';
	mysql_query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];
	$lesson = $_POST["lesson"];

	if ($id != 0) {
		$unread_lesson_query = "DELETE FROM progress WHERE id_lesson = " . $lesson . " AND id_user = " . $id . ";";
		echo $unread_lesson_query;
		$unread_lesson = mysql_query($unread_lesson_query);
	}
?>