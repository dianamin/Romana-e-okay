<?php
/*
	Gets symbols from database.
	Used in symbols.js, figuriInterpreter.js
*/
	include 'db_connect.php';

	$DB->query("set names 'utf8'");

	$query = "
		SELECT * 
		FROM symbols";
	$result = $DB->query($query);
	$count = $result->num_rows;
	$symbol = $result->fetch_array(MYSQLI_ASSOC);

	$symbols = array();
	$aux = array();

	for ($i = 0; $i < $count; $i++) {
		$aux = array(
			"name" => $symbol[$i]['symbol'],
			"description" => $symbol[$i]['description'],
			"noDiacritics" => "",
			"id" => $symbol[$i]['description'],
			"index" => $i
		);
		array_push($symbols, $aux);
	}

	echo json_encode($symbols);
?>
