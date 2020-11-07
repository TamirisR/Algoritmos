// c - não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.
/*
	var atleta, cont, nome, altura, maiorAltura, nomeDoMaior, somaAltura, media, desejaContinuar, condicao;

	cont = 1;
	maiorAltura = 0;
	nomeDoMaior = "";
	desejaContinuar = "";
	somaAltura = 0;
	condicao = 1;  //---> == verdadeiro

	while (condicao)	//Se for verdadeiro, o loop acontece. Se for falso, para.
	{		
		nome = prompt("Digite o nome do atleta: ");
		altura = parseInt(prompt("Digite a altura: "));
		somaAltura += altura;
		if (altura > maiorAltura)
		{
			maiorAltura = altura;
			nomeDoMaior = nome;
		}
	
		desejaContinuar = prompt("Você deseja continuar?");
		if (desejaContinuar == 'N' || desejaContinuar == 'n')
			condicao = 0; // ---> == falso;
		else
			cont++;
	}
	media = somaAltura / cont; //contador == número de atletas
	document.write("A maior altura foi : " + maiorAltura + " cm, do atleta: " + nomeDoMaior + " e a média de altura foi de: " + media + " cm");


*/