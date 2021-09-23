<?php

    $file = 'data.csv';

    $content = file_get_contents($file);
    $content = explode("\n", $content);
    foreach ($content as $id => $val) {
        $tmp = explode(';', $content[$id]);
        if ($tmp[0] === "\xEF\xBB\xBF" . $_POST['id']) {
            unset($content[$id]);
        }
    }
    $content = implode("\n", $content);
    file_put_contents($file, $content);
