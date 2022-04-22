
// Initialize variable assignment with selectors
var optionWrapper = document.querySelector("#option-wrapper");
var questionTitle = document.querySelector("#question-title");
var mainParent = document.querySelector("#page-content");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var startButton = document.querySelector("#start-button");
var evaluation = document.querySelector("#evaluation")
var instruction = document.querySelector("#instruction");
// start counter for keeping track of index
var counter = 0;
// start scoring
var score = 0;

// making the list of options dissapear at the beginning
var optionList = [option1, option2, option3, option4];
for (var i=0;i<optionList.length;i++){
   optionList[i].style.display = 'none';
};



var questionObjArr = [
   {
      title:"What can be stored in a JavaScript array?",
      option1:"String",
      option2:"Boolean",
      option3:"Integer",
      option4:"All of the above",
      correctChoice: "All of the above"
   },

   {
      title: "String values must be enclosed within _____ when assigned to a variable",
      option1:"Curly Braces",
      option2:"Parenthesis",
      option3:"Double Quotes",
      option4:"Semicolon",
      correctChoice:"Double Quotes"

   },

   {
      title: "The condition in an if/else statement is enclosed with _____ ",
      option1:"Curly Braces",
      option2:"Parenthesis",
      option3:"Double Quotes",
      option4:"Semicolon",
      correctChoice:"Parenthesis"

   },

   {
      title: "Commonly used data types do not include:",
      option1:"Alert",
      option2:"Numbers",
      option3:"Booleans",
      option4:"String",
      correctChoice:"Alert"

   },

   {
      title: "The condition in an if/else statement is enclosed with _____ ",
      option1:"Curly Braces",
      option2:"Parenthesis",
      option3:"Double Quotes",
      option4:"Semicolon",
      correctChoice:"Parenthesis"

   },

   {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      option1:"JavaScript",
      option2:"terminal/bash",
      option3:"for loops",
      option4:"console.log",
      correctChoice:"console.log"

   }


]

// var createButtonWrapper = function (){
//    var btnWrapper = document.createElement("div");
//    btnWrapper.className = "btn-wrapper";
//    btnWrapper.setAttribute=('id', 'btn-wrapper');
//    optionWrapper.appendChild(btnWrapper);
// };

// createButtonWrapper();

// var createPreviousButton = function() {
//    var prevBtn = document.createElement("button");
//    prevBtn.setAttribute("class", "btn prev-btn");
//    prevBtn.textContent = "Previous";
//    optionWrapper.appendChild(prevBtn);
// };


// var createNextButton = function(){
//    var nextBtn = document.createElement("button");
//    nextBtn.setAttribute("class", "btn next-btn");
//    nextBtn.textContent = "Next";
//    optionWrapper.appendChild(nextBtn);
// };



var displayQuestion = function() {
   
   // Make the options appear again;
   for (var i=0;i<optionList.length;i++){
      optionList[i].style.display = 'block';
   };

   // remove the instruction and the START Button
   instruction.remove();
   startButton.remove();


   
   questionTitle.textContent = questionObjArr[counter].title;
   option1.textContent = questionObjArr[counter].option1;
   option1.style.backgroundColor = 'purple';
   option2.textContent = questionObjArr[counter].option2;
   option2.style.backgroundColor = 'purple';
   option3.textContent = questionObjArr[counter].option3;
   option3.style.backgroundColor = 'purple';
   option4.textContent = questionObjArr[counter].option4;
   option4.style.backgroundColor = 'purple';

   // var isNextBtn = document.querySelector(".next-btn");
   // var isPrevBtn = document.querySelector(".prev-btn");

   // if(!isPrevBtn){
   //    createPreviousButton();
   // };
   
   // if(!isNextBtn){
   //    createNextButton();
   // };

   // nextBtn.setAttribute("style","display:inline-block");
   // prevBtn.setAttribute("style", "display:inline-block");
};


// Showing the final score and recording it
var showScore = function(){
   // remove everything after the quize is finished
   optionWrapper.remove();
   questionTitle.remove();
   evaluation.remove();
   // make a div element and insert it in the main page for displaying score
   var scoreDisplay = document.createElement('div');
   scoreDisplay.textContent = "Your Score for this round: " + score;
   scoreDisplay.className = 'score-display';
   mainParent.appendChild(scoreDisplay);
   
};

var storeScore = function(){
   // create an input for getting the initials
   var inputLabel = document.createElement("label");
   inputLabel.textContent = "Initials: "
   inputLabel.setAttribute('for', 'initial');

   var getInitial = document.createElement('input');
   getInitial.setAttribute('name', 'initial');
   getInitial.setAttribute('id','initial');
   getInitial.setAttribute('type', 'text');
   
   mainParent.className = 'score-display-wrapper';
   mainParent.appendChild(inputLabel);
   mainParent.appendChild(getInitial);
}

// function that evaluates if a clicked option is correct choice
var evaluate = function(event){
   // First, make sure only the clicks in the options are tested, not the background
   if (event.target.matches(".options")){
      var selectedAns = event.target;
      if (selectedAns.textContent === questionObjArr[counter].correctChoice){
      evaluation.textContent = "Correct!";
      score++;
    }
      else {
         evaluation.textContent = "Wrong!";
      }
   };
   // increase counter by 1 to get the next question
   counter++;
   // if the counter (index) is greater than length-1 of the array, send an alert message.
   if (counter <= questionObjArr.length-1){
      displayQuestion(counter);
   } else {
      counter--;
      showScore();
      storeScore();
   }
   

};


// var nextQuestion = function(){
//    counter++;
//    if(counter > questionObjArr.length-1){
//       counter--;
//       alert("no more");
//    } else {
//       displayQuestion();
//    }

      
// }

// var prevQuestion = function(){
//    counter--;
//    if(counter < 0){
//       counter++;
//       alert("no more");
//    } else {
//       displayQuestion();
//    }

      
// }

// var btnTask = function(event){
//    if(event.target.matches('.next-btn')){
//       nextQuestion();
//    } 

//    if(event.target.matches('.prev-btn')){
//       prevQuestion();
//    }

// };


startButton.addEventListener('click', displayQuestion);
optionWrapper.addEventListener('click', evaluate);
// optionWrapper.addEventListener('click', btnTask);