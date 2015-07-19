<?php
	session_start();
	$_SESSION["editable_page"] = $_POST['s'];
	echo $_SESSION["editable_page"];
?>