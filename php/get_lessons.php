<?php
/*
	Gets lessons from database. 
	Used in adminList.js, createPage.js, questions.js, pageChanging.js.
*/

	include 'db_connect.php';

	$DB->query("set names 'utf8'");

	$query = "
		SELECT * 
		FROM lessons";
	$result = $DB->query($query);
	$num = $result->num_rows;
	$lesson = $result->fetch_array(MYSQLI_ASSOC);

	$creations = array();
	$aux = array();
	header('Content-type: text/html; charset = utf-8');

	for ($i = 0; $i < $num; $i++) {	
		$aux = array(
			"index" => $i,
			"global_id" => $lesson[$i]['global_id'],
			"chapter_id" => $lesson[$i]['chapter_id'],
			"name" => $lesson[$i]['name'],
			"author" => $lesson[$i]['author'],
			"type" => $lesson[$i]['type'],
			"img" => $lesson[$i]['img'],
			"page" => $lesson[$i]['page'],
			"version" => $lesson[$i]['version']
		);
		array_push($creations, $aux);
	}

	echo json_encode($creations); 
?>
