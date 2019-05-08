/*----- constants -----*/
const fishSpecies = [
  { species: "redfish",
    img: 'images/redfish.jpg',
  }, 
  { species: "ladyfish",
    img: 'images/ladyfish.jpg',
  }
];

//-----cache------
const fish_img = document.getElementById('image');
const next = document.getElementById('next');
var answerOne = document.getElementById('answerOne')
var answerTwo = document.getElementById('answerTwo')



function handleClick() {
    fish_img.src = '';
    answerOne = '';
    answerTwo = '';
    render();
};

var x = 0;
function nextFish(fishSpecies) {
  fish_img.src = fishSpecies[x].img;
  x += 1;
};


function render() {
  nextFish(fishSpecies[x]);
};

next.addEventListener('click', handleClick);



    

// step 1
// be able to print any of these on a page 
// either create dynamically from js using createElement where these objects will render
// or create skel div in html - access it - then innerHTML print the objects 

// step 2 
// connect button to get next fish 
// create a test button that will allow you to nagivate through all your fishes 

// step 3 
// create your ansnwer buttons that have conditions that will meet your fish object
// so if button1 === the species string 
// on button2 (which is incorrect answer) - give a message saying try again or its wrong




























/*----- app's state (variables) -----*/
// const FishArray = ['redFish', 'ladyFish'];

// let scoreKeeper = 0;

// const questionCounter = [];


// /*----- cached element references -----*/
// document.getElementById('score').innerHTML = 'Score: ' + scoreKeeper;

// //a new button will fade in that will allow the person to render the next question

// /*----- functions -----*/

// function playQuestion() {
//   //showButtons();
//   const selectedQuestion = questions.pop();
//   questionCounter.push(selectedQuestion);
  
  
//   document.getElementById('question-counter').innerHTML = 'Question ' + questionCounter.length + ' of 10';
  
//   renderButton('One', selectedQuestion.options[0].species)
//   renderButton('Two', selectedQuestion.options[1].species)
  
// }

// function renderButton(buttonNum, species) {
//   document.getElementById(`answer${buttonNum}`).value = 
//  species;
// };  
// let fishtest = document.getElementsByClassName('.fishImg').src="../images/redfish.jpg";
// // console.log(fishtest);
// // playQuestion();

// //function hideButtons() {
// //  document.getElementById('answerOne').style.visibility = 'hidden';
// //  document.getElementById('answerTwo').style.visibility = 'hidden';
// //}

// //function showButtons() {
// //  document.getElementById('answerOne').style.visibility = 'visible';
// //  document.getElementById('answerTwo').style.visibility = 'visible';
// //}

// /*----- event listeners -----*/

// function feedBack() {

//   document.getElementById('answerOne').addEventListener('click', function() {
//       hideButtons();
//       questionCounter[0].options[0].isCorrect === true  
//       ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
//       document.getElementById('movieQuote').innerHTML = "CORRECT!")
//       : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
//       document.getElementById('movieQuote').innerHTML = "WRONG!");
//   });
//   document.getElementById('answerTwo').addEventListener('click', function() {
//       hideButtons();
//       questionCounter[0].options[1].isCorrect === true  
//       ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
//       document.getElementById('movieQuote').innerHTML = "CORRECT!")
//       : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
//       document.getElementById('movieQuote').innerHTML = "WRONG!");
//   });
  

// }


// function nextQuestion() {

// }