<?php
    echo "#11\n";

    $arr1 = [];
    for ($i = 0; $i < 10; $i++) {
        $arr1[$i] = mt_rand(-50, 50);
    }
    print_r($arr1);

    $arr2 = [];
    for ($i = 0; $i < 10; $i++) {
        if ($arr1[$i] > 0 && $arr1[$i] % 2 == 0) { // положительные И чётные
            $arr2[] = $arr1[$i];
        }
    }
    print_r($arr2);