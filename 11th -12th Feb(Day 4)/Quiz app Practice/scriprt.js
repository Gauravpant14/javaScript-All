const quiz = [
    {
        Question: "Q1 : Which Schedule of the Constitution is related to the allocation of seats in the Rajya Sabha to the States and the Union Territories ?",
        a: 'Fourth Schedule',
        b: 'Fifth Schedule',
        c: 'sixth Schedule',
        d: 'Seventh Schedule',
        ans: "ans1",
    },
    { 
        Question: 
        "Q2 : Which of the following features of the Constitution have been borrowed from the Government of India Act of 1935 ?",
        a: "Office of Governor", 
        b: "Concurrent list", 
        c: "Emergency Provisions", 
        d: "Rule of law", 
        ans: "ans2" },
    { 
        Question: 
        "Q3 : what is 1+3 ?",
        a: 2, 
        b: 3, 
        c: 4, 
        d: 5, 
        ans: "ans3" 
    },
    { 
         Question:
        "Q4 : what is 1+4 ?", 
        a: 2, 
        b: 3, 
        c: 4, 
        d: 5, 
        ans: "ans4"
 },
];


const question = document.querySelector(".Question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");
var answers = document.querySelectorAll(".answer")
const submit = document.querySelector("#submit");
const resetBtn = document.querySelector(".Reset");
const showScore = document.querySelector("#showScore");
const playGame = document.querySelector(".start-Game");
const innerDiv = document.querySelector(".inner-div");

playGame.addEventListener('click', function(){
innerDiv.classList.remove('hide');
playGame.classList.add('hide');
})

let questionCount = 0;
let score = 0;


function loadQuestion(){
    const questionList = quiz[questionCount];
    question.innerText = questionList.Question;
    opt1.innerText = questionList.a;
    opt2.innerText = questionList.b;    
    opt3.innerText = questionList.c;
    opt4.innerText = questionList.d;
}

var currentAns;
function getCheckedAns() {
   
         answers.forEach(element => {
        if(element.checked){
        currentAns = element.id;
            
        }
        
    });

   
}

submit.addEventListener('click',function() {
    console.log('submit click')
    const checkedAns = getCheckedAns();
    if(currentAns === quiz[questionCount].ans){
        alert('Right answer');
        score++;
    }

    questionCount++; 
    if(questionCount < quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `<h2>Your Score is ${score} </h2>`;
        if(score < 2 ){
            showScore.innerHTML = `Better Luck Next Time <br> <h2>your Score is ${score} </h2>`;
        }
        resetBtn.classList.remove('Reset');
        submit.classList.add('hide');
        showScore.classList.remove('showArea');

    }
})

loadQuestion();


