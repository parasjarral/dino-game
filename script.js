document.onkeydown =function(e){
    console.log("Key code is :",e.keyCode)
    if(e.keyCode==38){
        dino =document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(() => {
console.log('yes')
dino.classList.remove('animatedino')} , 800);
        }

        if(e.keyCode==39){
            dino =document.querySelector('.dino');
           dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
           dino.style.left =dinox + 112 +"px";
            }
            if(e.keyCode==37){
                dino =document.querySelector('.dino');
               dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
               dino.style.left =(dinox - 112) +"px";
                }


    }

    setInterval(() => {
        dino= document.querySelector('.dino');
        gameover =document.querySelector('.gameover');
        obstacles= document.querySelector('.obstacles');
        
        
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

        ox=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('left'));
        oy=parseInt(window.getComputedStyle(obstacles,null).getPropertyValue('top'));
    
        offsetX =Math.abs(dx-ox);
        offsetY =Math.abs(dy-oy);
        console.log(offsetX,offsetY)
        if(offsetX<93 && offsetY<52){
            gameover.style.visibility='visible'
            obstacles.classList.remove('obstaclesAnimation')
        }
        

    }, 100);