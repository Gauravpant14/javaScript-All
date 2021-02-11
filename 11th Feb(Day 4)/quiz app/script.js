const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
startBtn.addEventListener('click', startGame);

let shuffledQuestions, currentQuestionIndex

function startGame() {
 startBtn.classList.add('hide');
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainer.classList.remove('hide');
 setNextQuestion();
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    });

    

}

function selectAnswer(){

}

const questions = [
    {
        question: 'what is 2+5 ?',
        answers:[
            {text: '7', correct: true},
            {text: '22', correct: false},
            {text: '23', correct: false},
            {text: '26', correct: false}
        ]
    }
]