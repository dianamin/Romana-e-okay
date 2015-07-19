<?php
	include 'db_connect.php';

	$id = $_POST['id'];
	$score = $_POST['score'];
	$find_user_query = "
		SELECT *
		FROM users
		WHERE ID = ". $id ." ;";

	$user_result = mysql_query($find_user_query);
	$user_found = mysql_numrows($user_result);

	if ($user_found != 0) {
		$score = floor($score / 10) + mysql_result($user_result, 0, "score");
		$update_score_query = "
			UPDATE users
			SET score = ". $score . "
			WHERE id = " . $id . ";";

		$score_result = mysql_query($update_score_query);
	}

	echo $score;
?>