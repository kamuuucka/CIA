/**
 * Funkcja służy do generowania tabliczki mnożenia.
 * rowMax = domyślnie 10, służy do określenia maksymalnej wartości w wierszach
 * colMax = domyślnie 10, służy do określenia maksymalnej wartości w kolumnach
 * rowMin = domyślnie 1, służy do określenia minimalnej wartości w wierszach
 * colMin = domyślnie 1, służy do określenia minimalnej wartości w kolumnach
 * PRZYKLADY:
 * tabliczka(5,5) -> tworzy tabliczkę mnożenia od 1 do 5
 * tabliczka(5,5,-5,-5) -> tworzy tabliczkę mnożenia od -5 do 5
 * tabliczka() -> tworzy tabliczkę mnożenia od 1 do 10
 **/

function tabliczka(rowMax=10,colMax=10,rowMin=1,colMin=1) {
    document.writeln('<h1> Tabliczka mnożenia </h1>')
    document.writeln('<style> td, th, table { border: 1px double black; text-align: center;} </style>');
    document.writeln('<table>');
    document.writeln('<tr>');
    let first = 0;
    for (x = colMin-1; x <= colMax; x++) {
        if(first!==0){
            document.writeln('<th>' + x + '</th>');
        }
        else {
            document.writeln('<th> * </th>');
            first=1;
        }
    }
    document.writeln('</tr>');
    for (y = rowMin; y <= rowMax; y++) {
        document.writeln('<tr>');
        document.writeln('<th>' + y + '</th>');
        for (x = colMin; x <= colMax; x++) {
            const number = y * x;
            document.writeln('<td>' + number + '</td>');
        }
        document.writeln('</tr>');
    }
    document.writeln('</table>');
}
