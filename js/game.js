/* =====================================
   JOM PANDAI ACADEMY BATTLE
   MAIN GAME ENGINE
===================================== */


import {
getQuestions
} from "./questions.js";


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





let questions = [];






// MULAKAN GAME

window.startGame=function(){


gameData.currentQuestion = 0;

gameData.score = 0;

gameData.correct = 0;

gameData.wrong = 0;



// AMBIL SOALAN IKUT PILIHAN


questions = getQuestions(

gameData.grade,

gameData.subject,

gameData.category

);




if(questions.length === 0){


alert(
"Tiada soalan untuk kategori ini"
);


return;


}



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

"Soalan "

+

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


},700);



}







// SOALAN SETERUSNYA


window.nextQuestion=function(){


gameData.currentQuestion++;


loadQuestion();


}







// PROGRESS BAR


function updateProgress(){



let bar = document.getElementById(
"progressBar"
);



if(bar){


let value =

(

gameData.currentQuestion

/

questions.length

)

*

100;



bar.style.width =

value + "%";


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








// ULANG


window.restartGame=function(){


startGame();


}
