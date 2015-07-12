<?php
	include 'db_connect.php';
	$s = $_POST['s'];
	session_start();
	$id = $_SESSION["id"];


	$find_table = "
		SELECT *
		FROM " . $id;

	$table_result = mysql_query($find_table);
	$comments_count = mysql_numrows($table_result);

	if ($comments_count == 0 || $comments_count == NULL) {
		$add_table_query = "CREATE TABLE table" . $id ." (
		id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
		homework VARCHAR(100000) COLLATE UTF8_ROMANIAN_CI)";
		echo $add_table_query;
		$add_table = mysql_query($add_table_query);
	}


	$insert_text = "INSERT INTO table". $id . " (id, homework) VALUES ('NULL', '". $s ."')";
	$inserted_query = mysql_query($insert_text);

?>