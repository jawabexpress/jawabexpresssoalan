/* =====================================
   JOM PANDAI ACADEMY BATTLE
   MAIN GAME ENGINE
===================================== */


import {
startTimer,
stopTimer
} from "./timer.js";


import {
correctReward,
wrongReward
} from "./score.js";


import {
playCorrect,
playWrong
} from "./audio.js";





// CONTOH DATA SOALAN
// NANTI AKAN DIGANTI DENGAN
// fail data/darjah1/kategori1.js


let questions = [

{
question:"Apakah nombor bagi perkataan satu?",
A:"1",
B:"2",
C:"3",
D:"4",
answer:"A"
},

{
question:"2 + 3 = ?",
A:"4",
B:"5",
C:"6",
D:"7",
answer:"B"
}

];





// MULAKAN GAME

window.startGame=function(){


gameData.currentQuestion = 0;

gameData.score = 0;

gameData.correct = 0;

gameData.wrong = 0;



showScreen(
"gameScreen"
);



loadQuestion();


}







// PAPAR SOALAN

function loadQuestion(){


stopTimer();



let q =

questions[
gameData.currentQuestion
];



if(!q){


endGame();

return;


}





document.getElementById(
"questionNumber"
).innerText =

"Soalan " +

(gameData.currentQuestion + 1)

+

" / "

+

questions.length;





document.getElementById(
"questionText"
).innerText =

q.question;





document.getElementById(
"answerA"
).innerText =
"A. " + q.A;



document.getElementById(
"answerB"
).innerText =
"B. " + q.B;



document.getElementById(
"answerC"
).innerText =
"C. " + q.C;



document.getElementById(
"answerD"
).innerText =
"D. " + q.D;






updateProgress();

startTimer();


}








// SEMAK JAWAPAN


window.checkAnswer=function(answer){



stopTimer();



let q =

questions[
gameData.currentQuestion
];




if(answer === q.answer){



correctReward();


playCorrect();


}

else{


wrongReward();


playWrong();


}






setTimeout(()=>{


nextQuestion();


},800);



}







// SOALAN SETERUSNYA


window.nextQuestion=function(){


gameData.currentQuestion++;


loadQuestion();


}








// UPDATE BAR PROGRESS


function updateProgress(){


let bar =

document.getElementById(
"progressBar"
);



if(bar){


let progress =

(

gameData.currentQuestion

/

questions.length

)

*

100;



bar.style.width =

progress + "%";



}


}








// TAMAT GAME


function endGame(){


stopTimer();



document.getElementById(
"correctScore"
).innerText =

gameData.correct;



document.getElementById(
"wrongScore"
).innerText =

gameData.wrong;



showScreen(
"resultScreen"
);


}







// KELUAR GAME


window.exitGame=function(){


stopTimer();


showScreen(
"mainMenu"
);


}







// ULANG GAME


window.restartGame=function(){


startGame();


}
