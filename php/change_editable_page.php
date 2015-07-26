<?php
	session_start();
	$_SESSION["editable_page"] = $_POST['url'];
	$_SESSION["version"] = $_POST['version'];
?>