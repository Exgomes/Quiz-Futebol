const perguntas = [
    {
      pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 2023?",
      respostas: [
        "Gabriel Barbosa",
        "Pedro",
        "Rony",
      ],
      correta: 1
    },
    {
      pergunta: "Qual time venceu a Copa do Brasil de 2023?",
      respostas: [
        "Flamengo",
        "Atlético Mineiro",
        "Palmeiras",
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi eleito o melhor jogador do Campeonato Brasileiro de 2023?",
      respostas: [
        "Rony",
        "Gabriel Barbosa",
        "Pedro",
      ],
      correta: 2
    },
    {
      pergunta: "Qual clube conquistou o título da Copa Libertadores de 2023?",
      respostas: [
        "São Paulo",
        "Flamengo",
        "Palmeiras",
      ],
      correta: 2
    },
    {
      pergunta: "Qual técnico comandou o time vencedor do Campeonato Brasileiro de 2023?",
      respostas: [
        "Renato Gaúcho",
        "Abel Ferreira",
        "Cuca",
      ],
      correta: 1
    },
    {
      pergunta: "Qual jogador foi considerado a Revelação do Campeonato Brasileiro de 2023?",
      respostas: [
        "Michael",
        "David Braz",
        "Talles Magno",
      ],
      correta: 2
    },
    {
      pergunta: "Qual equipe terminou na última colocação do Campeonato Brasileiro de 2023?",
      respostas: [
        "Grêmio",
        "Coritiba",
        "Avaí",
      ],
      correta: 1
    },
    {
      pergunta: "Quem foi o goleiro menos vazado do Campeonato Brasileiro de 2023?",
      respostas: [
        "Weverton",
        "Everson",
        "Hugo Souza",
      ],
      correta: 0
    },
    {
      pergunta: "Qual jogador foi o líder em assistências no Campeonato Brasileiro de 2023?",
      respostas: [
        "Thiago Galhardo",
        "Arrascaeta",
        "Rony",
      ],
      correta: 1
    },
    {
      pergunta: "Qual foi o clube que teve mais títulos na história do Campeonato Brasileiro até 2023?",
      respostas: [
        "Santos",
        "Palmeiras",
        "Flamengo",
      ],
      correta: 0
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')//buscar elemento html para colocar na váriavel
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    // ele faz um clone de todas as perguntas
    const quizItem = template.content.cloneNode(true)
  
    //ele modifica a estrutura h3 para as perguntas
    quizItem.querySelector('h3').textContent = item.pergunta
  
      //ele cria um novo loop para trazer a estrutura das respostas
      for(let resposta of item.respostas) {
  
        //ele faz um clone de toda a estrutura 
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
  
        //ele modifica a estrutura da tag span pelas respostas
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
  
         corretas.delete(item)
         if(estaCorreta) {
           corretas.add(item)
         }
            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }
  
        // ele coloca a respota na tela
        quizItem.querySelector('dl').appendChild(dt)
      }
  
      // ele apaga o "Resposta A" que aparecia fora de contexto
      quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }