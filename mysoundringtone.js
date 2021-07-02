for(let i=0;i<3;i++){
document.querySelectorAll(".mysound")[i].addEventListener("click",function(){

     let text=this.innerHTML;
     rignswitch(text);

     addanimation(text)
     

     
  

});

document.addEventListener("keypress",function(event){

    let text=event.key;
    rignswitch(text);

    addanimation(text)
    

    
 

});
}

function rignswitch(text){

    switch(text){
        case "a":
        let soundbtn1=new Audio("sounds/Antique-doorbell.mp3");
        soundbtn1.play();
        break;

        case "b":
        let soundbtn2=new Audio("sounds/Bonk-sound-effect.mp3");
        soundbtn2.play();
        break;

        case "c":
        let soundbtn3=new Audio("sounds/Car-crash-sound-effect.mp3");
        soundbtn3.play();
        break;
        default:
            "myname is tushar"

}
}

function addanimation(text){

     let myanim=document.querySelector("."+text);
     myanim.classList.add("switchbtn")
     
     setTimeout(() => {
         myanim.classList.remove("switchbtn")
         
     }, 2000);


}


