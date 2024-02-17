function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setAlphabetBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getARandomAlphabet() {
    // system 01
    // const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // system 2
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}