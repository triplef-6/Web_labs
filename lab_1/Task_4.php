<?php
	echo "Задание 4:\n";

    $str1 = "gkopsedtgsdfmdpgb";
    $str2 = "hkopmgdrgdrghb";
    echo "Строка 1: ", $str1, "\n";
    echo "Строка 2: ", $str2, "\n";

    echo "Общая строка: ", $str1 & $str2, "\n";
    echo "Наибольшая строка: ";
    if (strlen($str1) > strlen($str2)) {  
        echo $str1, "\n";
    } else {
        echo $str2, "\n";
    }
    echo "\n";

