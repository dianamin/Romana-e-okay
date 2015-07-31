<?php
/*
	Gets lessons from database. 
	Used in adminList.js, createPage.js, questions.js, pageChanging.js.
*/

	include 'db_connect.php';

	mysql_query("set names 'utf8'");

	$query = "
		SELECT * 
		FROM lessons";
	$result = mysql_query($query);
	$num = mysql_numrows($result);


	$creations = array();
	$aux = array();
	header('Content-type: text/html; charset = utf-8');

	for ($i = 0; $i < $num; $i++) {	
		$aux = array(
			"index" => $i,
			"global_id" => mysql_result($result, $i, "global_id"),
			"chapter_id" => mysql_result($result, $i, "chapter_id"),
			"name" => mysql_result($result, $i, "name"),
			"author" => mysql_result($result, $i, "author"),
			"type" => mysql_result($result, $i, "type"),
			"img" => mysql_result($result, $i, "img"),
			"page" => mysql_result($result, $i, "page"),
			"version" => mysql_result($result, $i, "version")
		);
		array_push($creations, $aux);
	}

	echo json_encode($creations); 
?>