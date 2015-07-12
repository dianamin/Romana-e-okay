<?php
	include 'db_connect.php';
	$s = $_POST['s'];
	session_start();
	$id = $_SESSION["id"];

	$insert_text = "INSERT INTO essays(id_user, id, homework) VALUES (" . $id . ", 'NULL', '". $s ."')";
	$inserted_query = mysql_query($insert_text);

?>