let winnum=0;
let lostnum=0;

for(let i=0; i<5;i++){

    let guessnumber=parseInt(prompt("what is the random number"))
     
    let randomnumber=Math.floor(Math.random()*5)+1
    
    if(guessnumber===randomnumber){

        console.log("you are win");
        winnum++
        }else{
        console.log("you are lost")
        lostnum++
        }



}


document.write(`you are win  ${winnum} time`);
document.write(`you are lost ${lostnum} time`)
