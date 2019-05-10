/*----- constants -----*/
const fishSpecies = [
  { pass: "redfish",
    nopass: "salmon",
    img: 'images/redfish.jpg',
  }, 
  { pass: "ladyfish",
    nopass: "minno",
    img: 'images/ladyfish.jpg',
  },
  { pass: "trout",
  nopass: "marlin",
    img: 'images/trout.jpg',
  },
  { pass: "flounder",
    nopass:"tarpon",
   img: 'images/flounder.jpg',
  },
  {pass: "kingfish",
    nopass:"whale",
   img: 'images/kingfish.jpg',  
  },
  
];

//-----cache------
const message = document.getElementById('message');
var x = 0;
const fish_img = document.getElementById('image');
const next = document.getElementById('next');
const answerOne = document.getElementById('answerOne');
const answerTwo = document.getElementById('answerTwo');
const reset = document.getElementById('reset');
const or = document.getElementById('or');



//---buttons----

next.addEventListener('click', handleClick);

//---todo change alerts to .interhtml feedback:done!
answerTwo.addEventListener('click', function() {
  message.innerHTML = 'nope';
});

//---todo change alerts to .interhtml feedback: done!
answerOne.addEventListener('click', function() {
  message.innerHTML = 'thats correct';
});

reset.addEventListener('click', function() {
  document.location.reload(true);
});


//------functions------


function init () {
  message.innerHTML = 'click next to play'
  answerOne.style.visibility = 'hidden';
  answerTwo.style.visibility = 'hidden';
  or.style.visibility = 'hidden';
}

//---- todo clear the p (feedback)--:Done!
function handleClick() {
  message.innerText = '';
  render(fishSpecies);
  
};
    function render(fishSpecies) {
      fish_img.src = fishSpecies[x].img;
      answerOne.textContent = `${fishSpecies[x].pass}`;
      answerTwo.textContent = `${fishSpecies[x].nopass}`;
      x += 1;
      answerOne.style.visibility = 'visible'
      answerTwo.style.visibility = 'visible'
      or.style.visibility = 'visible'
    };

function nextFish() {
  fish_img.src = fishSpecies[x].img;
  x += 1;
};

init()

// function hideButtons() {
//   document.getElementById('answerOne').style.visibility = 'hidden';
//   document.getElementById('answerTwo').style.visibility = 'hidden';


// function nextAnswer(fishSpecies) {
//   answerOne.pass = fishSpecies[x].pass;
//   x += 1;
// };















    

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

