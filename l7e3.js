// - Escreva um programa que sorteia 10 números pares entre 1 e 100 e exibe na tela. (como garantir que o sorteio exiba apenas números pares?)

/*
var numSorteio, cont, condicao;

condicao = 1; //Verdadeiro, roda o loop.
cont = 0;

do
{
	numSorteio = Math.floor(Math.random() * 100) % 10 + 1;
	if (numSorteio % 2 == 0)
	{
		document.write(numSorteio + "<br>");
		cont++;
	}
	if (cont == 10)
		condicao = 0; //Falso, para o loop.
}
while (condicao);
*/