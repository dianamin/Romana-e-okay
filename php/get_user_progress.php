<?php
	include 'db_connect.php';
	mysql_query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];
	$lessons_arr = array();
	$aux = array();

	if ($id != 0) {

		$get_lessons = "
			SELECT *
			FROM lessons
		;";
		$lessons = mysql_query($get_lessons);
		$lessons_count = mysql_numrows($lessons);

		for ($i = 0; $i < $lessons_count; $i++) {
			$lesson_id = mysql_result($lessons, $i, "global_id");
			$lesson_name = mysql_result($lessons, $i, "name");
			$read_query = "
				SELECT *
				FROM progress
				WHERE id_user = " . $id . "
				AND id_lesson = " . $lesson_id . "
			;";
			$read_result = mysql_query($read_query);
			$read = mysql_numrows($read_result);
			$aux = array(
				"name" => $lesson_name,
				"id" => $lesson_id,
				"read" => $read 
			);
			array_push($lessons_arr, $aux);
		}

		echo json_encode($lessons_arr);
	}
?>