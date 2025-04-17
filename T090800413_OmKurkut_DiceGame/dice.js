                            //for first member
//Generate random number from 1 to 6
const Player1=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem1='images/dice'+Player1+'.png';
document.querySelectorAll('img')[0].setAttribute('src',diceImageMem1);

//for second member
//Generate random number from 1 to 6
const Player2=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem2='images/dice'+Player2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',diceImageMem2);

//for third member
//Generate random number from 1 to 6
const Player3=Math.floor(Math.random()*6)+1;
//dice images
const diceImageMem3='images/dice'+Player3+'.png';
document.querySelectorAll('img')[2].setAttribute('src',diceImageMem3);

//Logic for Winner
if(Player1>Player2 && Player1>Player3 && Player2>Player3){
    document.querySelector("h1").innerHTML= "Winner is: Player-A 🤴";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img2').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
else if(Player1>Player2 && Player1>Player3 && Player2<Player3){
    document.querySelector("h1").innerHTML= "Winner is: Player-A 🤴";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img3').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}

else if(Player3>Player2 && Player3>Player1 && Player2>Player1){
    document.querySelector("h1").innerHTML= "Winner is: Player-C 👸";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img2').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
    
}
else if(Player3>Player2 && Player3>Player1 && Player2<Player1){
    document.querySelector("h1").innerHTML= "Winner is: Player-C 🤴";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img1').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
    
}

else if(Player2 > Player1 && Player2 > Player3 && Player3>Player1){
    document.querySelector("h1").innerHTML= "Winner is: Player-B 👩‍🦰";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img3').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
else if(Player2 > Player1 && Player2 > Player3 && Player3<Player1){
    document.querySelector("h1").innerHTML= "Winner is: Player-B 👩‍🦰";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //For yellow color
    document.querySelector('.img1').style.filter="brightness(0.4) grayscale(50%) hue-rotate(90deg) saturate(30%) sepia(60%)";    
}
 
else if((Player1 == Player2) && (Player1 > Player3 || Player3>Player1)){
    document.querySelector("h1").innerHTML= "Draw 😇";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
}

else if((Player1 == Player3) && (Player1 > Player2 || Player1<Player2)){
    document.querySelector("h1").innerText= "Draw 😇";
    //for blue color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
}
else if((Player2 == Player3) && (Player2 > Player1 || Player2<Player1)){
    document.querySelector("h1").innerText= "Draw 😇";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for red color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";

}
else if(Player1==Player2 && Player3==Player1){
    document.querySelector("h1").innerText= "Draw 😇";
    //for green color
    document.querySelector('.img1').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for green color
    document.querySelector('.img2').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    //for green color
    document.querySelector('.img3').style.filter="grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(500%)";
    
}