<?php
/*	
	Gets public essays made by users.
	Used in publishedEssays.js, reportedEssays.js. 
*/
	include 'db_connect.php';

	$id = $_SESSION['id'];
	$essays_arr = array();
	$aux = array();

	$get_essays = "
		SELECT *
		FROM essays
		WHERE public = 1 
		ORDER BY id DESC";

	$essays = $DB->query($get_essays);
	$essays_count = $essays->num_rows;
	$essay = $essays->fetch_array(MYSQLI_ASSOC);

	if ($essays_count != 0) {
		/*echo "<table class = 'table table-striped'>";
		echo "<thead> <tr> <th> # </th> <th> Comentariu </th> </tr> </thead>";
		echo "<tbody> ";*/
		for ($i = 0; $i < $essays_count; $i++) {
			$get_ratings = "
			SELECT *
			FROM ratings
			WHERE id_essay = '{$essay[$i]['id']}' ";
			$ratings = $DB->query($get_ratings);
			$count = $ratings->num_rows;
			$rate = $ratings->fetch_array(MYSQLI_ASSOC);
			
			$total_rating = 0;
			$average = 0;

			for ($j = 0; $j < $count; $j++) {
				$total_rating = $total_rating + $rate[$i]['rating'];
			}

			$get_given_rating_query =  "
				SELECT *
				FROM ratings
				WHERE id_essay = '{$rate[$i]['id']}'
				AND id_user = '{$id}' ";

			$get_given_rating = $DB->query($get_given_rating_query);
			$rate = $get_given_rating->fetch_array(MYSQLI_ASSOC);
			if ($get_given_rating->num_rows) {
				$given_rating = $rate['rating'];
				$rated_by_user = 1;
			}
			else {
				$given_rating = 0;
				$rated_by_user = 0;
			}

			if ($count == 0) $average = 0;
			else $average = $total_rating / $count;

			$aux = array (
				"index" => $i,
				"id" => $essay[$i]['id'],
				"content" => $essay[$i]['homework'], 
				"tags" => $essay[$i]['tags'],
				"givenRating" => $given_rating,
				"totalRating" => $total_rating,
				"ratedBy" => $count,
				"initialRating" => $given_rating,
				"average" => $average,
				"ratedByMe" => $rated_by_user,
				"reported" => $essay[$i]['reported']
			);
			array_push($essays_arr, $aux);
			//echo "<tr> <td> " . $i . ". </td> <td style = 'text-align: justify;'> " . mysql_result($essays, $i - 1, "homework") . " </td> </tr>";
		}

		/*echo "</tbody>";
		echo "</table>";*/
	}

	echo json_encode($essays_arr);
?>
