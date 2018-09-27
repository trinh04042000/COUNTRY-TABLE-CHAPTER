
var i,j;
var numTable = "<table border='1' width='70%' cellspadding='0' cellpadding='18%'>"
for (i =1; i <= 9; i++) {
    numTable = numTable + "</tr>";
    for (j = 2; j <= 9; j++) {
        numTable = numTable + "<td>" + (j) + 'x' + (i) + '=' + i * j + "</td>";

    }
    numTable = numTable + "</tr>";
}
numTable = numTable + "</table>";
document.write(numTable);