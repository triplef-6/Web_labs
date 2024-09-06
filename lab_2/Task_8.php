<?php
    echo "#8\n";

    $arr = ['orange', 'red', 'green', 'blue'];
    usort($arr, function($a, $b) {
         return strlen($a) - strlen($b);
         });
    print_r($arr);