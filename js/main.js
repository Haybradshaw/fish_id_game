

const gameCount = 0
//-----constants---
fishArray = [{ name : 'redfish',
              imgFile: '../picture/redfish.jpg', 
                  options: 
                    {
                       isCorrect: false,
                       species: 'Red Snapper'
                    ,
                    
                      isCorrect: true,
                      species: 'Red Drum'
                    }} ,
              { name: 'ladyfish',
                 imgFile: '../picture/ladyfish.jpg',
                    options: 
                      {
                        isCorrect: true,
                        species: 'ladyfish'
                      ,
                      
                        isCorrect: false,
                        species: 'spanish mackrel'
                      }},
              { name: 'trout',
                imgFile: '../picture/trout.jpg',
                  options:
                    {
                      isCorrect: false,
                      species: 'mullet'
                    ,
                  
                      isCorrect: true,
                      species: 'trout'
                    }},
                  ];





//----app state variables ----
  const questions = [redfish, ladyfish, trout];

  


  //-----cache----
  function renderQuestion(index) {
    //create dom elements from this object
    const selectedQuestion = questions[index];
  }

//check questiion 

function renderButton(buttonNum, fishSpecies) {
  document.getElementById(`answer${buttonNum}`).value = 
 fishSpecies;
};


// event listners
 // document.querySelector('button').addEventListener('click', initialize);

  //render? not sure where to start
  