function randomImage(){
    const img={
        1: "dice1.png",
        2: "dice2.png",
        3: "dice3.png",
        4: "dice4.png",
        5: "dice5.png",
        6: "dice6.png"
    };
    const randomimage1=Math.floor(Math.random()*6)+1;
    const randomimage2=Math.floor(Math.random()*6)+1;
    const img1=document.getElementById("imag1");
     const img2=document.getElementById("imag2");
     img1.setAttribute("src",img[randomimage1]);
     img2.setAttribute("src",img[randomimage2]);
     if(randomimage1>randomimage2){
        document.querySelector("h1").innerHTML="player 1 wins!";
     }
     else if(randomimage1<randomimage2){
        document.querySelector("h1").innerHTML="player 2 wins!";
     }
     else{
        document.querySelector("h1").innerHTML="Draw!";
     }



    
}
functionrandomImage()

