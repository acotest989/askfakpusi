<?php include('/var/www/sites/cms/dating/centralization/header.php'); ?>

<!DOCTYPE html>
<html>

<head>

	<?php include('/var/www/sites/cms/dating/centralization/headQuiz.php'); ?>

</head>

<body>

	<p class="emailText"><?= $reg1_lang_004 ?></p>
	<div class="emailBox">
		<p class="headline_top"><?= $reg1_lang_005 ?></p>
		<ul class="list_box">
			<li><?= $reg1_lang_006 ?></li>
			<li><?= $reg1_lang_007 ?></li>
			<li><?= $reg1_lang_008 ?></li>
			<li><?= $reg1_lang_009 ?></li>
		</ul>
		<p class="emailText"><?= $reg1_lang_010 ?></p>
	</div>

	<?php include('/var/www/sites/cms/dating/centralization/registrationQuiz.php'); ?>

	<div id="counterBar">
		<?= $_lang[155] ?>
		<strong id="counter" class="timer text-warning">11:45</strong>
	</div>

	<?php include('/var/www/sites/cms/dating/centralization/footerQuiz.php'); ?>

</body>

</html>