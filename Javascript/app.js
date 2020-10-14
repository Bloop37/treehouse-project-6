const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
let reset = document.getElementsByClassName("btn__reset")[0];
var missed = 0;

let array = ['atari', 'sony', 'nintendo', 'sega', 'xbox'];

reset.addEventListener('click', () => document.getElementById("overlay").style.display = "none");
qwerty.addEventListener('click', e => {if(e.target.tagName == 'BUTTON' && e.target.className != 'chosen'){
    e.target.className = 'chosen';
    var result = checkLetter(e.target)
    if (result == null){
        //remove a heart
        missed++;
        var hearts = document.getElementById('scoreboard').firstElementChild;
        hearts.removeChild(hearts.firstElementChild);
    }
    checkWin();
}
})
//creates a random phrase and stores it as an array
function getRandomPhraseAsArray(arr){    

    var randNum = Math.floor(Math.random() * 5);
    var char = arr[randNum].split("");
    return char;
}

//check if a letter is in the phrase
function checkLetter(button) {
    var letter = document.getElementsByClassName("letter");
    match = null;
    var i;
    var letbutton = button.innerHTML;

    for (i = 0; i < letter.length; i++){
    if (letter[i].innerHTML == letbutton) {
    letter[i].setAttribute("class", "show");
    match = letbutton;
    }
    }
    return match;

}

function addPhraseToDisplay(arr){
    
    for(i = 0; i < arr.length; i++){
        let list = document.createElement('li');
        list.innerHTML = arr[i];
        phrase.appendChild(list);
        if(arr[i] != " "){

            list.setAttribute("class", "letter");
        }
    }
}
const phraseArray = getRandomPhraseAsArray(array);
addPhraseToDisplay(phraseArray);

function checkWin(){

    var correct = document.getElementsByClassName('show').length;
    var incorrect = document.getElementsByClassName('letter').length;

    if(incorrect == 0){

        let win = document.getElementById("overlay");
        win.className = "win";
        win.innerHTML = "You Win!!!";
        win.style.display = "flex";
    }
    else if(missed == 5){

        let lose = document.getElementById("overlay");
        lose.className = "lose";
        lose.innerHTML = "You Lose...";
        lose.style.display = "flex";
    }


}