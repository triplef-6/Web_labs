<?php
    echo "#6\n";

    $arr1 = [];
    for ($i = 0; $i < 10; $i++) {
        $arr1[$i] = mt_rand(1, 1000);
    }
    print_r($arr1);

    rsort($arr1);
    print_r($arr1);

    
