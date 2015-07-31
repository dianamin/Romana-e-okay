<?php
/*
	Used for logging out.
	Used in facebookLogin.js
*/

	echo "logging out";
	session_start();
	$_SESSION = array();
	session_destroy();
?>	