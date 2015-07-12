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
			FROM table" . $id . "
			ORDER BY id DESC";

		$table_result = mysql_query($find_table);
		$comments_count = mysql_numrows($table_result);

		if ($comments_count == 0 || $comments_count == NULL) {
			echo "<h5> Nu ai salvat niciun comentariu încă! </h5>";
		}
		else {
			echo "<table class = 'table table-striped'>";
			echo "<thead> <tr> <th> # </th> <th> Comentariu </th> </tr> </thead>";
			echo "<tbody> ";
			for ($i = 1; $i <= $comments_count; $i++) {	
				echo "<tr> <td> " . $i . ". </td> <td style = 'text-align: justify;'> " . mysql_result($table_result, $i - 1, "homework") . " </td> </tr>";
			}
			echo "</tbody>";
			echo "</table>";
		}
	}
?>