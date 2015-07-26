<?php
	include 'db_connect.php';
	$s = $_POST['s'];
	$t = $_POST['tags'];
	session_start();
	$id = $_SESSION["id"];
	$insert_text = "INSERT INTO essays(id_user, id, homework, tags) VALUES (" . $id . ", 'NULL', '". $s . "', '" . $t ."')";
	echo $insert_text;
	$inserted_query = mysql_query($insert_text);
?>