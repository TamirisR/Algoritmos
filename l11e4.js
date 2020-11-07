// Utilizando a mesma matriz, exiba a soma dos elementos da diagonal principal.

/*
var somaDiagonalPrincipal = 0;
var	maiorValor = 0;
var total = 0;
var m = [];
var linhas = 20, colunas = 20;

for(i = 0; i < linhas; i++){
	m[i] = [];
}

for (i = 0; i < linhas; i++){
	for (j = 0; j < colunas; j++){
		m[i][j] =  Math.floor(Math.random() * 100) % 89 + 10;
	total += m[i][j];
	if (maiorValor < m[i][j])
		linha = i;
	if (i == j)
		somaDiagonalPrincipal += m[i][j];
	}
}

document.write("<table>");
for (i = 0; i < linhas; i++){
	document.write("<tr>");
	for (j = 0; j < colunas; j++){
		document.write("<td>" + m[i][j] + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");

document.write("A soma de todos os elementos da matriz é: " + total + "<br>");
document.write("O maior elemento da matriz está na linha: " + linha + "<br>");
document.write("A soma da diagonal principal é: " + somaDiagonalPrincipal);
*/