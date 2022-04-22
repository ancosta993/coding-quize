var optionWrapper = document.querySelector("#option-wrapper");
var QuestionTitle = document.querySelector("#question-title");
var mainParent = document.querySelector("#page-content");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var startButton = document.querySelector("#start-button");
var counter = 0;



var questionObjArr = [
   {
      title:"What are the common data type used in JavaScript?",
      option1:"string",
      option2:"boolean",
      option3:"integer",
      option4:"All of the above",
      correctChoice: "All of the above"
   },

   {
      title: "Pick something",
      option1:"python",
      option2:"C##",
      option3:"JavaScript",
      option4:"Ruby",
      correctChoice:"JavaScript"

   }

]

// var createButtonWrapper = function (){
//    var btnWrapper = document.createElement("div");
//    btnWrapper.className = "btn-wrapper";
//    btnWrapper.setAttribute=('id', 'btn-wrapper');
//    optionWrapper.appendChild(btnWrapper);
// };

// createButtonWrapper();

var createPreviousButton = function() {
   var prevBtn = document.createElement("button");
   prevBtn.setAttribute("class", "btn prev-btn");
   prevBtn.textContent = "Previous";
   optionWrapper.appendChild(prevBtn);
};


var createNextButton = function(){
   var nextBtn = document.createElement("button");
   nextBtn.setAttribute("class", "btn next-btn");
   nextBtn.textContent = "Next";
   optionWrapper.appendChild(nextBtn);
};

var displayQuestion = function() {
   console.log(questionObjArr[counter]);
   QuestionTitle.textContent = questionObjArr[counter].title;
   option1.textContent = questionObjArr[counter].option1;
   option1.setAttribute("style", "background-color:purple");
   option2.textContent = questionObjArr[counter].option2;
   option2.setAttribute("style", "background-color:purple");
   option3.textContent = questionObjArr[counter].option3;
   option3.setAttribute("style", "background-color:purple");
   option4.textContent = questionObjArr[counter].option4;
   option4.setAttribute("style", "background-color:purple");

   var isNextBtn = document.querySelector(".next-btn");
   var isPrevBtn = document.querySelector(".prev-btn");

   if(!isPrevBtn){
      createPreviousButton();
   };
   
   if(!isNextBtn){
      createNextButton();
   };

   // nextBtn.setAttribute("style","display:inline-block");
   // prevBtn.setAttribute("style", "display:inline-block");
};





var nextQuestion = function(){
   counter++;
   if(counter > questionObjArr.length-1){
      counter--;
      alert("no more");
   } else {
      displayQuestion();
   }

      
}

var prevQuestion = function(){
   counter--;
   if(counter < 0){
      counter++;
      alert("no more");
   } else {
      displayQuestion();
   }

      
}

var btnTask = function(event){
   if(event.target.matches('.next-btn')){
      nextQuestion();
   } 

   if(event.target.matches('.prev-btn')){
      prevQuestion();
   }

};


startButton.addEventListener('click', displayQuestion);
optionWrapper.addEventListener('click', btnTask);