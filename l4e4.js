// Escreva um programa que joga par ou ímpar com o usuário.
/*
var escolhaJog, escolhaPC, sorteio, nJogador, total, resultado;

escolhaJog = prompt("o que tu quer, par ou impar?").toLowerCase();
nJogador = parseInt(prompt("digite seu numero"));
sorteio = Math.floor(Math.random()*100) % 10 + 1;
total = nJogador + sorteio;

document.write("Número do PC = " + sorteio + "<br>");
if (total % 2 == 0)
	resultado = "par";
else 
	resultado = "impar";
if (escolhaJog == "par")
	escolhaPC = "impar";
else 
	escolhaPC = "par";
if (resultado == escolhaJog)
	document.write("Você ganhou, resultado foi " + resultado + ": " + total);
else 
	document.write("Você perdeu, resultado foi " + resultado + ": " + total);
	

//Opção 2
var opcao, numJogador, numCPU, total;

opcao = prompt("Escolha! (P)ar ou (I)mpar!");

numJogador = parseInt(prompt("Quantos dedos vc colocou?"));
numCPU = Math.floor(Math.random()*100) % 6;
document.write("Eu coloquei ", numCPU, "<br>");
total = numJogador + numCPU;

if (total % 2 == 0)
{
	//é par!
	if (opcao == "P")
	{
		document.write("Você ganhou!!");
	}
	else
	{
		document.write("Você PERDEEEEU!!");
	}
}
else
{
	//total é impar
	if (opcao == "I")
	{
		document.write("Você ganhou!!");
	}
	else
	{
		document.write("Você PERDEU! PERDEU!!");
	}
}


//Opção 3
var opcao, numJogador, numCPU, total;

opcao = prompt("Escolha! (P)ar ou (I)mpar!");

numJogador = parseInt(prompt("Quantos dedos vc colocou?"));
numCPU = Math.floor(Math.random()*100) % 6;
document.write("Eu coloquei ", numCPU, "<br>");
total = numJogador + numCPU;

if ((total % 2 == 0 && opcao == "P") || (total % 2 != 0 && opcao == "I" ))
{
	document.write("Você ganhou!!");
}
else
{
	document.write("Você PERDEEEEU!!");
}
*/

