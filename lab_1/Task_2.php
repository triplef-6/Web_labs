<?php
	echo "Задание 2:\n";

    $rand__n = mt_rand();
    echo "Число: ", $rand__n, "\n";

    $str_n = (string) $rand__n;
    echo "Первая цифра: ", $str_n[0], "\n";
    echo "Последняя цифра: ", $str_n[strlen($str_n) - 1], "\n";
    echo "Сумма первой и последней цифр: ", $str_n[0] + $str_n[strlen($str_n) - 1], "\n";
    echo "Количество цифр в числе: ", strlen($str_n), "\n";
