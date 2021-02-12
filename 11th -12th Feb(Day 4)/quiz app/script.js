const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let id = 0;

startBtn.addEventListener('click', startGame);

nextBtn.addEventListener('click', () =>{
    currentQuestionIndex++;
    setNextQuestion();
})


let shuffledQuestions, currentQuestionIndex

function startGame() {
 startBtn.classList.add('hide');
 shuffledQuestions = questions
 currentQuestionIndex = 0
 questionContainer.classList.remove('hide');
 setNextQuestion();
}

function setNextQuestion() {
resetState()    
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
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button)
    });

    

}

function resetState(){
    clearStatusClass(document.body)
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectButton = e.target;
    const correct = selectButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex +1) {
        nextBtn.classList.remove('hide');
    }
    else{
        startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');

    }
    else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Q1 :	What is part of a database that holds only one type of information?',
        answers:[
            {text: 'Report', correct: false},
            {text: 'Field', correct: true},
            {text: 'Record', correct: false},
            {text: 'File', correct: false}
        ]
    },
    {
        question: 'Q2 :	Which one of these is a JavaScript package manager?',
        answers:[
            {text: 'Node.js', correct: false},
            {text: 'typeScript', correct: false},
            {text: 'npm', correct: true},
            {text: 'yelp', correct: false}
        ]
    },
    {
        question: 'Q3 : The Bharat Oman Refineries Ltd operates which of the following refineries?',
        answers:[
            {text: 'Bongaigaon Refinery', correct: false},
            {text: 'Bina Refinery', correct: true},
            {text: 'Haldia Refinery', correct: false},
            {text: 'Numaligarh Refinery', correct: false}
        ]
    }
]