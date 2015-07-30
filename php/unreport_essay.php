<?php
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];

	$find_user_query = "
		SELECT *
		FROM users
		WHERE ID = ". $id ." ;";

	$user_result = mysql_query($find_user_query);
	$found = mysql_numrows($user_result);

	$id_essay = $_POST['id_essay'];

	if ($found == 1) {
		if (mysql_result($user_result, 0, "type") == "admin") {
			echo "Comentariul a fost aprobat!";
			$unreport_query = "UPDATE essays
							SET reported = '0'
							WHERE id = " . $id_essay . ";";
			$unreport = mysql_query($unreport_query);
		}
		else echo ":(";
	}
?>