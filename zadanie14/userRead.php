<?php
$baza = './bazy/MATUSZAK.db';
$db = sqlite_open($baza)
or die('Nie mogę otworzyć bazy!');
$wynik = sqlite_query($db,"SELECT * FROM zawodnik")
or die(sqlite_error_string(sqlite_last_error($db)));
if(sqlite_num_rows($wynik) > 0) {
    echo "<table cellpadding=\"2\" border=\"1\">";
    while($r = sqlite_fetch_array($wynik,SQLITE_ASSOC)) {
        echo "<tr>";
        echo "<td>".$r['name']."</td>";
        echo "<td>".$r['age']."</td>";
        echo "<td>
       <a href=\"index.php?a=del&id={$r['id']}\">DEL
       <a href=\"index.php?a=edit&id={$r['id']}\">EDIT
       </td>";
        echo "</tr>";
    }
    echo "</table>";
}
sqlite_close($db);

