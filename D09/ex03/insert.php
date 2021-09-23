<?php

    $file = 'data.csv';
    $entry = '';

    foreach ($_POST as $id => $val) {
        $entry .= $id . ';' . $val . "\n";
    }
    file_put_contents($file, "\xEF\xBB\xBF" . $entry, FILE_APPEND);
