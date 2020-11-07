// - Mini-megasena - Escreva um programa que solicita 3 números de 1 a 60 ao usuário. O programa então sorteará continuamente 3 números de 1 a 60 até que sejam sorteadas as 3 dezenas que foram digitadas pelo usuário. No final ele deve exibir quantos sorteios foram efetuados.

/*
var	s1, s2, s3, p1, p2, p3, p1_ok, p2_ok, p3_ok, cont, condicao;

p1 = parseInt(prompt("Digite o palpite 1: "));
p2 = parseInt(prompt("Digite o palpite 2: "));
p3 = parseInt(prompt("Digite o palpite 3: "));
cont = 0;
do
{
	p1_ok = 0;
	p2_ok = 0;
	p3_ok = 0;
	s1 = Math.floor(Math.random() * 100) % 60 + 1;
	s2 = Math.floor(Math.random() * 100) % 60 + 1;
	s3 = Math.floor(Math.random() * 100) % 60 + 1;
	if (p1 == s1 || p1 == s2 || p1 == s3)
		p1_ok = 1; 
	if (p2 == s1 || p2 == s2 || p2 == s3)
		p2_ok = 1; 
	if (p3 == s1 || p3 == s2 || p3 == s3)
		p3_ok = 1; 
	document.write(s1 + " " + s2 + " " + s3 + "<br>");
	if (p1_ok == 1 && p2_ok == 1 && p3_ok == 1)
		break;
	cont++;
} 
while (1);

document.write("Foram necessários " + cont + " sorteios");


var p1, p2, p3;
var s1, s2, s3;
var cont = 0; 

p1 = parseInt(prompt("Seu primeiro palpite!"));
p2 = parseInt(prompt("Seu segundo palpite!"));
p3 = parseInt(prompt("Seu terceiro palpite!"));

do {
	s1 = Math.floor(Math.random() * 60) + 1;
	s2 = Math.floor(Math.random() * 60) + 1;
	s3 = Math.floor(Math.random() * 60) + 1;

	document.write(s1 + ", " + s2 + ", " + s3 + "<br>");
	cont++;
}
while( (p1 != s1 && p1 != s2 && p1 != s3) || 
       (p2 != s1 && p2 != s2 && p2 != s3) || 
			 (p3 != s1 && p3 != s2 && p3 != s3) )

document.write("Acertou! Foram necessárias ", cont, " tentativas");
*/