/* =====================================
   JOM PANDAI ACADEMY BATTLE
   LOCAL STORAGE SYSTEM
===================================== */



// SIMPAN DATA PEMAIN

export function savePlayer(data){


    localStorage.setItem(

        "jomPandaiPlayer",

        JSON.stringify(data)

    );


}







// AMBIL DATA PEMAIN

export function getPlayerData(){


    const data =

    localStorage.getItem(
    "jomPandaiPlayer"
    );



    if(data){


        return JSON.parse(data);


    }



    return null;


}







// SIMPAN NAMA PEMAIN

export function savePlayerName(name){


    localStorage.setItem(

        "playerName",

        name

    );


}







// AMBIL NAMA PEMAIN

export function loadPlayer(){


    return localStorage.getItem(

        "playerName"

    );


}







// SIMPAN COIN

export function saveCoin(coin){


    localStorage.setItem(

        "coin",

        coin

    );


}







// AMBIL COIN

export function getCoin(){


    return Number(

        localStorage.getItem(
        "coin"
        ) || 0

    );


}







// SIMPAN XP

export function saveXP(xp){


    localStorage.setItem(

        "xp",

        xp

    );


}







// AMBIL XP

export function getXP(){


    return Number(

        localStorage.getItem(
        "xp"
        ) || 0

    );


}







// RESET SEMUA DATA

export function resetData(){


    localStorage.clear();


}
