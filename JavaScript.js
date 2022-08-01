var x = "";
var expVar = 0;
/*var button = document.getElementById("cellGame");
var button1 = document.getElementById("cellGame1");
var button2 = document.getElementById("cellGame2");
var button3 = document.getElementById("cellGame3");
var button4 = document.getElementById("cellGame4");
var button5 = document.getElementById("cellGame5");
var button6 = document.getElementById("cellGame6");
var button7 = document.getElementById("cellGame7");
var button8 = document.getElementById("cellGame8");*/
function crossNullButton(cell){
	expVar++
	console.log(expVar)
	crosskletka = document.getElementById(cell)
	//Ход нолики
	if (expVar == 1 
	 || expVar == 3
	 || expVar == 5
	 || expVar == 7
	 || expVar == 9) {
		x = "X"
		moveplayer = "Сейчас ход игрока 2"
		crosskletka.innerHTML = x
		move = document.getElementById("whoseMoveWin")
		move.innerHTML = moveplayer
	}
	//Ход крестики
	else if (expVar == 2
		  || expVar == 4
	 	  || expVar == 6
	 	  || expVar == 8) {
		x = 0
		moveplayer = "Сейчас ход игрока 1"
		crosskletka.innerHTML = x
		move = document.getElementById("whoseMoveWin")
		move.innerHTML = moveplayer
	}
	//Победа
	
	//Ничья
	if (expVar == 9) {
		draw = "Ничья"
		move.innerHTML = draw
	}
}