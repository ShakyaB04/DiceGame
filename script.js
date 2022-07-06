var winingScore = 30;
var turn = 1;
var p1 = 0;
var p2 = 0;

function rollDice(){
    var dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').value = dice
    return dice;
}


function play(){

    if(p1 < winingScore && p2 < winingScore){
        if(turn == 1){
            var diceNum = rollDice();
            if (p1+diceNum <= winingScore){
                p1 = p1 + diceNum;
            }
            turn = 2;
            document.getElementById('player1').value = p1
        }
        else if(turn == 2){
            var diceNum = rollDice();
            if (p2+diceNum <= winingScore){
                p2 = p2 + diceNum;
            }
            turn = 1;    
            document.getElementById('player2').value = p2
        }
        else{
            document.getElementById('out').value = '<i>Input out of Range !!</i>'
        }
    }
    
    
    if(check() == 1){
        document.getElementById('out').innerHTML = '<b><i>Player 1</i> is the winner</b>'
    }
    else if(check() == 2){
        document.getElementById('out').innerHTML = '<b><i>Player 2</i> is the winner</b>'
    }    
}

function check(){
    if(p1 == winingScore){
        return 1;
    }
    else if(p2 == winingScore){
        return 2;
    }
}

