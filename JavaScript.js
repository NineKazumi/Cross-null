var whoseMotion = 0
var plusOneEveryMotion = 0
function crossNullMotionDrawWinClick(cell){	
	//Переменные
	 	const playerX = ["Выйграл игрок 1(Х)","Сейчас ход игрока 1(Х)","X"]
		const player0 = ["Bыйграл игрок 2(0)","Сейчас ход игрока 2(0)","0"]
		var motion = document.getElementById("whoseMotionWin")
		var pasteButtonX0 = document.getElementById(cell)
		var cellGame =
	   [["CellGame0"[""]],["CellGame1"[""]],["CellGame2"[""]],
		["CellGame3"[""]],["CellGame4"[""]],["CellGame5"[""]],
		["CellGame6"[""]],["CellGame7"[""]],["CellGame8"[""]]]
	//Функция хода
		//+ ход
			whoseMotion++
			console.log(whoseMotion)
		//Ход Х
			if (whoseMotion == 1 
			 || whoseMotion == 3 
			 || whoseMotion == 5
			 || whoseMotion == 7
			 || whoseMotion == 9) {
				pasteButtonX0.innerHTML = playerX[2]
				motion.innerHTML = playerX[1]
				//ПобедаX
					if (cell == "cellGame0") {
						cellGame[0[1]] = "x"
					}
					else if (cell == "cellGame1") {
						cellGame[1[1]] = "x"
					}
					else if (cell == "cellGame2") {
						cellGame[2[1]] = "x"
					}
					else if (cell == "cellGame3") {
						cellGame[3[1]] = "x"
					}
					else if (cell == "cellGame4") {
						cellGame[4[1]] = "x"
					}
					else if (cell == "cellGame5") {
						cellGame[5[1]] = "x"
					}
					else if (cell == "cellGame6") {
						cellGame[6[1]] = "x"
					}
					else if (cell == "cellGame7") {
						cellGame[7[1]] = "x"
					}
					else if (cell == "cellGame8") {
						cellGame[8[1]] = "x"
					}
			}
		//Ход 0
			else if (whoseMotion == 2
			 	  || whoseMotion == 4
				  || whoseMotion == 6
				  || whoseMotion == 8) {
				pasteButtonX0.innerHTML = player0[2]
				motion.innerHTML = player0[1]
				//Победа0
					if (cell == "cellGame0") {
						cellGame[0[1]] = "0"
					}
					else if (cell == "cellGame1") {
						cellGame[1[1]] = "0"
					}
					else if (cell == "cellGame2") {
						cellGame[2[1]] = "0"
					}
					else if (cell == "cellGame3") {
						cellGame[3[1]] = "0"
					}
					else if (cell == "cellGame4") {
						cellGame[4[1]] = "0"
					}
					else if (cell == "cellGame5") {
						cellGame[5[1]] = "0"
					}
					else if (cell == "cellGame6") {
						cellGame[6[1]] = "0"
					}
					else if (cell == "cellGame7") {
						cellGame[7[1]] = "0"
					}
					else if (cell == "cellGame8") {
						cellGame[8[1]] = "0"
					}

			}
		console.log(cellGame[0[1]])
	//	console.log(plusOneEveryMotion)
		plusOneEveryMotion++
}