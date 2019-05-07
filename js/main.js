

//-----constants---

const redFish = {
  imgFile: '../picture/redfish.jpg',
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
  imgFile: '../picture/ladyfish.jpg',
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

/*----- cached element references -----*/


/*----- event listeners -----*/




//a new button will fade in that will allow the person to render the next question



/*----- functions -----*/

const questionCounter = [];

function playQuestion() {
    const selectedQuestion = questions.pop();
    questionCounter.push(selectedQuestion);
    document.getElementById('image').src = "../picture/redfish";

    renderButton('One', selectedQuestion.options[0].species)
    renderButton('Two', selectedQuestion.options[1].species)

}


function renderButton(buttonNum, fishSpecies) {
    document.getElementById(`answer${buttonNum}`).value = 
   fishSpecies;
};

playQuestion();


// var ifrm = document.createElement('iframe');
// ifrm.setAttribute('id', 'ifrm'); // assign an id
// document.body.appendChild(ifrm); // to place at end of document
// ifrm.setAttribute('src', questionCounter[0].incorrectVideoUrl);






function nextQuestion() {

}