<?php
    echo "#9\n";

    $arr = [];
    for ($i = 0; $i < 10; $i++) {
        $arr[$i] = mt_rand(-100, 100);
    }
    print_r($arr);

    $n = 0;
    for ($i = 0; $i < 10; $i++) {
        if ($arr[$i] < 0) {
            $n++;
        }
    }
    echo $n, "\n";