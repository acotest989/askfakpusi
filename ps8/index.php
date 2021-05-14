<?php

//define('MOBILE' , 1);

include ('php/engine.php');

$_variations = array(
	'A',
);

$_variation = rand(0, count($_variations)-1);

$reset = true;
$rapid = true;

include_once ('var/'.$_variations[$_variation].'.php');

?>