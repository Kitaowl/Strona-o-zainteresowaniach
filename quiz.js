// Tablica z pytaniami do quizu
const questions = [
  {
    question: "Kto jest znany jako 'Król Popu'?",
    answers: [
      { text: "Elvis Presley", correct: false },
      { text: "Freddie Mercury", correct: false },
      { text: "Michael Jackson", correct: true },
      { text: "Prince", correct: false },
    ],
  },
  {
    question: "Który instrument ma struny?",
    answers: [
      { text: "Flet", correct: false },
      { text: "Perkusja", correct: false },
      { text: "Gitara", correct: true },
      { text: "Trąbka", correct: false },
    ],
  },
  {
    question: "Ile strun ma klasyczna gitara?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Jaki styl muzyczny reprezentuje zespół Metallica?",
    answers: [
      { text: "Jazz", correct: false },
      { text: "Rock", correct: false },
      { text: "Heavy metal", correct: true },
      { text: "Reggae", correct: false },
    ],
  },
  {
    question: "Który z tych artystów grał w zespole Queen?",
    answers: [
      { text: "David Bowie", correct: false },
      { text: "Freddie Mercury", correct: true },
      { text: "Mick Jagger", correct: false },
      { text: "Ozzy Osbourne", correct: false },
    ],
  },
  {
    question: "Co to jest BPM w muzyce?",
    answers: [
      { text: "Rodzaj instrumentu", correct: false },
      { text: "Efekt dźwiękowy", correct: false },
      { text: "Bit na minutę", correct: true },
      { text: "Tytuł piosenki", correct: false },
    ],
  },
  {
    question: "Który z tych instrumentów jest perkusyjny?",
    answers: [
      { text: "Fortepian", correct: false },
      { text: "Gitara", correct: false },
      { text: "Bęben", correct: true },
      { text: "Saksofon", correct: false },
    ],
  },
  {
    question: "Jak nazywa się pięciolinia po angielsku?",
    answers: [
      { text: "Music net", correct: false },
      { text: "Score line", correct: false },
      { text: "Staff", correct: true },
      { text: "Grid", correct: false },
    ],
  },
  {
    question: "Jaki klucz najczęściej używany jest w nutach?",
    answers: [
      { text: "Basowy", correct: false },
      { text: "Skrzypcowy", correct: true },
      { text: "Altowy", correct: false },
      { text: "Tenorowy", correct: false },
    ],
  },
  {
    question: "Który z tych zespołów pochodzi z Polski?",
    answers: [
      { text: "The Beatles", correct: false },
      { text: "Dżem", correct: true },
      { text: "AC/DC", correct: false },
      { text: "Nirvana", correct: false },
    ],
  },
  {
    question: "Jaki jest standardowy strój gitary (dla 6-strunowej)?",
    answers: [
      { text: "C-D-E-F-G-A", correct: false },
      { text: "E-A-D-G-B-E", correct: true },
      { text: "A-D-G-C-E-A", correct: false },
      { text: "E-B-G-D-A-E", correct: false },
    ],
  },
  {
    question: "Kto skomponował 'Dla Elizy'?",
    answers: [
      { text: "Mozart", correct: false },
      { text: "Beethoven", correct: true },
      { text: "Bach", correct: false },
      { text: "Chopin", correct: false },
    ],
  },
  {
    question: "Który instrument ma klawisze?",
    answers: [
      { text: "Kontrabas", correct: false },
      { text: "Fortepian", correct: true },
      { text: "Gitara basowa", correct: false },
      { text: "Flet poprzeczny", correct: false },
    ],
  },
  {
    question: "Który z tych stylów pochodzi z Jamajki?",
    answers: [
      { text: "Rock", correct: false },
      { text: "Hip-hop", correct: false },
      { text: "Reggae", correct: true },
      { text: "Funk", correct: false },
    ],
  },
  {
    question: "Kto śpiewał 'Shape of You'?",
    answers: [
      { text: "Justin Bieber", correct: false },
      { text: "Ed Sheeran", correct: true },
      { text: "Sam Smith", correct: false },
      { text: "Harry Styles", correct: false },
    ],
  },
];

// Pobranie elementów HTML do manipulacji
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // numer aktualnego pytania
let score = 0; // wynik gracza

// Rozpoczęcie quizu
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Dalej";
  showQuestion(); // pokaż pierwsze pytanie
}

// Wyświetlanie aktualnego pytania i odpowiedzi
function showQuestion() {
  resetState(); // usunięcie poprzednich odpowiedzi
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  // Tworzenie przycisków z odpowiedziami
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer); // obsługa kliknięcia
    answerButtons.appendChild(button);
  });
}

// Usunięcie starych odpowiedzi i ukrycie przycisku "Dalej"
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Sprawdzenie, czy odpowiedź była poprawna
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct"); // zaznaczenie zielonym
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); // zaznaczenie czerwonym
  }

  // Pokazanie poprawnej odpowiedzi i zablokowanie wszystkich
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block"; // pokazanie przycisku "Dalej"
}

// Obsługa kliknięcia "Dalej"
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // następne pytanie
  } else {
    showScore(); // koniec quizu
  }
});

// Wyświetlenie wyniku końcowego
function showScore() {
  resetState();
  questionElement.innerHTML = `Quiz ukończony! Twój wynik: ${score} z ${questions.length} 🎉`;
  nextButton.innerHTML = "Zagraj ponownie";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz; // restart quizu
}

// Uruchomienie quizu przy załadowaniu strony
startQuiz();
