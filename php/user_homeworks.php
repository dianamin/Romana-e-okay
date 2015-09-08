<?php
/*
	Gets user's saved essays.
	Used in commentsFactory.js.
*/

	include 'db_connect.php';
	
	$id = $_SESSION["id"];
	$essays_arr = array();
	$aux = array();

	if ($id != 0) {
		$get_essays = "
			SELECT *
			FROM essays
			WHERE id_user = "{$id}"
			ORDER BY id DESC";

		$essays = $DB->query($get_essays);
		$essays_count = $essays->num_rows;
		$essay = $essays->fetch_all(MYSQLI_ASSOC);
		
		if ($essays_count != 0) {
			for ($i = 0; $i < $essays_count; $i++) {
				$get_ratings = "
					SELECT *
					FROM ratings
					WHERE id_essay = '{$essay[$i]['id']}' ";
				$ratings = $DB->query($get_ratings);
				$count = $ratings->num_rows;
				$rating = $ratings->fetch_all(MYSQLI_ASSOC);

				$total_rating = 0;
				$average = 0;

				for ($j = 0; $j < $count; $j++) {
					$total_rating = $total_rating + $rating[$j]['rating'];
				}


				if ($count == 0) $average = 0;
				else $average = $total_rating / $count;

				$aux = array (
					"index" => $i,
					"id" => $essay[$i]['id'],
					"content" => $essay[$i]['homework'], 
					"tags" => $essay[$i]['tags'],
					"public" => $essay[$i]['public'],
					"average" => $average,
					"ratedBy" => $count
				);
				array_push($essays_arr, $aux);
				//echo "<tr> <td> " . $i . ". </td> <td style = 'text-align: justify;'> " . mysql_result($essays, $i - 1, "homework") . " </td> </tr>";
			}

			/*echo "</tbody>";
			echo "</table>";*/
		}

		echo json_encode($essays_arr);
	}
?>
