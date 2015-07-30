<?php
	include 'db_connect.php';

	$select_changes_query = "
		SELECT *
		FROM changes
		ORDER BY date DESC;
	";

	$select_changes = mysql_query($select_changes_query);
	$count = mysql_numrows($select_changes);

	if ($count > 20) $count = 20;
	$changes = array();
	$aux = array();

	for ($i = 0; $i < $count; $i++) {
		$aux = array(
			"name" => mysql_result($select_changes, $i, "lesson_name"),
			"date" => mysql_result($select_changes, $i, "date"),
			"operation" => mysql_result($select_changes, $i, "operation")
		);
		array_push($changes, $aux);
	}

	echo json_encode($changes);
?>