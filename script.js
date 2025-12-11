// =========================
// FUNDO ANIMADO – TEIA DIGITAL
// =========================
(function createDigitalGrid() {
  const grid = document.createElement("div");
  grid.id = "digital-grid";
  document.body.appendChild(grid);
})();

// =========================
// PERGUNTAS
// =========================

const QUESTIONS = {
  facil: [
    {
      pergunta: "Qual é a linguagem usada para estruturar páginas web?",
      alternativas: ["CSS", "HTML", "Python", "C++"],
      correta: 1,
    },
    {
      pergunta: "Quanto é 7 + 3?",
      alternativas: ["10", "9", "11", "7"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um navegador?",
      alternativas: ["Chrome", "Excel", "Discord", "Steam"],
      correta: 0,
    },
    {
      pergunta: "CSS serve para…",
      alternativas: [
        "Estilizar páginas",
        "Criar servidores",
        "Compilar código",
        "Criar bancos de dados",
      ],
      correta: 0,
    },
    {
      pergunta: "JavaScript roda no…",
      alternativas: ["Navegador", "Excel", "Photoshop", "Word"],
      correta: 0,
    },
    {
      pergunta: "Qual é um sistema operacional?",
      alternativas: ["Linux", "Chrome", "YouTube", "Google"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um tipo de dado?",
      alternativas: ["String", "Monitor", "Mouse", "Janela"],
      correta: 0,
    },
    {
      pergunta: "O que significa 'www'?",
      alternativas: [
        "World Wide Web",
        "Windows Web Work",
        "Wide World Window",
        "Web World Wide",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual destes é hardware?",
      alternativas: ["Teclado", "Chrome", "Java", "CSS"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um arquivo de imagem?",
      alternativas: ["PNG", "HTML", "CSS", "JS"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um periférico?",
      alternativas: ["Mouse", "CPU", "RAM", "SSD"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um smartphone?",
      alternativas: ["iPhone", "Windows", "Linux"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um navegador?",
      alternativas: ["Firefox", "Paint", "Excel"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um serviço de streaming?",
      alternativas: ["Netflix", "Word", "Excel"],
      correta: 0,
    },
  ],

  medio: [
    {
      pergunta: "Qual propriedade CSS muda a cor do texto?",
      alternativas: ["font-color", "color", "text-color"],
      correta: 1,
    },
    {
      pergunta: "Qual palavra cria variável em JS?",
      alternativas: ["var", "make", "def"],
      correta: 0,
    },
    {
      pergunta: "Qual tag insere JavaScript?",
      alternativas: ["<script>", "<js>", "<javascript>"],
      correta: 0,
    },
    {
      pergunta: "Qual método converte string em número?",
      alternativas: ["parseInt()", "toString()", "join()"],
      correta: 0,
    },
    {
      pergunta: "Qual símbolo representa ID no CSS?",
      alternativas: ["#", ".", "/", "@"],
      correta: 0,
    },
    {
      pergunta: "JSON significa…",
      alternativas: [
        "JavaScript Object Notation",
        "Java System Object",
        "Java Syntax Output",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um framework JS?",
      alternativas: ["React", "Chrome", "Linux"],
      correta: 0,
    },
    {
      pergunta: "Qual comando limpa o console?",
      alternativas: ["console.clear()", "console.clean()", "console.remove()"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um banco NoSQL?",
      alternativas: ["MongoDB", "MySQL", "Oracle"],
      correta: 0,
    },
    {
      pergunta: "Qual método adiciona item no final do array?",
      alternativas: ["push()", "pop()", "shift()"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um banco SQL?",
      alternativas: ["MySQL", "MongoDB", "Redis"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um tipo de API?",
      alternativas: ["REST", "PNG", "CSS"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um método HTTP?",
      alternativas: ["POST", "PRINT", "COPY"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um tipo de loop?",
      alternativas: ["for", "print", "case"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um operador lógico?",
      alternativas: ["&&", "++", "--"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um tipo de erro em JavaScript?",
      alternativas: ["SyntaxError", "HTMLerror", "CSSerror"],
      correta: 0,
    },
  ],

  dificil: [
    {
      pergunta: "Complexidade média de busca em hash?",
      alternativas: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correta: 2,
    },
    {
      pergunta: "O que significa 'vh' no CSS?",
      alternativas: [
        "Viewport Height",
        "Vertical Height",
        "View Height",
        "Visual Height",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método converte JSON em objeto?",
      alternativas: ["JSON.parse()", "JSON.decode()", "JSON.object()"],
      correta: 0,
    },
    {
      pergunta: "Qual estrutura usa LIFO?",
      alternativas: ["Pilha", "Fila", "Árvore", "Grafo"],
      correta: 0,
    },
    {
      pergunta: "Qual algoritmo é usado em buscas binárias?",
      alternativas: ["Dividir e conquistar", "Força bruta", "Backtracking"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um protocolo de rede?",
      alternativas: ["HTTP", "HTML", "CSS"],
      correta: 0,
    },
    {
      pergunta: "Qual é o tipo de dado imutável em JS?",
      alternativas: ["String", "Array", "Object", "Map"],
      correta: 0,
    },
    {
      pergunta: "Qual estrutura é usada em BFS?",
      alternativas: ["Fila", "Pilha", "Árvore", "Heap"],
      correta: 0,
    },
    {
      pergunta: "Qual método remove o último item do array?",
      alternativas: ["pop()", "shift()", "remove()"],
      correta: 0,
    },
    {
      pergunta: "Qual destes é um algoritmo de ordenação?",
      alternativas: ["Merge Sort", "Deep Sort", "Fast Loop"],
      correta: 0,
    },
  ],
};

const POINTS_PER_CORRECT = 10;
const TIME_PER_QUESTION_SECONDS = 5 * 60; // 5 minutos

// =========================
// SISTEMA DE XP
// =========================

let xp = 0;
let level = 1;
const XP_PER_CORRECT = 15;
const XP_TO_LEVEL_UP = 100;

function updateXP() {
  const xpDisplay = document.getElementById("xpDisplay");
  const levelDisplay = document.getElementById("levelDisplay");

  if (xpDisplay) xpDisplay.textContent = `${xp} / ${XP_TO_LEVEL_UP}`;
  if (levelDisplay) levelDisplay.textContent = level;

  if (xp >= XP_TO_LEVEL_UP) {
    xp -= XP_TO_LEVEL_UP;
    level++;
    if (levelDisplay) levelDisplay.textContent = level;

    document.body.style.filter = "brightness(1.6)";
    setTimeout(() => {
      document.body.style.filter = "brightness(1)";
    }, 300);
  }
}

// =========================
// HELPER – EMBARALHAR ARRAY
// =========================

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// embaralha perguntas de cada nível
Object.keys(QUESTIONS).forEach((levelKey) => {
  QUESTIONS[levelKey] = shuffleArray(QUESTIONS[levelKey]);
});

// =========================
// ELEMENTOS DO DOM
// =========================

const playerNameInput = document.getElementById("playerNameInput");
const levelSelect = document.getElementById("levelSelect");
const startBtn = document.getElementById("startBtn");
const skipBtn = document.getElementById("skipBtn");
const restartBtn = document.getElementById("restartBtn");

const introSection = document.getElementById("introSection");
const questionSection = document.getElementById("questionSection");
const resultSection = document.getElementById("resultSection");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");

const playerNameDisplay = document.getElementById("playerNameDisplay");
const levelNameDisplay = document.getElementById("levelNameDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const currentQuestionNumber = document.getElementById("currentQuestionNumber");
const totalQuestionsNumber = document.getElementById("totalQuestionsNumber");
const resultText = document.getElementById("resultText");

const tooltipDescription = document.getElementById("tooltipDescription");
const tooltipMode = document.getElementById("tooltipMode");
const tooltipFlavor = document.getElementById("tooltipFlavor");

const soundCorrect = document.getElementById("soundCorrect");
const soundWrong = document.getElementById("soundWrong");

// =========================
// ESTADO DO JOGO
// =========================

let currentLevelKey = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeRemaining = 0;
let playerName = "";
let isAnswering = false;

// =========================
// TIMER
// =========================

function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

function updateTimerDisplay() {
  if (timerDisplay) {
    timerDisplay.textContent = formatTime(timeRemaining);
  }
}

function startTimer() {
  clearInterval(timer);
  timeRemaining = TIME_PER_QUESTION_SECONDS;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

// =========================
// SONS
// =========================

function playCorrectSound() {
  soundCorrect.currentTime = 0;
  soundCorrect.play().catch(() => {});
}

function playWrongSound() {
  soundWrong.currentTime = 0;
  soundWrong.play().catch(() => {});
}


// =========================
// TELAS
// =========================

function setScreen(screen) {
  // "intro" | "question" | "result"
  if (introSection) introSection.style.display = screen === "intro" ? "block" : "none";
  if (questionSection) questionSection.style.display = screen === "question" ? "block" : "none";
  if (resultSection) resultSection.style.display = screen === "result" ? "block" : "none";
}

function resetGameState() {
  currentLevelKey = null;
  currentQuestions = [];
  currentIndex = 0;
  score = 0;
  timeRemaining = 0;
  isAnswering = false;
  xp = 0;
  level = 1;

  if (scoreDisplay) scoreDisplay.textContent = "0";
  if (timerDisplay) timerDisplay.textContent = "—";
  if (playerNameDisplay) playerNameDisplay.textContent = "—";
  if (levelNameDisplay) levelNameDisplay.textContent = "—";
  updateXP();
}

// =========================
// INICIAR JOGO
// =========================

function startGame() {
  const selectedLevel = levelSelect ? levelSelect.value : "";
  const nameInput = playerNameInput ? playerNameInput.value.trim() : "";

  if (!nameInput) {
    alert("Digite seu nome antes de iniciar.");
    return;
  }

  if (!selectedLevel) {
    alert("Selecione um nível antes de iniciar.");
    return;
  }

  playerName = nameInput;
  currentLevelKey = selectedLevel;
  currentQuestions = QUESTIONS[currentLevelKey];

  if (!currentQuestions || currentQuestions.length === 0) {
    alert("Não há perguntas configuradas para este nível.");
    return;
  }

  if (playerNameDisplay) playerNameDisplay.textContent = playerName;

  const levelNameMap = {
    facil: "Nível 1 – Iniciante",
    medio: "Nível 2 – Intermediário",
    dificil: "Nível 3 – Avançado",
  };
  if (levelNameDisplay) {
    levelNameDisplay.textContent = levelNameMap[currentLevelKey] || currentLevelKey;
  }

  score = 0;
  if (scoreDisplay) scoreDisplay.textContent = "0";
  currentIndex = 0;

  if (totalQuestionsNumber) {
    totalQuestionsNumber.textContent = currentQuestions.length.toString();
  }

  if (tooltipMode) {
    tooltipMode.textContent = `Executando: ${levelNameDisplay.textContent}`;
  }
  if (tooltipDescription) {
    tooltipDescription.textContent =
      "Responda às questões dentro do tempo. Cada acerto aumenta sua pontuação; erros e tempo esgotado não pontuam.";
  }
  if (tooltipFlavor) {
    tooltipFlavor.textContent =
      "“Sua precisão e velocidade serão avaliadas. Escolha com cuidado, mas não demore demais.”";
  }

  setScreen("question");
  loadQuestion();
}

// =========================
// CARREGAR PERGUNTA
// =========================

function loadQuestion() {
  if (currentIndex >= currentQuestions.length) {
    endGame();
    return;
  }

  const question = currentQuestions[currentIndex];

  if (currentQuestionNumber) {
    currentQuestionNumber.textContent = (currentIndex + 1).toString();
  }
  if (questionText) {
    questionText.textContent = question.pergunta;
  }

  // embaralhar alternativas
  const alternativas = question.alternativas.map((alt, index) => ({
    texto: alt,
    indexOriginal: index,
  }));

  shuffleArray(alternativas);

  const novaPosicaoCorreta = alternativas.findIndex(
    (a) => a.indexOriginal === question.correta
  );
  question.correta = novaPosicaoCorreta;

  if (!answersContainer) return;
  answersContainer.innerHTML = "";
  isAnswering = true;

  alternativas.forEach((alt, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = alt.texto;
    btn.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(btn);
  });

  startTimer();
}

// =========================
// RESPOSTA
// =========================

function handleAnswer(selectedIndex) {
  if (!isAnswering) return;
  isAnswering = false;

  stopTimer();

  const question = currentQuestions[currentIndex];
  const buttons = answersContainer
    ? answersContainer.querySelectorAll(".answer-btn")
    : [];

  buttons.forEach((btn, index) => {
    btn.classList.add("disabled");

    if (index === question.correta) {
      btn.classList.add("correct");
    }

    if (index === selectedIndex && index !== question.correta) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === question.correta) {
    score += POINTS_PER_CORRECT;
    if (scoreDisplay) scoreDisplay.textContent = score.toString();
    xp += XP_PER_CORRECT;
    updateXP();

    // Som Cyberpunk de acerto
    const correctSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
    correctSound.play().catch(() => {});
  } else {
    // Som Cyberpunk de erro
    const wrongSound = new Audio("https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg");
    wrongSound.play().catch(() => {});
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 900);
}


function handleTimeOut() {
  if (!isAnswering) return;
  isAnswering = false;

  playWrongSound();

  const question = currentQuestions[currentIndex];
  const buttons = answersContainer
    ? answersContainer.querySelectorAll(".answer-btn")
    : [];

  buttons.forEach((btn, index) => {
    btn.classList.add("disabled");
    if (index === question.correta) {
      btn.classList.add("correct");
    }
  });

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 900);
}

// =========================
// FINAL DO JOGO
// =========================

function endGame() {
  stopTimer();
  setScreen("result");

  const totalQuestions = currentQuestions.length;
  const maxScore = totalQuestions * POINTS_PER_CORRECT;

  if (resultText) {
    resultText.innerHTML = `
      <div class="result-line">Jogador: <strong>${playerName}</strong></div>
      <div class="result-line">Pontuação total: <strong>${score} / ${maxScore}</strong></div>
      <div class="result-line">XP final: <strong>${xp}</strong></div>
      <div class="result-line">Level final: <strong>${level}</strong></div>
    `;
  }

  if (tooltipMode) {
    tooltipMode.textContent = "Missão finalizada";
  }
  if (tooltipDescription) {
    tooltipDescription.textContent =
      "Simulação concluída. Os dados coletados podem ser usados para treinos futuros.";
  }
  if (tooltipFlavor) {
    tooltipFlavor.textContent =
      "“Cada tentativa refina sua habilidade. Recomece quantas vezes forem necessárias.”";
  }
}

// =========================
// RECOMEÇAR
// =========================

function restartGame() {
  stopTimer();
  resetGameState();
  setScreen("intro");

  if (tooltipMode) {
    tooltipMode.textContent = "Aguardando inicialização…";
  }
  if (tooltipDescription) {
    tooltipDescription.textContent =
      "Jogo interativo de perguntas e respostas. Escolha um nível, informe seu nome e inicie o desafio.";
  }
  if (tooltipFlavor) {
    tooltipFlavor.textContent =
      "“Toda jornada começa com um passo simples. Escolha seu nível e entre no protocolo de aprendizado.”";
  }
}

// =========================
// EVENTOS
// =========================

if (startBtn) {
  startBtn.addEventListener("click", startGame);
}

if (restartBtn) {
  restartBtn.addEventListener("click", restartGame);
}

if (skipBtn) {
  skipBtn.addEventListener("click", () => {
    if (!currentQuestions.length) return;
    stopTimer();
    playWrongSound();
    isAnswering = false;
    currentIndex++;
    loadQuestion();
  });
}
