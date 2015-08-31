<?php
/*
	Gets lessons status - read or not read by user.
	Used in pageChanging.js
*/
	include 'db_connect.php';
	$DB->query("set names 'utf8'");
	
	session_start();
	$id = $_SESSION["id"];
	$lessons_arr = array();
	$aux = array();

	if ($id != 0) {

		$get_lessons = "
			SELECT *
			FROM lessons
		";
		$lessons = $DB->query($get_lessons);
		$lessons_count = $lessons->num_rows;
		$lesson = $lessons->fetch_array(MYSQLI_ASSOC);

		for ($i = 0; $i < $lessons_count; $i++) {
			$lesson_id = $lesson[$i]['global_id'];
			$lesson_name = $lesson[$i]['name'];
			$read_query = "
				SELECT *
				FROM progress
				WHERE id_user =  '{$id}'
				AND id_lesson = '{$lesson_id}' 
			";
			$read_result = $DB->query($read_query);
			$read = $read_result->num_rows;
			$aux = array(
				"name" => $lesson_name,
				"id" => $lesson_id,
				"read" => $read,
				"index" => $i,
				"type" => $lesson[$i]['type']
			);
			array_push($lessons_arr, $aux);
		}

		echo json_encode($lessons_arr);
	}
?>
