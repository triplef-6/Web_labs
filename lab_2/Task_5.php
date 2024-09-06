<?php
    echo "#5\n";

    $arr1 = [1, 2, 3, 4];
    $arr2 = ['q', 'r', 's', 't'];
    $arr3 = [];
    for ($i = 0; $i < count($arr1); $i++) {
        // массивы 1 и 2 одного размера
        $arr3[] = $arr1[$i];
        $arr3[] = $arr2[$i];
    }
    print_r($arr3);