const inputBox = document.getElementById("inputBox");
const guessBtn = document.getElementById("guessBtn");
const hints = document.getElementById("hints");
const guessNumber = document.getElementById("guessNumber");
const playAgainBtn = document.getElementById("playAgainBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const numberRange = document.getElementById("numberRange");
const suggestion = document.getElementById("suggestion");
const tryAgainContainer = document.getElementById("tryAgainContainer");
const winnerContainer = document.getElementById("winnerContainer");
const blurMain = document.getElementById("blurMain");
const difficultyLevels = document.getElementsByName("level");
let count = 10;

difficultyLevels.forEach(difficultyLevel => {
    difficultyLevel.addEventListener('click', () => {
        switch (difficultyLevel.value) {
            case 'easy':
                easyMode();
                break;
            case 'medium':
                mediumMode();
                break;
            case 'hard':
                hardMode();
                break;
        }
                });
            });
            
function easyMode() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    numberRange.innerHTML = "1 to 10";
    suggestion.innerHTML = "Please enter a number between 1 and 10";

    guessBtn.addEventListener("click", () => {
        let enteredValue = Number(inputBox.value);
    
        if (inputBox.value === '' || isNaN(enteredValue) || enteredValue > 10 || enteredValue < 1) {
            suggestion.innerHTML = "Please enter a valid number between 1 and 10!!";
            return;
        }
    
        // conditionCheck();
        if (randomNumber > enteredValue) {
            hints.innerHTML = "Too Low";
            mainWork();
        } else if (randomNumber < enteredValue) {
            hints.innerHTML = "Too High";
            mainWork();
        } else if (randomNumber === enteredValue) {
            winnerContainer.style.display = "flex";
            blurMain.style.display = "block";
            playAgainBtn.addEventListener("click", () => {
                location.reload();
            })
        }
    }); 
}

function mediumMode() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numberRange.innerHTML = "1 to 100";
    suggestion.innerHTML = "Please enter a number between 1 and 100";

    guessBtn.addEventListener("click", () => {
        let enteredValue = Number(inputBox.value);
    
        if (inputBox.value === '' || isNaN(enteredValue) || enteredValue > 100 || enteredValue < 1) {
            suggestion.innerHTML = "Please enter a valid number between 1 and 100!!";
            return;
        }
    
        // conditionCheck();
        if (randomNumber > enteredValue) {
            hints.innerHTML = "Too Low";
            mainWork();
        } else if (randomNumber < enteredValue) {
            hints.innerHTML = "Too High";
            mainWork();
        } else if (randomNumber === enteredValue) {
            winnerContainer.style.display = "flex";
            blurMain.style.display = "block";
            playAgainBtn.addEventListener("click", () => {
                location.reload();
            })
        }
    });  
}

function hardMode() {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    numberRange.innerHTML = "1 to 1000";
    suggestion.innerHTML = "Please enter a number between 1 and 1000";

    guessBtn.addEventListener("click", () => {
        let enteredValue = Number(inputBox.value);
    
        if (inputBox.value === '' || isNaN(enteredValue) || enteredValue > 1000 || enteredValue < 1) {
            suggestion.innerHTML = "Please enter a valid number between 1 and 1000!!";
            return;
        }
        
        // conditionCheck();
        if (randomNumber > enteredValue) {
            hints.innerHTML = "Too Low";
            mainWork();
        } else if (randomNumber < enteredValue) {
            hints.innerHTML = "Too High";
            mainWork();
        } else if (randomNumber === enteredValue) {
            winnerContainer.style.display = "flex";
            blurMain.style.display = "block";
            playAgainBtn.addEventListener("click", () => {
                location.reload();
            })
        }
    });  
}

// function conditionCheck() {
//     if (randomNumber > enteredValue) {
//         hints.innerHTML = "Too Low";
//         mainWork();
//     } else if (randomNumber < enteredValue) {
//         hints.innerHTML = "Too High";
//         mainWork();
//     } else if (randomNumber === enteredValue) {
//         winnerContainer.style.display = "flex";
//         blurMain.style.display = "block";
//         playAgainBtn.addEventListener("click", () => {
//             location.reload();
//         })
//     }
// }

function mainWork() {
    count--;
    if(count < 1) {
        tryAgainContainer.style.display = "flex";
        blurMain.style.display = "block";
        count = 0;
        tryAgainBtn.addEventListener("click", () => {
            location.reload();
        })
    }
    guessNumber.innerHTML = count;
}