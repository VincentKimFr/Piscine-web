<?php
    $file = 'data.csv';
    $content = "";
    if (file_exists($file)) {
        $content = file_get_contents($file);
    }
    echo $content;
