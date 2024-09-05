<?php
    echo "Задание 1:\n";

    $rand__n = mt_rand(-100, 100);
    echo "Число: ", $rand__n, "\n";

    if ($rand__n > 0) {
        echo "Положительное\n";
    } else {
        echo "Отрицательное\n";
    }

    if ($rand__n % 2 == 0) {
        echo "Чётное\n";
    } else {
        echo "Нечётное\n";
    }