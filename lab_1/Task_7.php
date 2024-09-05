<?php
    echo "Задание 7:\n";
    $rand__n1 = mt_rand(1, 50);
    $rand__n2 = mt_rand(1, 50);
    $rand__n3 = mt_rand(1, 50);
    echo "Число 1: ", $rand__n1, "\n";
    echo "Число 2: ", $rand__n2, "\n";
    echo "Число 3: ", $rand__n3, "\n";

    echo "Среднее арифметическое: ", ($rand__n1  + $rand__n2 + $rand__n3) / 3, "\n";
    echo "Сумма квадратов: ", pow($rand__n1, 2) + pow($rand__n2, 2) + pow($rand__n3, 2), "\n";
    echo "Наибольшее число: ", max($rand__n1, $rand__n2, $rand__n3), "\n";
    echo "Наименьшее число: ", min($rand__n1, $rand__n2, $rand__n3), "\n";