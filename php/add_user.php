<?php
	include 'db_connect.php';

	$id = $_POST['id'];
	$name = $_POST['name'];
	echo $id . " " . $name . " ";
	$find_id_query = "
		SELECT *
		FROM Users
		WHERE ID = ". $id ." ;";

	$id_result = mysql_query($find_id_query);
	$id_found = mysql_numrows($id_result);
	echo $id_found;
	if ($id_found == 0) {
		$insert_user = "INSERT INTO Users (ID, Name, Score) VALUES ('$id', '$name', 0)";
		$inserted = mysql_query($insert_user);
	}
?>