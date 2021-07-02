let photos=["images/photo1.jpg","images/photo2.jpg","images/photo3.jpg"];


let count=0;
let imagtag=document.getElementById("imge")

let fadeinfun=()=>{
    let clearset=setInterval(()=>{
        let myopacityval=Number(window.getComputedStyle(imagtag).getPropertyValue("opacity"));
        console.log(myopacityval);
        if(myopacityval<1){
            myopacityval=myopacityval+0.1
            imagtag.style.opacity=myopacityval; 

        }else{
          clearInterval(clearset);
        }


    },100)

}

let funnext=()=>{

    imagtag.style.opacity=0.5

    count++

    if(count>=photos.length){
        count=0
        imagtag.src=photos[count];
        let myopacityval=Number(window.getComputedStyle(imagtag).getPropertyValue("opacity"));
            console.log(myopacityval);
        ////////////fade effect////////
        fadeinfun();
        
    }else{
        imagtag.src=photos[count];
        //////////////
        ////////////fade effect////////
        fadeinfun();
    }
    
}


let funprev=()=>{
    count--
    imagtag.style.opacity=0.5
    if(count<0){
        count=photos.length-1
        imagtag.src=photos[count];

         ////////////fade effect////////
         fadeinfun();
    }else{
        imagtag.src=photos[count];

         ////////////fade effect////////
         fadeinfun();
    }
}



