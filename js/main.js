/*----- constants -----*/
const redFish = {
    '../picture/redfish.jpg',
    option: [
    {
      isCorrect: false,
      species: 'red snapper'
    },
    {
      isCorrect: true,
      species: 'red fish'
    }
  ]
}


const ladyFish = {
  src: '../picture/ladyfish.jpg',
    option: [
      {
        isCorrect: true,
        species: 'lady fish'
      },
      {
        isCorrect: false,
        species:'mullet'
      }
    ]
}



/*----- app's state (variables) -----*/
const questions = [redFish, ladyFish];

let scoreKeeper = 0;

const questionCounter = [];


/*----- cached element references -----*/
document.getElementById('score').innerHTML = 'Score: ' + scoreKeeper;

//a new button will fade in that will allow the person to render the next question

/*----- functions -----*/

function playQuestion() {
  //showButtons();
  const selectedQuestion = questions.pop();
  questionCounter.push(selectedQuestion);
  let imgElement = document.querySelector('.image')
  imgElement.setAttribute('src', selectedQuestion.file)
  document.getElementById('question-counter').innerHTML = 'Question ' + questionCounter.length + ' of 10';
  
  renderButton('One', selectedQuestion.options[0].species)
  renderButton('Two', selectedQuestion.options[1].species)
  
}

function renderButton(buttonNum, species) {
  document.getElementById(`answer${buttonNum}`).value = 
 species;
};  

//playQuestion();

//function hideButtons() {
//  document.getElementById('answerOne').style.visibility = 'hidden';
//  document.getElementById('answerTwo').style.visibility = 'hidden';
//}

//function showButtons() {
//  document.getElementById('answerOne').style.visibility = 'visible';
//  document.getElementById('answerTwo').style.visibility = 'visible';
//}

/*----- event listeners -----*/

function feedBack() {

  document.getElementById('answerOne').addEventListener('click', function() {
      hideButtons();
      questionCounter[0].options[0].isCorrect === true  
      ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
      document.getElementById('movieQuote').innerHTML = "CORRECT!")
      : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
      document.getElementById('movieQuote').innerHTML = "WRONG!");
  });
  document.getElementById('answerTwo').addEventListener('click', function() {
      hideButtons();
      questionCounter[0].options[1].isCorrect === true  
      ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
      document.getElementById('movieQuote').innerHTML = "CORRECT!")
      : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
      document.getElementById('movieQuote').innerHTML = "WRONG!");
  });
  

}


function nextQuestion() {

}