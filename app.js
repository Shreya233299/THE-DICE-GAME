function onRefresh(){
    var randomNo1 = Math.floor((Math.random()*6)+1);
    if(randomNo1===1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if(randomNo1===2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if(randomNo1===3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if(randomNo1===4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if(randomNo1===5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else{
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
    var randomNo2 = Math.floor((Math.random()*6)+1);
    if(randomNo2===1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else if(randomNo2===2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else if(randomNo2===3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else if(randomNo2===4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else if(randomNo2===5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else{
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }
    if(randomNo1<randomNo2){
        document.querySelector("h2").innerHTML = "Player 2 Wins!🏆";
    }
    else if(randomNo1>randomNo2){
        document.querySelector("h2").innerHTML = "Player 1 Wins!🏆";
    }
    else{
        document.querySelector("h2").innerHTML = "DRAW!"
    }
}
const refreshPage = document.getElementById("a");
refreshPage.addEventListener("click",onRefresh)
