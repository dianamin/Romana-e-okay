<?php
/*
	Used for approving a reported essay in admin view.
	Used in reportedEssays.js
*/
	include 'db_connect.php';

	$id = $_SESSION["id"];

	$find_user_query = "
		SELECT *
		FROM users
		WHERE ID = '{$id}' ";

	$user_result = $DB->query($find_user_query);
	$found = $user_result->num_rows;
	$user = $user_result->fetch_array(MYSQLI_ASSOC);

	$id_essay = $_POST['id_essay'];

	if ($found == 1) {
		if ($user['type'] == "admin") {
			echo "Comentariul a fost aprobat!";
			$unreport_query = "UPDATE essays
							SET reported = '0'
							WHERE id = '{$id_essay}' ";
			$unreport = $DB->query($unreport_query);
		}
		else echo ":(";
	}
?>
