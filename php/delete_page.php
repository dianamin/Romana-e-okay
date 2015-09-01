<?php
/*	
	Deleting lesson in admin view and adding deleting to recent changes
	Used in adminList.js
*/
	include 'db_connect.php';
	session_start();
	$id = $_SESSION["id"];
	$DB->query("set names 'utf8'");

	$find_id_query = "
		SELECT *
		FROM users
		WHERE id = '{$id}'";

	$id_result = $DB->query($find_id_query);
	$user = $id_result->fetch_array(MYSQLI_ASSOC);

	if ($id_result->num_rows == 1 && $user['type'] == "admin") {
		$page_id = isset($_POST['id']) ? $DB->real_escape_string($_POST['id']) : NULL;
		$name = isset($_POST['name']) ? $DB->real_escape_string($_POST['name']) : NULL;
		$delete_change_query = "
			INSERT INTO changes (lesson_name, operation, date)
			VALUES ('{$name}', 'delete', now())";
		
		$delete_change_result = $DB->query($delete_change_query);

		$delete_page_query = "
			DELETE
			FROM lessons
			WHERE global_id = '{$page_id}'";
		$delete_result = $DB->query($delete_page_query);
		echo ":)";
	}
	else echo ":(";
?>
