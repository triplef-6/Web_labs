<?php
    echo "#4\n";

    $arr1 = [];
    for ($i = 0; $i < 10; $i++) {
        $arr1[$i] = mt_rand(1, 1000);
    }
    print_r($arr1);

    $arr2 = [];
    for ($i = 0; $i < 10; $i++) {
        $str = (string) $arr1[$i];
        for ($j = 0; $j < strlen($str); $j++) {
            if ($str[$j] == "5") {
                $arr2[] = $arr1[$i];
                break;
            }
        }
    }
    print_r($arr2);
