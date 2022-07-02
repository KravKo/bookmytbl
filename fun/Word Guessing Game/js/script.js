const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),
    typingInput = document.querySelector(".typing-input");


let score = document.getElementById('scorep');
var scorepoint = 0;
let highscore = document.getElementById('highscorep');
let hscore = 0;

let next = document.getElementById('next');

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function randomWord() {
    //timer
    var timeleft = 19;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "0";
            
            alert("Game over! You don't have remaining time");
            highscore.innerHTML = hscore;
            scorepoint = 0;
            score.innerHTML = scorepoint;
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }


        } else {
            document.getElementById("countdown").innerHTML = timeleft ;
        }
        timeleft -= 1;
    }, 1000);
    //
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if (key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if (word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if (correctLetters.length === word.length) {
            scorepoint = scorepoint + 1;
            score.innerHTML = scorepoint;
            if (hscore <= scorepoint) {
                hscore = scorepoint;
            }
            clearInterval(downloadTimer)
            resetBtn.style.width = '49%'
            next.style.display = 'inline-block'
        } else if (maxGuesses < 1) {
            highscore.innerHTML = hscore;
            scorepoint = 0;
            score.innerHTML = scorepoint;
            clearInterval(downloadTimer)
            alert("Game over! You don't have remaining guesses");
            for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}

next.addEventListener('click',function () {
    resetBtn.style.width = '100%'
    next.style.display = 'none'
    return randomWord();
})

resetBtn.addEventListener("click", function () {
    clearInterval(downloadTimer)
    return randomWord();
});
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());