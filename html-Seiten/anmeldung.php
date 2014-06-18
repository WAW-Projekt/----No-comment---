<?php
$my_cebit = 'cebit.txt';
$my_conhit = 'conhit.txt';
$my_webtech = 'webtech.txt';



if(isset( $_GET['messe'])){
   switch($_GET['messe']){

       case 'cebit':
           $handle = fopen($my_cebit, 'w') or die('Cannot open file: '.$my_cebit);
           $data = $_GET['name'].$_GET['vorname'].' , '.$_GET['matrikelnr'].' , '.$_GET['handy'].' , '.$_GET['studiengang']."\n" ;
           fwrite($handle,$data);
           break;

       case 'conhit':
           $handle = fopen($my_conhit, 'w') or die('Cannot open file: '.$my_conhit);
           $data = $_GET['name'].$_GET['vorname'].' , '.$_GET['matrikelnr'].' , '.$_GET['handy'].' , '.$_GET['studiengang']."\n" ;
           fwrite($handle,$data);
           break;

       case 'webtech':
           $handle = fopen($my_webtech, 'w') or die('Cannot open file: '.$my_webtech);
           $data = $_GET['name'].$_GET['vorname'].' , '.$_GET['matrikelnr'].' , '.$_GET['handy'].' , '.$_GET['studiengang']."\n" ;
           fwrite($handle,$data);
           break;

   }
}
