<?php 
	the_post();

	// Redirect from admin site for live urls
	if (!is_preview() && $_SERVER['HTTP_HOST'] === "owid.cloud") {
		$url = "https://ourworldindata.org" . $_SERVER['REQUEST_URI'];
		wp_redirect($url, 302);
		exit;
	}

	$ID = escapeshellarg(get_the_ID());
	$themeDir = escapeshellarg(dirname(__FILE__));
	$cmd = "cd $themeDir && node dist/src/renderPage.js $ID";
	exec($cmd, $op);
	echo join("\n", $op);


?>