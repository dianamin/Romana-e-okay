<?php
	echo "loging out";
	session_start();
	$_SESSION = array();
	session_destroy();
?>	