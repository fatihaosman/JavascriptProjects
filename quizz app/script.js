const quizDiv=document.getElementsByClassName('quiz')[0];
const introDiv=document.getElementsByClassName('intro')[0];
const startBtn=document.getElementsByClassName('introBtn')[0];

/*
 getElementsByClassName() returns a collection, not a single element, so you need to access the first one using [0].
 */
startBtn.addEventListener('click', function(){
    introDiv.style.display="none";
    quizDiv.style.display="block";
});



const questions = [
    {
        question:"What will typeof NaN return?",
        answers: [
            {text:"NAN", correct: false},
            {text:"undefined", correct: false},
            {text:"number", correct: true},
            {text:"object",  correct: false}
        ]
    },
    {
        question:"Which method converts a JSON string into a JavaScript object?",
        answers: [
            {text:"JSON.parse()", correct: true},
            {text:"JSON.stringify()", correct: false},
            {text:"JSON.object()", correct: false},
            {text:"parse.JSON()", correct: false}
        ]
    },
    {
        question:"How do you write a function in JavaScript?",
        answers: [
            {text:" function: myFunc() {}", correct: false},
            {text:"def myFunc() {}", correct: false},
            {text:"function myFunc() {}", correct: true},
            {text:"function = myFunc() {}", correct: false}
        ]
    },
    {
        question:"Which of these is a correct if statement?",
        answers: [
            {text:"if x = 10 then", correct: false},
            {text:"if x === 10", correct: false},
            {text:"if x == 10", correct: true},
            {text:"if (x => 10)", correct: false}
        ]
    },
    {
        question:" what is the output: console.log(2 + '2');",
        answers: [
            {text:"22", correct: true},
            {text:"NaN", correct: false},
            {text:"4", correct: false},
            {text:"Error", correct: false}
        ]
    },
     {
        question:" Which method removes the last item in an array?",
        answers: [
            {text:"shift()", correct: false},
            {text:"NaN", correct: false},
            {text:"splice()", correct: false},
            {text:"pop()", correct: true}
        ]
    },
    {
        question:" What happens if you declare a variable with let inside a block {} and try to access it outside the block?",
        answers: [
            {text:"It causes a ReferenceError", correct: true},
            {text:" It turns into null", correct: false},
            {text:"It works fine because let is global", correct: false},
            {text:"It returns undefined", correct: false}
        ]
    },
     {
        question:" Why is it generally a bad idea to use var instead of let or const in modern JavaScript?",
        answers: [
            {text:"var is function-scoped, which can lead to bugs", correct: true},
            {text:" var is block-scoped and hard to use", correct: false},
            {text:"var is too slow", correct: false},
            {text:"var doesn't exist in modern browsers", correct: false}
        ]
    },
    {
        question:" what is the main difference between == and === in javascript?",
        answers: [
            {text:"== is faster", correct: false},
            {text:"=== converts types automatically", correct: false},
            {text:" They are exactly the same", correct: false},
            {text:"== checks value, === checks value and type", correct: true}
        ]
    },
    {
        question:"What is the purpose of addEventListener in JavaScript??",
        answers: [
            {text:"To style HTML with JavaScript", correct: false},
            {text:"To declare variables", correct: false},
            {text:"To handle events like clicks and key presses", correct: true},
            {text:" To create new elements on the page", correct: false}
        ]
    }
];
/*
Purpose: These constants store references to HTML elements,
 allowing you to manipulate them easily within the script.
 */
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuizz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
    /*
    Purpose: Initializes the quiz by resetting the question index
     and score, then sets the "Next" button's label. Finally, 
     it calls showQuestion() to display the first question
     */
}

function showQuestion(){
    resetState(); /*1st */

    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber+ ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        /*button.classList.add("btn") adds the btn class to the button's class attribute. 
        This means the button will be styled according to the CSS rules defined for the btn class in your stylesheet.
        This is useful for maintaining consistent styling across all buttons in the quiz.
         */
        answerButtons.appendChild(button);

        if(answer.correct){  /*fourth */
            button.dataset.correct= answer.correct;
        }

        button.addEventListener("click",selectAnswer); /*third */
    });
}

function resetState(){  /*second ----to remove the first 4 buttons i had*/
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){ /*fifth  ---to show if you got correct answer*/
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; /*to check if your answer is correct */
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; /*seventh */
    }else{
        selectedBtn.classList.add("incorrect")
    }

 /*sixth */
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled= true;
    }) ;
    nextButton.style.display="block";
}
/*10th-----to show your score */
// function showScore(){
//    resetState() ;
//    const result = document.createElement("p");
//    result.innerHTML="Thanks for playing! Here's how you did.";
//    questionElement.appendChild(result);
//    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML = "play again";
//     nextButton.style.display="none";
// }

function showScore(){
   resetState();

   questionElement.innerHTML = ""; // Clear existing content

   const resultTitle = document.createElement("p");
   resultTitle.innerHTML = "Thanks for playing! Here's how you did:";
   resultTitle.style.fontWeight = "bold";
   resultTitle.style.fontSize = "20px";
   resultTitle.style.marginBottom = "10px";
   resultTitle.style.textAlign = "center";
   resultTitle.style.color = " #222";

   const scoreText = document.createElement("p");
   scoreText.innerHTML = `You scored ${score} out of ${questions.length}!`;
   scoreText.style.fontSize = "18px";
   scoreText.style.textAlign = "center";
    scoreText.style.color = " #9aeabc";
   questionElement.appendChild(resultTitle);
   questionElement.appendChild(scoreText);

//    nextButton.innerHTML = "Play Again";
//    nextButton.style.display = "none";  // Show play again button
}





/**9th---to continue displaying the question */
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



/*8th */
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuizz();
    }
    
});

startQuizz();

