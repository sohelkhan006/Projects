let gameseq = [];
let userseq = [];

let start = false;
let level = 0;
let btns = ["red", "yellow", "green", "purple"];

let h2 = document.querySelector("h2");

// 2 start game on key press
document.addEventListener("keypress", () => {
    if (start == false) {
        console.log("Game started");
        start = true;

        levelup();
    }
})

// 1 function to flash button
function gameFlash(button) {
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash")
    }, 250);
}

function userFlash(button) {
    button.classList.add("userflash");
    setTimeout(function () {
        button.classList.remove("userflash")
    }, 250);
}

// 3 level up function
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3); //btn.length-1
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}

// 5 check user input
function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


// 4 when user clicks a button
function btnPress() {
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// 6 reset game
function reset() {
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}