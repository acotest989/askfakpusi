<?php include('/var/www/sites/cms/dating/centralization/header.php'); ?>

<!DOCTYPE html>
<html>

<head>
	<?php $ext = 'php'; ?>
	<script>
		// force index.html or index.php
		var ext = "<?= $ext ?>" === 'php' ? 'php' : 'html';
		var idx = 'index.' + ext;
		if(! location.href.includes(idx)) {
			var forceIdx = location.origin + location.pathname + idx + location.search;
			location.href = forceIdx;
		}
	</script>
	<?php include('/var/www/sites/cms/dating/centralization/headQuiz.php'); ?>
</head>

<body>

	
	<div id="regQuiz"></div>


	<div class="desktoponly" style="text-align: center; background: #00000050">
		<?= $_lang[155] ?>
		<strong id="counter" class="timer text-warning" style="color: #ffc107;"></strong>
	</div>

	<?php include('/var/www/sites/cms/dating/centralization/footerQuiz.php'); ?>
</body>

</html>