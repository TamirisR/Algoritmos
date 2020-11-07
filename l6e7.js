// Elabore um programa que solicita um número e então diz se este número é primo.  (Da série "Exercícios clássicos da computação")

//Número primo é um número que é divisível por um e por ele mesmo.

/*
var	numeroDivisores, numero, cont;

cont = 1;
numeroDivisores = 0;

numero = parseInt(prompt("Digite um número para saber se ele é primo"))
while (cont <= numero)
{       
	if (numero % cont == 0)	
		numeroDivisores++; 
	cont++;
}

if (numeroDivisores == 2)
	document.write("Este é um número primo.");
else 
	document.write("Este não é um número primo.");

  
var cont, num;
var primo = 0;

cont = 2;

num = parseInt(prompt("Digite um número"));

while (cont < num - 1)
{

	if (num % cont == 0)
	{
		//achou um divisor!! logo, num não é primo!!!
		primo = 1; //
	}

	cont++;
}

if (primo == 0)
{
	document.write("é primo!");
}
else
{
	document.write("não é primo!");
}
*/