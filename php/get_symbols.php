<?php
/*
	Gets symbols from database.
	Used in symbols.js, figuriInterpreter.js
*/
	include 'db_connect.php';

	mysql_query("set names 'utf8'");

	$query = "
		SELECT * 
		FROM symbols";
	$result = mysql_query($query);
	$count = mysql_numrows($result);

	$symbols = array();
	$aux = array();

	for ($i = 0; $i < $count; $i++) {
		$aux = array(
			"name" => mysql_result($result, $i, "symbol"),
			"description" => mysql_result($result, $i, "description"),
			"noDiacritics" => "",
			"id" => mysql_result($result, $i, "id"),
			"index" => $i
		);
		array_push($symbols, $aux);
	}

	echo json_encode($symbols);
?>