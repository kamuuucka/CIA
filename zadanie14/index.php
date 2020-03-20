<?php
$baza = './bazy/MATUSZAK.db';
$db = sqlite_open($baza);
sqlite_query($db, "CREATE TABLE zawodnik (id INTEGER NOT NULL PRIMARY KEY, name VARCHAR(100) NOT NULL, age INTEGER NOT NULL)")
    or die(sqlite_error_string(sqlite_last_error($db)));
echo "Database created!";
