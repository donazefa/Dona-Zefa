/* ==========================================================================
   QUIZ LOGIC AVANÇADO — LIVRO DA VOVÓ ZEFA (12 PERGUNTAS)
   ========================================================================== */

// Configurações
const CHECKOUT_URL = "https://pay.kirvano.com/1bcdc3c6-d3d2-481b-96c5-5fd38f0437ee"; // URL oficial da Kirvano
const BOOK_COVER_IMAGE = "Capa livro checkout.webp"; // Pode ser "capa livro checkout.png"

// Definição dos Perfis
const PROFILES = {
  ciclo: {
    title: "CICLO FINANCEIRO",
    desc: "Você sente que o dinheiro chega e desaparece ou que vive repetindo dificuldades. É como se existisse um teto invisível limitando o quanto você consegue acumular."
  },
  bloqueio: {
    title: "BLOQUEIO DE PROSPERIDADE",
    desc: "Você trabalha muito, se esforça todos os dias, mas não consegue ver a vida financeira avançar na mesma proporção do seu esforço."
  },
  medo: {
    title: "MEDO E INSEGURANÇA",
    desc: "Sua relação com dinheiro é marcada por ansiedade, medo de faltar ou dificuldade em confiar que as coisas podem realmente dar certo para você."
  },
  desejo: {
    title: "DESEJO DE TRANSFORMAÇÃO",
    desc: "Você tem muita vontade de mudar a sua realidade, sente que nasceu para algo maior, mas ainda não encontrou a chave exata para destravar isso."
  }
};

