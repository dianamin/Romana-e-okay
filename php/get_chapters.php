<?php
	include 'db_connect.php';
	mysql_query("set names 'utf8'");
	$chapters_query = "
		SELECT *
		FROM chapters;";

	$chapters_result = mysql_query($chapters_query);
	$chapters_count = mysql_numrows($chapters_result);
	
	$chapters = array();
	for ($i = 0; $i < $chapters_count; $i++) {
		$aux = array(
			"id" => mysql_result($chapters_result, $i, "id"),
			"name" => mysql_result($chapters_result, $i, "name")
		);
		array_push($chapters, $aux);
	}

	echo json_encode($chapters);
?>