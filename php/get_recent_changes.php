<?php
/*
	Gets latest 20 lesson changes from database.
	Used in adminPanel.js, figuriInterpreter.js
*/
	include 'db_connect.php';

	$select_changes_query = "
		SELECT *
		FROM changes
		ORDER BY date DESC
	";

	$select_changes = $DB->query($select_changes_query);
	$count = $select_changes->num_rows;
	$change = $select_changes->fetch_all(MYSQLI_ASSOC);

	if ($count > 20) $count = 20;
	$changes = array();
	$aux = array();

	for ($i = 0; $i < $count; $i++) {
		$aux = array(
			"name" => $change[$i]['lesson_name'],
			"date" => $change[$i]['date'],
			"operation" => $change[$i]['operation']
		);
		array_push($changes, $aux);
	}

	echo json_encode($changes);
?>
