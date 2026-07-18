/* =====================================
   JOM PANDAI ACADEMY BATTLE
   QUESTION MANAGER
===================================== */


import { kategori1 } from "../data/darjah1/matematik/kategori1.js";

import { kategori2 } from "../data/darjah1/matematik/kategori2.js";



// SIMPAN SEMUA SOALAN


export function getQuestions(grade, subject, category){



if(
grade === 1 &&
subject === "math"
){


if(category === 1){

return kategori1;

}



if(category === 2){

return kategori2;

}



}



return [];

}
