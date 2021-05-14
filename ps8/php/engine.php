<?php
//error_reporting(E_ALL);
ini_set('display_errors', 0);

$_defaultNiche = 'nude'; //default niche MUST exists for each country!!!

$_country = @$_GET['country']; // user country
/*if(!$_country)
{
	header("Location: /index.php"); // no country - no page
	exit();
}*/

// remember utm_medium
if(isset($_GET['utm_medium']))
{
	setcookie('utm_medium', $_GET['utm_medium']);
}

$_niche = (isset($_GET['code']) && $_GET['code']) ? $_GET['code'] : 0; // niche passed in url?
$_profileID = 0;
if($_niche)
{
	if(strpos($_niche, "-")) // profile passed with niche
	{
		list($_niche, $_profileID) = explode("-", $_niche);
	}
	
	if(!file_exists('/var/www/sites/mojikontakti.com/htdocs/complex/pm/TEST12/'.$_niche.'/files/'.strtoupper($_country).'/osoba.php')) //passed niche not exists
	{
		$_niche = 0;
		$_profileID = 0;
	}
}
if(!$_niche)
{
	$_niche = $_defaultNiche; // no valid niche passed, use default
}

include_once( '/var/www/sites/mojikontakti.com/htdocs/complex/pm/TEST12/'.$_niche.'/files/'.strtoupper($_country).'/osoba.php' );
include_once( '/var/www/sites/cms/functions/php/common_functions.php' );

// here we should include specific country language file
include_once( 'php/data-'.$_country.'.php' ); 

?>