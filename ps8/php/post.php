<?php 
$_country = @$_GET['country'];

if(!file_exists('data-'.$_country.'.php'))
	exit('No language specified');

include ('data-'.$_country.'.php');
include_once( '/var/www/sites/cms/post/php/post.php' ); ?>