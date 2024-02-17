// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')

// }


function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // set randomly alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set bgCOlor
    setAlphabetBgColor(alphabet);
}


function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}