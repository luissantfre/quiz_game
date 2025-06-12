

perguntas = [
   {
    pergunta: "Qual o maior ser vivo do planeta?",
    opcoes: [
      "Baleia Azul",
      "Fungo de Mel",
      "Elefante",
      "Girafa"
      
    ],
    correta: 1
   },
  {
   pergunta: "Qual a primeira capital do Brasil?",
   opcoes: [
     "Taquara",
     "Varjota",
     "Salvador",
     "Chile"
   ],
   correta: 2
   },
  {
   pergunta: "Qual é a força de mordida do Tiranossauro Rex?",
   opcoes: [
     "35.000 newtons",
     "50.000 newtons",
     "10.500 newtons",
     "75.000newtons"
   ],
   correta: 0
   },
  {
     pergunta: "Quais foram os principais fatores para a extinção dos dinossauros?",
     opcoes: [
       "Os peidos deles, efeito estufa e falta de alimento",
       "falta de alimento, atmosfera poluida pela atividade humana e tsunamis",
       "Impacto do asteroide, erupções vulcânicas e mudanças climáticas",
       "aumento do nivel do mar, erupções vulcânicas e falta de alimento "
       
     ],
     correta: 2
     
   }
]

objPergunta = null

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaAcertou = document.querySelector(".vitoria")
telaErrou = document.querySelector(".derrota")

botaoIniciar = document.querySelector(".botao")
botaoIniciar.addEventListener("click", iniciarJogo)


divPergunta = document.querySelector(".fala")

botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
botao2 = document.querySelector(".opcao2")
botao3 = document.querySelector(".opcao3")

telaAcertou.addEventListener("click", () => {
  telaAcertou.style.display = "none"
  telaPergunta.style.display = "block"
})

telaErrou.addEventListener("click", () => {
  telaErrou.style.display = "none"
  telaPergunta.style.display = "block"
})

botao0.addEventListener("click", () => {
  
  if (objPergunta.correta == 0 ) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }

})

botao1.addEventListener("click", () => {
  
  if (objPergunta.correta == 1 ) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }

})

botao2.addEventListener("click", () => {
  
  if (objPergunta.correta == 2 ) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }

})

botao3.addEventListener("click", () => {
  
  if (objPergunta.correta == 3 ) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }

})

botaoIniciar = document.querySelector(".botao")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
 
  telaInicial.style.display = "none"
  telaPergunta.style.display = "block"

  mostrarPergunta()
}

function mostrarPergunta() {
  objPergunta = perguntas[0]
  
  textoPergunta = document.createTextNode(objPergunta.pergunta)
  
  divPergunta.appendChild(textoPergunta)
  
  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0])
  
  botao0.appendChild(txtOpcao1)
  
  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1])
  
  botao1.appendChild(txtOpcao2)
  
  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2])

  botao2.appendChild(txtOpcao3 )
  
  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3])
  
  botao3.appendChild(txtOpcao4)
  
  console.log(pergunta.pergunta)
}

function mostrarAcertou() {
  telaPergunta.style.display = "none"
  telaAcertou.style.display = "block"
}

function mostrarErrou() {
  telaPergunta.style.display = "none"
  telaErrou.style.display = "block"
}