/* =====================================
   JOM PANDAI ACADEMY BATTLE
   MENU CONTROLLER
===================================== */


// PILIH MODE


window.startMode=function(mode){


    gameData.mode = mode;



    if(mode === "solo"){


        showScreen(
        "subjectMenu"
        );


    }


    else if(mode === "duel"){


        showScreen(
        "duelScreen"
        );


    }


    else if(mode === "squad"){


        showScreen(
        "squadScreen"
        );


    }


}








// PILIH SUBJEK


window.selectSubject=function(subject){


    gameData.subject = subject;



    showScreen(
    "gradeMenu"
    );


}








// PILIH DARJAH


window.selectGrade=function(grade){


    gameData.grade = grade;



    showCategory();


}








// PAPAR KATEGORI


function showCategory(){


    const list =

    document.getElementById(
    "categoryList"
    );



    if(!list) return;



    list.innerHTML = "";




    let categories = [

        "🔢 Kenal Nombor",

        "➕ Tambah",

        "➖ Tolak",

        "💰 Wang & Masa"

    ];




    categories.forEach(

    (item,index)=>{


        let button =

        document.createElement(
        "button"
        );



        button.innerText = item;



        button.onclick = ()=>{


            selectCategory(
            index + 1
            );


        };



        list.appendChild(
        button
        );



    });



    showScreen(
    "categoryMenu"
    );



}








// PILIH KATEGORI


window.selectCategory=function(category){


    gameData.category = category;



    startGame();



}








// START SQUAD


window.startSquadGame=function(){



    gameData.mode =
    "squad";



    showScreen(
    "gameScreen"
    );


    startGame();



}
