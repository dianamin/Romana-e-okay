<?php
	error_reporting(0);
	
	$host = "";
	$username = "";
	$password = "";
	$dbname = "Romana-e-okay";
	
	$DB = new MySQLi($host, $username, $password, $dbname); 
	$DB->set_charset("utf8");
	
	session_start();
	
	//$c = mysql_connect($host, $username, $password);
	//@mysql_select_db($db);
	
?>
