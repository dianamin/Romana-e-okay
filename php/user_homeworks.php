<?php
	include 'db_connect.php';
	
	session_start();
	$id = $_SESSION["id"];


	if ($id == 0) {
		echo "<h5> Trebuie să te autentifici pentru a salva comentarii! </h5>";
	}
	else {
		$find_table = "
			SELECT *
			FROM table" . $id;

		$table_result = mysql_query($find_table);
		$comments_count = mysql_numrows($table_result);

		if ($comments_count == 0 || $comments_count == NULL) {
			echo "<h5> Nu ai salvat niciun comentariu încă! </h5>";
		}
		else {
			for ($i = 0; $i < $comments_count; $i++) {	
				echo mysql_result($table_result, $i, "id") . " " . mysql_result($table_result, $i, "homework") . "<br />";
			}
		}
	}
?>