// As 12 Perguntas com mapeamento de pontos
const questions = [
  {
    q: "Hoje, como você sente que está sua vida financeira?",
    options: [
      { text: "💰 Consigo pagar minhas contas e ainda sobra", points: ['desejo'] },
      { text: "😐 Pago as contas, mas fico praticamente sem nada", points: ['bloqueio'] },
      { text: "😰 Vivo apertada e sempre aparece alguma coisa", points: ['medo'] },
      { text: "🔄 Quando parece que vai melhorar, acontece alguma coisa e volto para o zero", points: ['ciclo'] }
    ]
  },
  {
    q: "Quando você recebe dinheiro, o que costuma acontecer?",
    options: [
      { text: "Consigo guardar uma parte", points: ['desejo'] },
      { text: "Sempre aparece alguma coisa para gastar", points: ['ciclo'] },
      { text: "O dinheiro simplesmente desaparece", points: ['bloqueio'] },
      { text: "Parece que nunca é suficiente, independentemente de quanto recebo", points: ['medo'] }
    ]
  },
  {
    q: "Você sente que trabalha muito, mas o dinheiro não acompanha?",
    options: [
      { text: "Sim, bastante", points: ['bloqueio'] },
      { text: "Às vezes", points: ['ciclo'] },
      { text: "Não", points: ['desejo'] },
      { text: "É exatamente o que mais me incomoda hoje", points: ['bloqueio', 'medo'] }
    ]
  },
  {
    q: "Qual dessas frases mais parece com você?",
    options: [
      { text: "Dinheiro vem, mas vai embora rápido.", points: ['ciclo'] },
      { text: "Eu queria ganhar mais, mas não sei por onde começar.", points: ['desejo'] },
      { text: "Parece que sempre existe alguma coisa impedindo minha vida de andar.", points: ['bloqueio'] },
      { text: "Eu sinto que poderia estar vivendo muito melhor.", points: ['desejo'] }
    ]
  },
  {
    q: "Quando você pensa em prosperidade, qual sentimento aparece primeiro?",
    options: [
      { text: "Esperança", points: ['desejo'] },
      { text: "Ansiedade", points: ['medo'] },
      { text: "Medo de nunca conseguir", points: ['medo'] },
      { text: "Vontade de mudar minha vida", points: ['desejo'] }
    ]
  },
  {
    q: "Você já tentou mudar sua vida financeira de alguma forma?",
    options: [
      { text: "Sim, várias vezes", points: ['bloqueio'] },
      { text: "Sim, mas acabo desistindo", points: ['ciclo'] },
      { text: "Poucas vezes", points: ['medo'] },
      { text: "Ainda não encontrei algo que realmente fizesse sentido para mim", points: ['desejo'] }
    ]
  },
  {
    q: "Você costuma perceber padrões que se repetem na sua vida?",
    options: [
      { text: "Sim, parece que algumas situações sempre voltam", points: ['ciclo'] },
      { text: "Às vezes", points: ['ciclo', 'bloqueio'] },
      { text: "Nunca tinha parado para pensar nisso", points: ['medo'] },
      { text: "Sim, e isso me incomoda bastante", points: ['desejo', 'ciclo'] }
    ]
  },
  {
    q: "E quando alguma coisa começa a dar certo para você...",
    options: [
      { text: "Eu consigo manter", points: ['desejo'] },
      { text: "Sempre aparece algum imprevisto", points: ['ciclo'] },
      { text: "Fico com medo de perder", points: ['medo'] },
      { text: "Parece que alguma coisa acontece e tudo desanda", points: ['ciclo', 'bloqueio'] }
    ]
  },
  {
    q: "Você acredita que seus pensamentos e hábitos podem influenciar a forma como você lida com dinheiro?",
    options: [
      { text: "Sim", points: ['desejo'] },
      { text: "Talvez", points: ['medo'] },
      { text: "Nunca pensei nisso dessa maneira", points: ['bloqueio'] },
      { text: "Quero entender melhor", points: ['desejo'] }
    ]
  },
  {
    q: "Se sua vida financeira melhorasse nos próximos meses, o que você mais gostaria de conquistar?",
    options: [
      { text: "🏠 Ter minha própria casa", points: ['desejo'] },
      { text: "💳 Sair das dívidas", points: ['ciclo', 'medo'] },
      { text: "💰 Ter dinheiro sobrando", points: ['bloqueio'] },
      { text: "✈️ Poder realizar meus sonhos", points: ['desejo'] },
      { text: "❤️ Dar uma vida melhor para minha família", points: ['desejo'] },
      { text: "🌱 Simplesmente viver com mais tranquilidade", points: ['medo'] }
    ]
  },
  {
    q: "O que mais parece estar faltando hoje?",
    options: [
      { text: "Mais dinheiro", points: ['bloqueio'] },
      { text: "Mais oportunidades", points: ['ciclo'] },
      { text: "Mais organização", points: ['desejo'] },
      { text: "Mais confiança", points: ['medo'] },
      { text: "Uma mudança de mentalidade", points: ['desejo'] },
      { text: "Eu sinceramente não sei", points: ['medo', 'bloqueio'] }
    ]
  },
  {
    q: "Você gostaria de entender quais padrões podem estar influenciando sua relação com dinheiro?",
    options: [
      { text: "✨ Sim, quero descobrir", points: ['desejo'] },
      { text: "Talvez", points: ['medo'] },
      { text: "Tenho muita curiosidade sobre isso", points: ['desejo'] }
    ]
  }
];

// Estado da Aplicação
let currentIndex = 0;
let historyPoints = []; // Guarda os pontos ganhos em cada pergunta para permitir voltar

// Analytics Placeholder
function trackEvent(eventName, eventData = {}) {
  console.log(`[ANALYTICS] Evento: ${eventName}`, eventData);
  // Integrar aqui window.dataLayer.push ou fbq('track', eventName) no futuro
}

// Inicialização do DOM
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  document.getElementById('book-cover-image').src = BOOK_COVER_IMAGE;
});

// Telas
const screenWelcome = document.getElementById('screen-welcome');
const screenQuestions = document.getElementById('screen-questions');
const screenTransition = document.getElementById('screen-transition');
const screenProcessing = document.getElementById('screen-processing');
const screenResult = document.getElementById('screen-result');

const questionWrapper = document.getElementById('question-wrapper');
const btnBack = document.getElementById('btn-back');

function startQuiz() {
  trackEvent('quiz_started');
  currentIndex = 0;
  historyPoints = [];
  questionWrapper.style.opacity = '1';
  switchScreen(screenWelcome, screenQuestions);
  renderQuestion();
}

