// Crie uma matriz 20 x 20 de inteiros. Preencha com números aleatórios entre 10 e 99. Exiba então a soma dos valores de todas as linhas desta matriz, e informe qual linha possui o maior valor.

/*
var linha;
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
document.write("O maior elemento da matriz está na linha: " + linha);
*/