<?php
/*	
	Gets public essays made by users.
	Used in publishedEssays.js, reportedEssays.js. 
*/
	include 'db_connect.php';
	
	session_start();
	$id = $_SESSION['id'];
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
			$get_ratings = "
			SELECT *
			FROM ratings
			WHERE id_essay = " . mysql_result($essays, $i, "id") . ";";
			$ratings = mysql_query($get_ratings);
			$count = mysql_numrows($ratings);

			$total_rating = 0;
			$average = 0;

			for ($j = 0; $j < $count; $j++) {
				$total_rating = $total_rating + mysql_result($ratings, $j, "rating");
			}

			$get_given_rating_query =  "
				SELECT *
				FROM ratings
				WHERE id_essay = " . mysql_result($essays, $i, "id") . "
				AND id_user = " . $id . ";";

			$get_given_rating = mysql_query($get_given_rating_query);
			if (mysql_numrows($get_given_rating)) {
				$given_rating = mysql_result($get_given_rating, 0, "rating");
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
				"id" => mysql_result($essays, $i, "id"),
				"content" => mysql_result($essays, $i, "homework"), 
				"tags" => mysql_result($essays, $i, "tags"),
				"givenRating" => $given_rating,
				"totalRating" => $total_rating,
				"ratedBy" => $count,
				"initialRating" => $given_rating,
				"average" => $average,
				"ratedByMe" => $rated_by_user,
				"reported" => mysql_result($essays, $i, "reported")
			);
			array_push($essays_arr, $aux);
			//echo "<tr> <td> " . $i . ". </td> <td style = 'text-align: justify;'> " . mysql_result($essays, $i - 1, "homework") . " </td> </tr>";
		}

		/*echo "</tbody>";
		echo "</table>";*/
	}

	echo json_encode($essays_arr);
?>