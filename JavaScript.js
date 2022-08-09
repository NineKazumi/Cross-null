var whoseMotion = 0
var cellGame = ["","","",
				"","","",
				"","",""]
function crossNullMotionDrawWinClick(cell){	
	//Переменные
	 	const playerX = ["Выйграл игрок 1(Х)","Сейчас ход игрока 2(0)","X"]
		const player0 = ["Bыйграл игрок 2(0)","Сейчас ход игрока 1(X)","0"]
		var motion = document.getElementById("whoseMotionWin")
		var pasteButtonX0 = document.getElementById(cell)
	//Функция хода
		//Ход Х
			if (whoseMotion == 0
			 || whoseMotion == 2
			 || whoseMotion == 4
			 || whoseMotion == 6
			 || whoseMotion == 8) {
				pasteButtonX0.innerHTML = playerX[2]
				motion.innerHTML = playerX[1]
					if (cell == "cellGame0") {
						cellGame[0] = playerX[2]
					}
					else if (cell == "cellGame1") {
						cellGame[1] = playerX[2]
					}
					else if (cell == "cellGame2") {
						cellGame[2] = playerX[2]
					}
					else if (cell == "cellGame3") {
						cellGame[3] = playerX[2]
					}
					else if (cell == "cellGame4") {
						cellGame[4] = playerX[2]
					}
					else if (cell == "cellGame5") {
						cellGame[5] = playerX[2]
					}
					else if (cell == "cellGame6") {
						cellGame[6] = playerX[2]
					}
					else if (cell == "cellGame7") {
						cellGame[7] = playerX[2]
					}
					else if (cell == "cellGame8") {
						cellGame[8] = playerX[2]
					}
			}
				//ПобедаX
				if (cellGame[0] == playerX[2] & cellGame[1] == playerX[2] & cellGame[2] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[3] == playerX[2] & cellGame[4] == playerX[2] & cellGame[5] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[6] == playerX[2] & cellGame[7] == playerX[2] & cellGame[8] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[0] == playerX[2] & cellGame[3] == playerX[2] & cellGame[6] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[1] == playerX[2] & cellGame[4] == playerX[2] & cellGame[7] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[2] == playerX[2] & cellGame[5] == playerX[2] & cellGame[8] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[0] == playerX[2] & cellGame[4] == playerX[2] & cellGame[8] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
				if (cellGame[6] == playerX[2] & cellGame[4] == playerX[2] & cellGame[2] == playerX[2]) {
					pasteButtonX0.innerHTML = playerX[1]
					window.location.href = 'win1.html'
				}
		//Ход 0
			else if (whoseMotion == 1 
				  || whoseMotion == 3 
			 	  || whoseMotion == 5
			 	  || whoseMotion == 7
				  || whoseMotion == 9) {
				pasteButtonX0.innerHTML = player0[2]
				motion.innerHTML = player0[1]
					if (cell == "cellGame0") {
						cellGame[0] = player0[2]
					}
					else if (cell == "cellGame1") {
						cellGame[1] = player0[2]
					}
					else if (cell == "cellGame2") {
						cellGame[2] = player0[2]
					}
					else if (cell == "cellGame3") {
						cellGame[3] = player0[2]
					}
					else if (cell == "cellGame4") {
						cellGame[4] = player0[2]
					}
					else if (cell == "cellGame5") {
						cellGame[5] = player0[2]
					}
					else if (cell == "cellGame6") {
						cellGame[6] = player0[2]
					}
					else if (cell == "cellGame7") {
						cellGame[7] = player0[2]
					}
					else if (cell == "cellGame8") {
						cellGame[8] = player0[2]
					}
			}
			//Победа0
				if (cellGame[0] == player0[2] & cellGame[1] == player0[2] & cellGame[2] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[3] == player0[2] & cellGame[4] == player0[2] & cellGame[5] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[6] == player0[2] & cellGame[7] == player0[2] & cellGame[8] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[0] == player0[2] & cellGame[3] == player0[2] & cellGame[6] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[1] == player0[2] & cellGame[4] == player0[2] & cellGame[7] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[2] == player0[2] & cellGame[5] == player0[2] & cellGame[8] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[0] == player0[2] & cellGame[4] == player0[2] & cellGame[8] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
				if (cellGame[6] == player0[2] & cellGame[4] == player0[2] & cellGame[2] == player0[2]) {
					pasteButtonX0.innerHTML = player0[1]
					window.location.href = 'win2.html'
				}
		//+ ход
			whoseMotion++
			console.log(whoseMotion)
			console.log(cellGame)
		//Hичья
			if (whoseMotion == 9) {
				window.location.href = 'draw.html'
			}
}
function home(){
	window.location = 'index.html'
}