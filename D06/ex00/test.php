<?php
//http://externalapp.local/D06/ex00/test.php
//D:
//cd "D:\Docs\Travaux\42\Dépots git\PiscinePHP01\D06\ex00"
	require_once 'Color.class.php';

	$a = (2**7 << 16) + (255 << 8) + 1;
	print($a . PHP_EOL);
	print(decbin($a) . PHP_EOL);
	print(decbin($a >> 16) . PHP_EOL);
	print(decbin($a % 2**16 >> 8) . PHP_EOL);
	print(decbin($a % 2**16 % 2**8) . PHP_EOL);

	Color::$verbose = True;
	$red   = new Color( array( 'red' => 255, 'green' =>   0, 'blue' =>   0 ) );