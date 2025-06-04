alert("cuidado com o Narak!")

perguntas = [
   {
    pergunta: "qual o maior ser vivo do planeta?",
    opcoes: [
      "Baleia Azul",
      "Fungo de Mel",
      "Elefante",
      "Girafa"
      
    ],
    correta: 1
   },
   {
   pergunta: "qual a primeira capital do Brasil",
   opcoes: [
     "Taquara",
     "Varjota",
     "Salvador",
     "Chile"
   ],
   correta: 2
   },
   {
   pergunta: "Qual é a força de mordida do Tiranossauro Rex",
   opcoes: [
     "35.000 newtons",
     "500.000 newtons",
     "500 newtons",
     "-0,25 newtons"
   ],
   correta: 0
   },
   {
     pergunta: "Quais foram os principais fatores para a extinção dos dinossauros?",
     opcoes: [
       "Os peidos deles, efeito estufa e falta de alimento",
       "oi",
       "Impacto do asteroide, erupções vulcanicas e mudanças climáticas",
       "ola"
       
     ],
     correta: 2
     
   }
]

perguta = null

botaoIniciar = document.querySelector(".botao")
botaoIniciar = addEventListener("click", iniciarJogo)

function iniciarJogo() {
 
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"

  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = perguntas[0]
  
  console.log(pergunta.pergunta)
}
