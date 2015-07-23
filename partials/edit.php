<div>
	<?php
		session_start();
		$page = $_SESSION["editable_page"];
		echo "<h4> Editing page: " . $page . " </h4>" 
	?>
</div>