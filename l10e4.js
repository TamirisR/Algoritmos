//  Crie e preencha o mesmo vetor de 100 números. Calcule a soma de todos que são menores que a média dos 10 últimos.

/*
var nAleatorios, cont, soma;

nAleatorios = [];
soma = 0;
for (cont = 0; cont < 100; cont++)
{ 
	nAleatorios[cont] = Math.floor(Math.random() * 100);
	if (cont >= 89)	
		soma += nAleatorios[cont];
}
media = soma / 10;
document.write("A média dos 10 últimos números aleatórios é: " + media + "<br>");

for ( cont= 0; cont <= 99; cont++ )
{
  if (nAleatorios[cont] < media)
  document.write(nAleatorios[cont] + " <br>");
}
*/