<?php
header("Content-type: application/json");

if($_SERVER["REQUEST_METHOD"] == "GET"){
    $params = $GET;
}
echo $params;
$file = $_SERVER["DOCUMENT_ROOT"]."/NoComment1/".$params["dateiname"].".json";
echo(file_get_contents($file));