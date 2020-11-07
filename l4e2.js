 // Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem.

/*
var sorteio1, sorteio2, palpite1, palpite2;

palpite1 = parseInt(prompt("Digite um número: "));
palpite2 = parseInt(prompt("Digite um número: "));

sorteio1 = Math.floor(Math.random() * 100) % 5 + 1;
sorteio2 = Math.floor(Math.random() * 100) % 5 + 1;

if (palpite1 == sorteio1 && palpite2 == sorteio2 ||  //<-- Ordem normal    ou (||)  
		palpite1 == sorteio2 && palpite2 == sorteio1){   //<-- Ordem inversa, forem verdadeiros:
	document.write("Acertou mizeravi!, os numeros foram: " +sorteio1 + " e " + sorteio2);
}
else 
	document.write("Errou os numeros foram: " + sorteio1 + " e " + sorteio2);
*/