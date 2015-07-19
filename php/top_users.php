<?php
	include 'db_connect.php';

	$query = "
		SELECT * 
		FROM users
		Order By score DESC";
	$result = mysql_query($query);
	$num = mysql_numrows($result);

	if ($num > 10) $num = 10;

	for ($i = 1; $i <= $num; $i++) {	
		echo "
			<tr> 
				<td> " . $i . " </td>
				<td> " . mysql_result($result, $i - 1, "Name") . "</td>
				<td> " . mysql_result($result, $i - 1, "Score") . "</td>
			</tr>
		";
	}
?>