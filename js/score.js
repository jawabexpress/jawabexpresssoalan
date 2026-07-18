/* =====================================
   JOM PANDAI ACADEMY BATTLE
   SCORE & REWARD SYSTEM
===================================== */


import {
saveCoin,
saveXP
} from "./storage.js";





// TAMBAH COIN

export function addCoin(amount){


    gameData.coin += amount;



    if(gameData.coin < 0){

        gameData.coin = 0;

    }



    updateCoin();


    saveCoin(
    gameData.coin
    );


}







// TAMBAH XP

export function addXP(amount){


    gameData.xp += amount;



    checkLevel();



    updateXP();


    saveXP(
    gameData.xp
    );


}







// LEVEL SYSTEM

function checkLevel(){


    let newLevel =

    Math.floor(
    gameData.xp / 100
    ) + 1;



    if(newLevel > gameData.level){


        gameData.level =
        newLevel;



        showNotification(
        "🎉 Level Naik!"
        );


    }


}







// JAWAPAN BETUL

export function correctReward(){


    gameData.correct++;


    gameData.score++;


    addCoin(10);


    addXP(5);


    showNotification(
    "🎉 Pandai! +10 Coin"
    );


}







// JAWAPAN SALAH

export function wrongReward(){


    gameData.wrong++;


    addCoin(-2);



    showNotification(
    "❌ Cuba Lagi"
    );


}







// UPDATE PAPARAN COIN

function updateCoin(){


    const coin =

    document.getElementById(
    "coin"
    );


    if(coin){

        coin.innerText =
        gameData.coin;

    }



    const finalCoin =

    document.getElementById(
    "finalCoin"
    );


    if(finalCoin){

        finalCoin.innerText =
        gameData.coin;

    }


}







// UPDATE XP

function updateXP(){


    const xp =

    document.getElementById(
    "xp"
    );


    if(xp){

        xp.innerText =
        gameData.xp;

    }


    const finalXP =

    document.getElementById(
    "finalXP"
    );


    if(finalXP){

        finalXP.innerText =
        gameData.xp;

    }


}







// NOTIFICATION

window.showNotification=function(text){


    const box =

    document.getElementById(
    "notification"
    );


    const message =

    document.getElementById(
    "notificationText"
    );



    if(box && message){


        message.innerText =
        text;



        box.classList.add(
        "show"
        );



        setTimeout(()=>{


            box.classList.remove(
            "show"
            );


        },1500);


    }



}
