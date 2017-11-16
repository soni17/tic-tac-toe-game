document.addEventListener("DOMContentLoaded",function(){

  const table = document.querySelector("#grid");
  const startButton = document.querySelector("#startGame");
  const cells = document.querySelectorAll("td");
  const message = document.querySelector('#message');
  var playersTurn = "player-X";
  var turnsCounter = 0;

  startButton.addEventListener("click",function(){
    cells.forEach(function(cell){
      cell.innerText = "";
      cell.className = "empty";
      message.innerText = "";
      turnsCounter = 0;
    });
  });

  function cell(index){
    return cells[index].innerText;
  }

  function isWinner(char){
    if      ( cell(0) === char && cell(1) === char && cell(2) === char ){return true;}
    else if ( cell(3) === char && cell(4) === char && cell(5) === char ){return true;}
    else if ( cell(6) === char && cell(7) === char && cell(8) === char ){return true;}
    else if ( cell(0) === char && cell(3) === char && cell(6) === char ){return true;}
    else if ( cell(1) === char && cell(4) === char && cell(7) === char ){return true;}
    else if ( cell(2) === char && cell(5) === char && cell(8) === char ){return true;}
    else if ( cell(0) === char && cell(4) === char && cell(8) === char ){return true;}
    else if ( cell(2) === char && cell(4) === char && cell(6) === char ){return true;}
    else {return false;}
  }

  function play(cell){
    if (playersTurn === "player-X"){
      cell.innerText = "X";
      cell.className = "X"
      playersTurn = "player-O";
    } else if (playersTurn === "player-O"){
      cell.innerText = "O";
      cell.className = "O";
      playersTurn = "player-X";
    }
  }

  function checkForWinner(){
    if ( isWinner("X") ){
      message.innerText = "Player-X Wins. Congratulations";
    } else if ( isWinner("O") ){
      message.innerText = "Player-O Wins. Congratulations";
    } else if ( turnsCounter === 9){
      message.innerText = "DRAW";
    }
  }

  // event listener for clicks on game board
  table.addEventListener( "click" , function(event){
    if (event.target.className === "empty"){
      play(event.target);
      turnsCounter++;
    }
    checkForWinner(event);
  });


});
