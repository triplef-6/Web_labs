<?php
    echo "Задание 5:\n";
    $rand__n1 = mt_rand(1, 100);
    $rand__n2 = mt_rand(1, 100);
    echo "Число 1: ", $rand__n1, "\n";
    echo "Число 2: ", $rand__n2, "\n";

    $str__n1 = (string) $rand__n1;
    $str__n2 = (string) $rand__n2;
    echo "Первые цифры этих чисел ";
    if ($str__n1[0] != $str__n2[0]) {
        echo "не ";
    }
    echo "совпадают\n";

    echo "Первое число ";
    if ($rand__n1 % $rand__n2 != 0) {
        echo "не ";
    }
    echo "делится без остатка на второе\n";

    echo "Наибольшее число: ";
    if ($rand__n1 > $rand__n2) {
        echo $rand__n1; 
    } else if ($rand__n1 < $rand__n2) {
        echo $rand__n2;
    }
    echo "\n";

