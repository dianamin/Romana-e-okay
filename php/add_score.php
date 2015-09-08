<?php
/*
	Updates user score
	Used in game.js
*/
	include 'db_connect.php';

	$id = isset($_POST['id']) ? (int)mysql_real_escape_string($_POST['id']) : NULL;
	$score = isset($_POST['score']) ? (int)mysql_real_escape_string($_POST['score']) : NULL;
	$find_user_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}'";

	$user_result = @$DB->query($find_user_query);

	if ($user_result->num_rows != 0) {
		//$score = floor($score / 10) + mysql_result($user_result, 0, "score");
		$update_score_query = "
			UPDATE users
			SET score = score + $score
			WHERE id = '{$id}'";

		$score_result = @$DB->query($update_score_query);
	}

	echo $score;
?>
