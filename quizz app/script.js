const questions = [
    {
        question:"when is fatiha's birthday",
        answers: [
            {text:"12th october", correct: false},
            {text:"14th october", correct: false},
            {text:"15th october", correct: true},
            {text:"17th october",  correct: false}
        ]
    },
    {
        question:"what is her favourite yoghurt",
        answers: [
            {text:"fresh yoghurt", correct: false},
            {text:"Delamere yoghurt", correct: true},
            {text:"ilara yoghurt", correct: false},
            {text:"daima yoghurt", correct: false}
        ]
    },
    {
        question:"which is her favourite yoghurt flavor",
        answers: [
            {text:" wild berrires", correct: false},
            {text:"strawberries", correct: false},
            {text:"lemon biscuit", correct: true},
            {text:"vanilla pods", correct: false}
        ]
    },
    {
        question:"what is her favourite color",
        answers: [
            {text:"purple", correct: false},
            {text:"black", correct: false},
            {text:"blue", correct: true},
            {text:"white", correct: false}
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
function showScore(){
   resetState() ;
   questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "play again";
nextButton.style.display="block";
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

