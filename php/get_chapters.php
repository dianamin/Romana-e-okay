<?php
/*	
	Reads chapters from database.
	Used in adminList.js, createPage.js, editPage.js.
*/
	include 'db_connect.php';
	$DB->query("set names 'utf8'");
	$chapters_query = "
		SELECT *
		FROM chapters";

	$chapters_result = $DB->query($chapters_query);
	$chapters_count = $chapters_result->num_rows;
	$chapter = $chapters_result->fetch_all(MYSQLI_ASSOC);
	
	$chapters = array();
	for ($i = 0; $i < $chapters_count; $i++) {
		$aux = array(
			"id" => $chapter[$i]['id'],
			"name" => $chapter[$i]['name']
		);
		array_push($chapters, $aux);
	}

	echo json_encode($chapters);
?>
