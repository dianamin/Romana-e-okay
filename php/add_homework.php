<?php
/*	
	Adds an essay generated in TemeMaker to the database.
	Used in usefulFunctions.js
*/

	include 'db_connect.php';
	
	$s = isset($_POST['s']) ? $DB->real_escape_string($_POST['s']) : NULL;
	$t = isset($_POST['tags']) ? $DB->real_escape_string($_POST['tags']) : NULL;

	$id = isset($_SESSION["id"]) ? $_SESSION['id'] : NULL;
	
	$insert_text = "INSERT INTO essays(id_user, id, homework, tags, public, reported) VALUES ('{$id}' , 'NULL', '{$s}', '{$t}', 'false', 0)";
	
	//echo $insert_text; why ??
	
	$inserted_query = @$DB->query($insert_text);
?>
