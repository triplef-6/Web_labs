<?php
    echo "#4\n";

    $arr1 = [];
    for ($i = 0; $i < 10; $i++) {
        $arr1[$i] = mt_rand(1, 1000);
    }
    print_r($arr1);

    $arr2 = [];
    for ($i = 0; $i < 10; $i++) {
        if (strpos((string) $arr1[$i], '5') != false) {
            $arr2[] = $arr1[$i];
        }
    }
    print_r($arr2);
