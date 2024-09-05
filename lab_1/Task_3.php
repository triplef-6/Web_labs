<?php
	echo "Задание 3:\n";

    $str = "sgsgsgsdgg";
    echo "Строка: ", $str, "\n";

    echo "Длина строки: ", strlen($str), "\n";
    echo "Последний символ строки: ", $str[strlen($str) - 1], "\n";
    echo "Строка в обратном порядке: ";
    for ($i = strlen($str) - 1; $i >= 0; $i--) {
        echo $str[$i];
    }
    echo "\n";