function renderQuestion() {
  const qData = questions[currentIndex];
  
  document.getElementById('question-counter').innerText = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  document.getElementById('question-text').innerText = qData.q;
  
  const progressPercent = (currentIndex / questions.length) * 100;
  document.getElementById('progress-fill').style.width = `${progressPercent}%`;

  btnBack.disabled = (currentIndex === 0);

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-btn btn-option';
    btn.innerHTML = opt.text;
    btn.onclick = () => handleAnswer(opt.points, idx);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(pointsArr, optIndex) {
  trackEvent('question_answered', { question_index: currentIndex, selected_option: optIndex });
  
  // Salva no histórico para o botão voltar
  historyPoints.push(pointsArr);

  // Fade out suave
  questionWrapper.style.opacity = '0';
  
  setTimeout(() => {
    currentIndex++;
    
    // Checa se é momento de tela de transição
    if (currentIndex === 3) {
      showTransition("Interessante...", "suas respostas já mostram alguns padrões importantes. ✨<br><br>Agora vamos aprofundar um pouco mais.");
    } else if (currentIndex === 7) {
      showTransition("Estamos quase chegando...", "Faltam poucas perguntas para revelar seu padrão predominante. 🔮");
    } else if (currentIndex < questions.length) {
      renderQuestion();
      questionWrapper.style.opacity = '1';
    } else {
      finishQuiz();
    }
  }, 300);
}

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    historyPoints.pop(); // Remove pontuação da última pergunta
    
    questionWrapper.style.opacity = '0';
    setTimeout(() => {
      renderQuestion();
      questionWrapper.style.opacity = '1';
    }, 300);
  }
}

function showTransition(title, text) {
  document.getElementById('transition-title').innerText = title;
  document.getElementById('transition-text').innerHTML = text;
  
  switchScreen(screenQuestions, screenTransition);
}

function continueQuiz() {
  switchScreen(screenTransition, screenQuestions);
  renderQuestion();
  setTimeout(() => {
    questionWrapper.style.opacity = '1';
  }, 100);
}

function finishQuiz() {
  trackEvent('quiz_completed');
  document.getElementById('progress-fill').style.width = `100%`;
  
  setTimeout(() => {
    switchScreen(screenQuestions, screenProcessing);
    simulateProcessing();
  }, 300);
}

function simulateProcessing() {
  const processingText = document.getElementById('processing-text');
  const messages = [
    "Analisando suas respostas...",
    "Identificando padrões...",
    "Preparando seu resultado...",
    "Seu resultado está pronto ✨"
  ];
  
  let msgIndex = 0;
  const interval = setInterval(() => {
    msgIndex++;
    if (msgIndex < messages.length) {
      processingText.innerText = messages[msgIndex];
    } else {
      clearInterval(interval);
      calculateAndShowResult();
    }
  }, 1000); // Rápido para não entediar (total 4 seg)
}

function calculateAndShowResult() {
  // Contar pontos totais
  const scores = { ciclo: 0, bloqueio: 0, medo: 0, desejo: 0 };
  
  historyPoints.forEach(arr => {
    arr.forEach(p => {
      if (scores[p] !== undefined) scores[p]++;
    });
  });

  // Achar o maior
  let maxScore = -1;
  let dominantProfile = 'ciclo'; // default fallback
  
  for (const [prof, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      dominantProfile = prof;
    }
  }

  const profileData = PROFILES[dominantProfile];
  
  document.getElementById('profile-name').innerText = profileData.title;
  // O texto base é preenchido no HTML, nós adicionamos a descrição específica se desejar:
  document.getElementById('profile-description').innerHTML = 
    `<strong>${profileData.desc}</strong><br><br>Você pode estar enfrentando uma dificuldade em romper determinados ciclos que acabam se repetindo na sua vida financeira. E talvez seja justamente por isso que apenas tentar ganhar mais dinheiro nem sempre parece resolver tudo.`;

  trackEvent('result_viewed', { profile: profileData.title });
  switchScreen(screenProcessing, screenResult);
}

function goToCheckout() {
  trackEvent('checkout_clicked');
  window.location.href = CHECKOUT_URL;
}

function restartQuiz() {
  switchScreen(screenResult, screenWelcome);
}

function switchScreen(hideScreen, showScreen) {
  hideScreen.classList.remove('active');
  setTimeout(() => {
    showScreen.classList.add('active');
  }, 500);
}

function createStars() {
  const container = document.getElementById('stars-container');
  const numStars = 40;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
    star.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(star);
  }
}
