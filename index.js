const min =1;
const max=10;
let answer= Math.floor(Math.random()*(max-min+1));

let attempts=3;
let guess;
let run=true;
console.log(answer);

const ip=document.getElementById("ip");
const bt=document.getElementById("bt");
const lb=document.getElementById("lb");
const bt2=document.getElementById("bt2");



bt.onclick=function(){
    
    if(attempts>0){
        guess=ip.value;
        guess=Number(guess);
        console.log( guess);
        
        if(isNaN(guess)){
            window.alert("Invalid Input. Enter Numbers only!!!");
        }
        else if(guess<min || guess>max){
            window.alert("Enter Number within the mentioned range");

        }
        else{
            if(run==false){
                lb.textContent=`START A NEW GAME!!!!`;
        
            }
            attempts--;
            if(guess>answer){
                bt.addEventListener('click',()=>{
                    ip.value='';
                });
                lb.textContent=`TOO HIGH!!! ${attempts} Attempts Left!!!!`;
                

            }
            else if(guess<answer){
                bt.addEventListener('click',()=>{
                    ip.value='';
                });
                lb.textContent=`TOO LOW!! ${attempts} Attempts Left!!!!`;
                
            }
            else{
                bt.addEventListener('click',()=>{
                    ip.value='';
                });
                lb.textContent=`IT'S A RIGHT GUESS!!! START A NEW GAME!!!!`;
                run=false;
                
            }
           
        }
    }
    else{
        if(run==false){
            lb.textContent='START A NEW GAME';
        }
        else{
        lb.textContent=`YOU LOST`;
        }
    }
}
bt1.onclick=function(){
    bt1.addEventListener('click',()=>{
        ip.value='';
    });
    answer= Math.floor(Math.random()*(max-min+1));
    console.log(answer);
    attempts=3;
    lb.textContent=``;
}