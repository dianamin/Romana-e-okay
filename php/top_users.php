<?php
/*	
	Gets users with highest scores.
	Used in topUsers.js
*/
	include 'db_connect.php';

	$query = "
		SELECT * 
		FROM users
		Order By score DESC";
	$result = $DB->query($query);
	$num = $result->num_rows;
	$data = $result->fetch_all(MYSQLI_ASSOC);
	if ($num > 10) $num = 10;

	$users = array();
	$aux = array();

	for ($i = 0; $i < $num; $i++) {	
		$aux = array(
			"index" => $i,
			"name" => $data[$i]['name'],
			"score" => $data[$i]['score']
		);
		array_push($users, $aux);
	}

	echo json_encode($users);
?>
