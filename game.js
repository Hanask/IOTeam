//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array
let questions = [{
    question: "A species is defined as endangered when it",
    choiceA: "suffers from damage to its habitat",
    choiceB: "suffers from disease or predation",
    choiceC: "when there are hazards to the continued life of the species",
    choiceD: "all of the above",
    correctAnswer: "D"
}, {
    question: "One of the most endangered habitats in the world, as a result of human development, pollution and climate change is",
    choiceA: "Freshwater systems",
    choiceB: "desert ecosystems",
    choiceC: "marine ecosystems",
    choiceD: "none of the above",
    correctAnswer: "A"
}, {
    question: "Which is the symbol of the World Wildlife Fund?",
    choiceA: "Giant Panda",
    choiceB: "Dolphin",
    choiceC: "Blue Whale",
    choiceD: "Tiger",
    correctAnswer: "A"
}, {
    question: "What is the main cause of extinction of tigers?",
    choiceA: "hunting",
    choiceB: "climate change",
    choiceC: "disease",
    choiceD: "building of new homes",
    correctAnswer: "A"
}, {
    question: "Which poses the greatest threat to polar bears today?",
    choiceA: "wildlife hunting",
    choiceB: "climate change",
    choiceC: "water pollution",
    choiceD: "deforestation",
    correctAnswer: "B"
}, {
    question: "What can you do to help protect coral reefs?",
    choiceA: "Buy and use oxybenzone and octinoxate-free sunscreen",
    choiceB: "Avoid purchasing cora",
    choiceC: "Choose seafood that has been sustainably sourced",
    choiceD: "All of the above",
    correctAnswer: "D"
}, {
    question: "Poaching is a severe threat to elephants. How many elephants are killed for their tusks?",
    choiceA: "50 per day",
    choiceB: "175 per day",
    choiceC: "100 per day",
    choiceD: "15 per day",
    correctAnswer: "C"
}, {
    question: "The first endangered species list had many more _______ than any other kind of animal.",
    choiceA: "plants",
    choiceB: "fish",
    choiceC: "birds",
    choiceD: "mammals",
    correctAnswer: "C"
}, {
    question: "When a species is delisted because its numbers increase the species is considered:",
    choiceA: "recovered",
    choiceB: "increased",
    choiceC: "saved",
    choiceD: "unextinct",
    correctAnswer: "A"
}, {
    question: "China's endangered giant pandas subsist almost entirely on what food?",
    choiceA: "None of the below",
    choiceB: "Bamboo",
    choiceC: "Hazelnuts",
    choiceD: "Eucalyptus",
    correctAnswer: "B"
}, {
    question: "What was the last feline species to go extinct?",
    choiceA: "Saber-toothed cat",
    choiceB: "Florida panther",
    choiceC: "Snow leopard",
    choiceD: "Liberian lynx",
    correctAnswer: "A"
}, {
    question: "What has killed off tens of thousands of amphibians in the last few decades?",
    choiceA: "Hurricanes",
    choiceB: "Bats",
    choiceC: "Melting ice",
    choiceD: "A fungus",
    correctAnswer: "D"
}, {
    question: "Elephants are now better protected from the ivory trade, but poachers have turned their attention to another animal, now at risk from extinction. Which is it?",
    choiceA: "Hippo",
    choiceB: "Mammot",
    choiceC: "Walrus",
    choiceD: "Narwhal",
    correctAnswer: "A"
}, {
    question: "Which popular fruit is under threat of extinction from a fungus?",
    choiceA: "Apple",
    choiceB: "Banana",
    choiceC: "Strawberry",
    choiceD: "Orange",
    correctAnswer: "B"    
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 14!</p>";

    if (score < 10) {
        scoreMessage.innerHTML = "<p>Oh no! You failed to save Milo </p>";
    }
 
    else {
        scoreMessage.innerHTML = "<p>Great work! You rsaved Milo!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}