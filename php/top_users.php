<?php
/*	
	Gets users with highest scores.
	Used in topUsers.js
*/
	include 'db_connect.php';
	mysql_query("set names 'utf8'");

	$query = "
		SELECT * 
		FROM users
		Order By score DESC";
	$result = mysql_query($query);
	$num = mysql_numrows($result);

	if ($num > 10) $num = 10;

	$users = array();
	$aux = array();

	for ($i = 0; $i < $num; $i++) {	
		$aux = array(
			"index" => $i,
			"name" => mysql_result($result, $i, "name"),
			"score" => mysql_result($result, $i, "Score")
		);
		array_push($users, $aux);
	}

	echo json_encode($users);
?>