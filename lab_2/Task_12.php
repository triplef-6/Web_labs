<?php
    echo "#12\n";

    $str = '12rg93g9g9eign93gn';
    echo $str, "\n";

    $n = 0;
    for ($i = 0; $i < strlen($str); $i++) { 
        if (is_numeric($str[$i])) {
            if ($n == 0) { 
                echo $i + 1, "\n"; // первая
            }
            $n = $i + 1;
        }
    }
    echo $n, "\n"; // последняя
