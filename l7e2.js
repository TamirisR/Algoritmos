// Crie um programa que recebe números inteiros até que o usuário digite 0 e então exiba o maior e o menor. 

/*
var n, menor, maior, condicao, cont;

condicao = 1; //verdadeiro, roda o loop
cont = 0;

while (condicao)
{
  n = parseInt(prompt("digite um numero: "));
	if (n == 0)
		condicao = 0; //falso, para o loop.
	if (cont == 1)
	{
		menor = n;
		maior = n;
	}
	if (n < menor && n != 0)
		menor = n;
	if (n > maior)
		maior = n;
	cont++;
}
document.write("Menor = " + menor + " Maior = " + maior);

*/

/*
var num, maior, menor;

num = parseInt(prompt("Digite um número:"));
menor = num;
maior = num;

while (num != 0)
{
	num = parseInt(prompt("Digite um número:"));

	if (num != 0) {
		if (num > maior){
			maior = num;
		}

		if (num < menor){
			menor = num;
		}
	}
} 

document.write("O maior é " + maior);
document.write("<br>O menor é " + menor);
*/