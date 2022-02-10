
var currentPlayer = " ";
var numberOfMoves = 0;
var availableMoves = true;

function switchPlayer(){
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    document.getElementById("player").innerHTML = currentPlayer;
}
function showMessage(){
    document.getElementById("message").innerHTML ="Player " + currentPlayer +" won";
    for(var i = 0; i < 9; i++){
        document.getElementById(i).disabled = true;
    }
}
function startGame(){
    currentPlayer = "X";
    document.getElementById("player").innerHTML = currentPlayer; 
    for(var i = 0; i <9; i++){
        document.getElementById(i).style.visibility ="visible";
    }
  }

function reply_click(clicked_id) {
     document.getElementById(clicked_id).innerHTML = currentPlayer;
     numberOfMoves ++;  
     checkWinner();
     switchPlayer();
     if(numberOfMoves === 9 && availableMoves == true){
        document.getElementById("message").innerText = "It's a tie";
     }
     document.getElementById(clicked_id).disabled = true;
 }

function checkWinner(){
    if(document.getElementById("0").textContent == document.getElementById("1").textContent && document.getElementById("1").textContent == document.getElementById("2").textContent && document.getElementById("0").textContent != 0){
       availableMoves = false;
       showMessage();
     }
    else if (document.getElementById("3").textContent == document.getElementById("4").textContent && document.getElementById("3").textContent == document.getElementById("5").textContent && document.getElementById("3").textContent != 0){
        availableMoves = false;
        showMessage();
     }
    else if(document.getElementById("6").textContent == document.getElementById("7").textContent && document.getElementById("6").textContent == document.getElementById("8").textContent && document.getElementById("6").textContent != 0){
        availableMoves = false;
        showMessage();
    }
    else if(document.getElementById("0").textContent == document.getElementById("3").textContent && document.getElementById("0").textContent == document.getElementById("6").textContent && document.getElementById("0").textContent != 0){
        availableMoves = false;
        showMessage();
    }
    else if(document.getElementById("1").textContent == document.getElementById("4").textContent && document.getElementById("1").textContent == document.getElementById("7").textContent && document.getElementById("1").textContent != 0){
        availableMoves = false;
        showMessage();
    }
    else if(document.getElementById("2").textContent == document.getElementById("5").textContent && document.getElementById("2").textContent == document.getElementById("8").textContent && document.getElementById("2").textContent != 0){
        availableMoves = false;
        showMessage();
    }
    else if(document.getElementById("0").textContent == document.getElementById("4").textContent && document.getElementById("0").textContent == document.getElementById("8").textContent && document.getElementById("0").textContent != 0){
        availableMoves = false;
        showMessage();
    }
    else if(document.getElementById("2").textContent == document.getElementById("4").textContent && document.getElementById("2").textContent == document.getElementById("6").textContent && document.getElementById("2").textContent != 0){
        availableMoves = false;
        showMessage();
    } 
}
function restartGame(){
    location.reload();
}
