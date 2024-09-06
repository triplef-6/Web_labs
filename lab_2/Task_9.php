<?php
    echo "#9\n";

    $arr = [];
    for ($i = 0; $i < 10; $i++) {
        $arr[$i] = mt_rand(0, 50);
    }
    print_r($arr);
    
    $sum1 = array_sum(array_slice($arr, 0, 5)); 
    $sum2 = array_sum(array_slice($arr, 5, 10));
    echo $sum1, "\n", $sum2, "\n", $sum1 / $sum2, "\n";