// // function play(){
// //     // step 1 : hide the home screen.. to hide the screen add the class hidden to the home screen
// //     const homeSection = document.getElementById('home');

// //     homeSection.classList.add('hidden')
    

// //     // show the playground
// //     const playgroundSection = document.getElementById('play-ground')

// //     playgroundSection.classList.remove('hidden')
// }
function handleKeyboardButtonPress(event){
    const playerPressed =event.key
    // console.log('player pressed', playerPressed)

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet =currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)

    // check matched or not

    if(playerPressed === expectedAlphabet){
        console.log('you got point');

        // update score
        // 1. get the current score
        
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText)
        // console.log(currentScoreText)
        // 2. increase the score by 1
        const newScore = currentScore+1
        // console.log(newScore)

        // 3. show the updated score
        currentScoreElement.innerText = newScore
        
         

        // start a new round 
        removeBackgroundColorById(expectedAlphabet)
        continueGame();

    }

    else{
        console.log('you lose')
        const currentLifeElement = document.getElementById('current-life')
       
        const currentLifeScore = currentLifeElement.innerText

        const newLife = currentLifeScore-1

        currentLifeElement.innerText= newLife;
        console.log(newLife)
    }


}
// captured keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random number', alphabet)

    // set randomly generated alphabet to screen
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet

    // set background
    setBackgroundColorById(alphabet)


}

function play(){
   hideElementById('home');
   showElementById('play-ground')
   continueGame()
}