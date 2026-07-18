/* =====================================
   JOM PANDAI ACADEMY BATTLE
   APP CONTROLLER
===================================== */


import { loadPlayer } from "./storage.js";




// DATA GLOBAL GAME

window.gameData = {

    mode:null,

    subject:null,

    grade:null,

    category:null,

    currentQuestion:0,

    totalQuestion:100,

    score:0,

    correct:0,

    wrong:0,

    coin:0,

    xp:0,

    level:1,

    player:"Pemain",

    sound:true

};






// APABILA GAME DIBUKA


document.addEventListener(
"DOMContentLoaded",
()=>{


    const player =
    loadPlayer();


    if(player){

        gameData.player = player;

        const name =
        document.getElementById(
        "playerName"
        );


        if(name){

            name.innerText =
            player;

        }


    }



    showScreen(
    "mainMenu"
    );


});







// TUKAR PAPARAN SCREEN


window.showScreen=function(id){


    const screens =
    document.querySelectorAll(
    ".screen"
    );


    screens.forEach(
    screen=>{

        screen.classList.remove(
        "active"
        );

    });



    const target =
    document.getElementById(id);



    if(target){

        target.classList.add(
        "active"
        );

    }



};








// KEMBALI MENU UTAMA


window.backHome=function(){


    showScreen(
    "mainMenu"
    );


};







// BUKA PEMBELAJARAN


window.openLearning=function(){


    showScreen(
    "learningScreen"
    );


};







// BUKA PENCAPAIAN


window.openAchievement=function(){


    showScreen(
    "achievementScreen"
    );


};







// BUKA SETTING


window.openSetting=function(){


    showScreen(
    "settingScreen"
    );


};







// SIMPAN NAMA PEMAIN


window.savePlayerName=function(){


    const input =
    document.getElementById(
    "playerInput"
    );



    if(
    input.value.trim()
    !== ""
    ){


        gameData.player =
        input.value;



        localStorage.setItem(
        "playerName",
        input.value
        );


        document.getElementById(
        "playerName"
        ).innerText =
        input.value;



        showScreen(
        "mainMenu"
        );


    }



};






// DARK MODE


const darkToggle =
document.getElementById(
"darkToggle"
);



if(darkToggle){


darkToggle.addEventListener(
"change",
()=>{


document.body.classList.toggle(
"dark"
);


});


}
