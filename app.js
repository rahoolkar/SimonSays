let gameSequence = [] ;
let userSequence = [] ;

let colors = ["red","green","yellow","purple"];

let level = 0 ;

let h2 = document.querySelector("h2");

let gameStarted = false ;

document.body.addEventListener("keypress",()=>{
    if(gameStarted == false){
        console.log("game is started");
        gameStarted = true ;

        levelUp();
    }
});

function buttonFlash(button){
    button.classList.add("flash");
    setTimeout(() => {
        button.classList.remove("flash")
    }, 400);
}

function levelUp(){
    level ++;
    h2.innerText = `Level ${level}`;


    let randomNumber = Math.floor(Math.random()*3);
    let randomColor = colors[randomNumber];
    let randomButton = document.querySelector(`.${randomColor}`);
    console.log(randomButton);
    buttonFlash(randomButton);
}