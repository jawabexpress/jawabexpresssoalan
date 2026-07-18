/* =====================================
   JOM PANDAI ACADEMY BATTLE
   MAIN GAME ENGINE
===================================== */

import { kategori1 } from "../data/darjah1/matematik/kategori1.js";

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



// AMBIL SOALAN DARIPADA DATA

let questions = kategori1;





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



let q = questions[
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


let q = questions[
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







// BAR PROGRESS


function updateProgress(){


let bar = document.getElementById(
"progressBar"
);



if(bar){


let progress =

(

gameData.currentQuestion

/

questions.length

)

*100;



bar.style.width =

progress+"%";


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







// KELUAR


window.exitGame=function(){


stopTimer();


showScreen(
"mainMenu"
);


}






// ULANG


window.restartGame=function(){


startGame();


}
