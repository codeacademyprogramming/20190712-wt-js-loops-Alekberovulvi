"use strict"


//Tapsiriq 3 //

function creatSum(a,b){
    if(b > a){
        for(let i = a; i < b; i++){
            if(i % 2 == 0){
                let cem = 0;
                for(let j = i; j < b; j++){
                    cem = cem + j;
                }
            console.log(`Cut eded ${i}`);
            console.log(`${i} ve ${b} araliginda olan ededlerin cemi ${cem}`);        
            }
        }
    }
    return "Error"
}
console.log(creatSum(2, 41));