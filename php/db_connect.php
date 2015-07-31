<?php
	$host = "";
	$username = "";
	$password = "";
	$db = "Romana-e-okay";
	$c = mysql_connect($host, $username, $password);
	@mysql_select_db($db);
	mysqli_set_charset($c, "utf8");
?>
