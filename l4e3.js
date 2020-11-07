// Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).
/*var sorteio1, sorteio2;

sorteio1 = Math.floor(Math.random() * 100) % 10 + 1;
sorteio2 = Math.floor(Math.random() * 100) % 10 + 1;

document.write("sorteio 1 = " + sorteio1 + "<br>");
document.write("sorteio 2 = " + sorteio2 + "<br><br>");


//Sem contador
if (sorteio1 > 3 && sorteio1 <= 7 && sorteio2 > 3 && sorteio2 <= 7)
	document.write("Quantidade de números entre 3 e 7 (inclusive) = 2");
else {
	if (sorteio1 > 3 && sorteio1 <= 7)
		document.write("Quantidade de números entre 3 e 7 (inclusive) = 1");
	else { 
		if (sorteio2 > 3 && sorteio2 <= 7)
			document.write("Quantidade de números entre 3 e 7 (include) = 1");
		else
			document.write("Quantidade de números entre 3 e 7 (inclusive) = 0");	
	}
} 
/* //Com contador
var cont = 0;
if (sorteio1 > 3 && sorteio1 <= 7)
	cont++;
if (sorteio2 > 3 && sorteio2 <= 7)
	cont++;
document.write("Quantidade de números entre 3 e 7 (inclusive) = " + cont);
*/