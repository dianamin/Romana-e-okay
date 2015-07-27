<?php
	include 'db_connect.php';
	
	session_start();
	$essays_arr = array();
	$aux = array();

	$get_essays = "
		SELECT *
		FROM essays
		WHERE public = 1 
		ORDER BY id DESC";

	$essays = mysql_query($get_essays);
	$essays_count = mysql_numrows($essays);

	if ($essays_count != 0) {
		/*echo "<table class = 'table table-striped'>";
		echo "<thead> <tr> <th> # </th> <th> Comentariu </th> </tr> </thead>";
		echo "<tbody> ";*/
		for ($i = 0; $i < $essays_count; $i++) {	
			$aux = array (
				"index" => $i,
				"id" => mysql_result($essays, $i, "id"),
				"content" => mysql_result($essays, $i, "homework"), 
				"tags" => mysql_result($essays, $i, "tags")
			);
			array_push($essays_arr, $aux);
			//echo "<tr> <td> " . $i . ". </td> <td style = 'text-align: justify;'> " . mysql_result($essays, $i - 1, "homework") . " </td> </tr>";
		}

		/*echo "</tbody>";
		echo "</table>";*/
	}

	echo json_encode($essays_arr);
?>