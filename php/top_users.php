<?php
	include 'db_connect.php';

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
		/*echo "
			<tr> 
				<td> " . $i . " </td>
				<td> " . mysql_result($result, $i - 1, "Name") . "</td>
				<td> " . mysql_result($result, $i - 1, "Score") . "</td>
			</tr>
		";*/
	}

	echo json_encode($users);
?>