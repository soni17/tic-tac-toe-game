document.addEventListener("DOMContentLoaded",function(){

  //select table elements
  const table = document.querySelector("#grid");
  const startButton = document.querySelector("#startGame");
  const cells = document.querySelectorAll("td");
  const message = document.querySelector('#message');

  //declare player variables
  var playersTurn = "player-X";
  var turnsCounter = 0;

  //assign click event to table when page loads
  table.addEventListener( "click" , clickBoard );

  function clickBoard(event){
    if (event.target.className === "empty"){
      play(event.target);
      turnsCounter++;
    }
    checkForWinner(event);
  }

  //reset settings when "start over" button is pressed
  startButton.addEventListener("click",function(){
    cells.forEach(function(cell){
      cell.innerText = "";
      cell.className = "empty";
    });
    message.innerText = "";
    turnsCounter = 0;
    table.addEventListener( "click" , clickBoard );
  });

  //helper function to make it easier to find content of cell
  function cell(index){
    return cells[index].innerText;
  }

  //find out whether there's a winner at a snapshot in time (takes X or O as argument)
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

  //insert X or O in the table and rotate between players
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

  //If there a winner, display Congratulations message and remove click event listener
  function checkForWinner(){
    if ( isWinner("X") ){
      message.innerText = "Player-X Wins. Congratulations";
      table.removeEventListener("click",clickBoard);
    } else if ( isWinner("O") ){
      message.innerText = "Player-O Wins. Congratulations";
      table.removeEventListener("click",clickBoard);
    } else if ( turnsCounter === 9){
      message.innerText = "DRAW";
    }
  }


});
