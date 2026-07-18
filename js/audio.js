/* =====================================
   JOM PANDAI ACADEMY BATTLE
   AUDIO SYSTEM
===================================== */



let soundEnabled = true;

let musicEnabled = true;






// MAIN AUDIO FUNCTION


function playAudio(id){


    if(!soundEnabled) return;



    const audio =

    document.getElementById(id);



    if(audio){


        audio.currentTime = 0;


        audio.play()
        .catch(()=>{});


    }


}







// JAWAPAN BETUL


export function playCorrect(){


    playAudio(
    "correctSound"
    );


}







// JAWAPAN SALAH


export function playWrong(){


    playAudio(
    "wrongSound"
    );


}







// BUTTON CLICK


export function playClick(){


    playAudio(
    "clickSound"
    );


}







// MUZIK LATAR


export function playMusic(){


    if(!musicEnabled)
    return;



    const music =

    document.getElementById(
    "backgroundMusic"
    );



    if(music){


        music.play()
        .catch(()=>{});


    }


}







// STOP MUSIC


export function stopMusic(){


    const music =

    document.getElementById(
    "backgroundMusic"
    );



    if(music){


        music.pause();


    }


}







// ON/OFF SOUND


export function toggleSound(){


    soundEnabled =
    !soundEnabled;



    return soundEnabled;


}







// ON/OFF MUSIC


export function toggleMusic(){


    musicEnabled =
    !musicEnabled;



    if(!musicEnabled){


        stopMusic();


    }



    return musicEnabled;


}






// GLOBAL BUTTON SOUND


document.addEventListener(

"click",

()=>{


    playClick();


}

);
