const questions = [
    {
        question: "What year was G.O.G Chops n Grills established?",
        answers: [
            { text: "2006", correct: false },
            { text: "2009", correct: true },
            { text: "2011", correct: false },
            { text: "2013", correct: false },
        ]
    },
    {
        question: "What year did G.O.G Chops n Grills bought  its second bus?",
        answers: [
            { text: "October 2015", correct: false },
            { text: "August 2015", correct: false },
            { text: "April 2011", correct: false },
            { text: "July 2015", correct: true },
        ]
    },
    {
        question: "When was G.O.G Chops n Grills handed over to Samuel?",
        answers: [
            { text: "2019", correct: false },
            { text: "2020", correct: true },
            { text: "2011", correct: false },
            { text: "2013", correct: false },
        ]
    },
    {
        question: "When was G.O.G Chops n Grills established in Ogudu?",
        answers: [
            { text: "2006", correct: false },
            { text: "2009", correct: false },
            { text: "2020", correct: true },
            { text: "2013", correct: false },
        ]
    },
    {
        question: "What is G.O.G Chops n Grills known for?",
        answers: [
            { text: "Asun", correct: true },
            { text: "Shawarma", correct: false },
            { text: "Small-chops", correct: false },
            { text: "Pasta", correct: false },
        ]
    },
    {
        question: "Which of the following is not offered by G.O.G Chops n Grills?",
        answers: [
            { text: "Shawarma", correct: false },
            { text: "Popcorn", correct: false },
            { text: "Sushi" ,correct: true },
            { text: "BBQ", correct: false },
        ]
    },
    {
        question: "Where is G.O.G Chops n Grills located?",
        answers: [
            { text: "73a Ogudu Road, Ojota, Lagos", correct: true },
            { text: "55a Ogudu Road, Ojota, Lagos", correct: false },
            { text: "73a Ogudu Road, Ikeja, Lagos", correct: false },
            { text: "73a Ogudu Road, Lekki, Lagos", correct: false },
        ]
    },
    {
        question: "What is the contact number for G.O.G Chops n Grills?",
        answers: [
            { text: "08088439511", correct: true },
            { text: "08123456789", correct: false },
            { text: "09098765432", correct: false },
            { text: "07011223344", correct: false },
        ]
    },
    {
        question: "What is the full name of the owner of G.O.G Chops n Grills?",
        answers: [
            { text: "Talabi Taiwo Samuel", correct: true },
            { text: "Talabi Samuel Taiwo", correct: false },
            { text: "Samuel Taiwo Talabi", correct: false },
            { text: "Taiwo Talabi Samuel", correct: false },
        ]
    },
    {
        question: "What type of cuisine is G.O.G Chops n Grills known for?",
        answers: [
            { text: "Continental", correct: false },
            { text: "Local Nigerian", correct: true },
            { text: "Chinese", correct: false },
            { text: "Italian", correct: false },
        ]
    },
    {
        question: "Which of these is a skill of the owner of G.O.G Chops n Grills?",
        answers: [
            { text: "Cooking", correct: true },
            { text: "Carpentry", correct: false },
            { text: "Painting", correct: false },
            { text: "Driving", correct: false },
        ]
    },
    {
        question: "What is the slogan of G.O.G Chops n Grills?",
        answers: [
            { text: "The Best Taste in Town", correct: false },
            { text: "Grill & Chill", correct: false },
            { text: "Uniquely Delicious", correct: false },
            { text: "Taste the Difference", correct: true },
        ]
    },
    {
        question: "What type of trading is Talabi Taiwo Samuel interested in?",
        answers: [
            { text: "Stock Trading", correct: false },
            { text: "Forex Trading", correct: false },
            { text: "Cryptocurrency Trading", correct: true },
            { text: "Commodity Trading", correct: false },
        ]
    },
    {
        question: "Which school did Talabi Taiwo Samuel attend?",
        answers: [
            { text: "Hope in God Nursery and Primary School", correct: true },
            { text: "Faith in God Nursery and Primary School", correct: false },
            { text: "Grace in God Nursery and Primary School", correct: false },
            { text: "Love in God Nursery and Primary School", correct: false },
        ]
    },
    {
        question: "What is Talabi Taiwo Samuel's course of study?",
        answers: [
            { text: "Civil Engineering", correct: false },
            { text: "Architecture", correct: false },
            { text: "Computer Science", correct: true },
            { text: "Business Administration", correct: false },
        ]
    },
    {
        question: "How many children does Talabi Taiwo Samuel have?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "none", correct: true },
            { text: "6", correct: false },
        ]
    },
    {
        question: "What year did Talabi Taiwo Samuel start programming classes?",
        answers: [
            { text: "2020", correct: false },
            { text: "2021", correct: false },
            { text: "2022", correct: true },
            { text: "2019", correct: false },
        ]
    },
    {
        question: "What is one of the future goals for G.O.G Chops n Grills?",
        answers: [
            { text: "Expand to multiple locations", correct: true },
            { text: "Close down the business", correct: false },
            { text: "Switch to only online services", correct: false },
            { text: "Focus only on drinks", correct: false },
        ]
    },
    {
        question: "What innovation is G.O.G Chops n Grills planning to introduce?",
        answers: [
            { text: "Eco-friendly packaging", correct: true },
            { text: "Robot chefs", correct: false },
            { text: "Drone delivery", correct: false },
            { text: "3D printed food", correct: false },
        ]
    },
    {
        question: "What is a major challenge G.O.G Chops n Grills is preparing to tackle?",
        answers: [
            { text: "Increasing competition", correct: true },
            { text: "Declining food quality", correct: false },
            { text: "Lack of customer interest", correct: false },
            { text: "Financial instability", correct: false },
        ]
    },
];

// Shuffle function for the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    shuffleArray(questions); // Shuffle questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
