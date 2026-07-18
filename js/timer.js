/* =====================================
   JOM PANDAI ACADEMY BATTLE
   TIMER SYSTEM
===================================== */


let timerInterval;

let timeLeft = 15;





// MULAKAN TIMER

export function startTimer(){


    clearInterval(
    timerInterval
    );


    timeLeft = 15;


    updateTimer();



    timerInterval = setInterval(()=>{


        timeLeft--;



        updateTimer();



        if(timeLeft <= 0){


            clearInterval(
            timerInterval
            );


            timeOut();


        }


    },1000);


}







// HENTIKAN TIMER

export function stopTimer(){


    clearInterval(
    timerInterval
    );


}







// UPDATE PAPARAN TIMER

function updateTimer(){


    const timer =

    document.getElementById(
    "timer"
    );



    if(timer){


        timer.innerText =
        timeLeft;


    }



}







// MASA HABIS

function timeOut(){


    showNotification(
    "⏰ Masa Tamat!"
    );



    if(typeof nextQuestion === "function"){


        setTimeout(()=>{


            nextQuestion();



        },1000);


    }



}







// PAUSE TIMER

export function pauseTimer(){


    clearInterval(
    timerInterval
    );


}







// SAMBUNG TIMER

export function resumeTimer(){


    startTimer();


}
