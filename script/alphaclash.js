// // function play(){
// //     // step 1 : hide the home screen.. to hide the screen add the class hidden to the home screen
// //     const homeSection = document.getElementById('home');

// //     homeSection.classList.add('hidden')
    

// //     // show the playground
// //     const playgroundSection = document.getElementById('play-ground')

// //     playgroundSection.classList.remove('hidden')
// }

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