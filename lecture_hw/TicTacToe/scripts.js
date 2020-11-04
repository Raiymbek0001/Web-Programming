const cellIndexes = Array.from(document.querySelectorAll('.col'));

var isXNext = true;
 

const handleTurnCell = e => {
	if(checkForWinner()){
		return;
	}
	if(isXNext){
		e.target.innerText = 'X';
		isXNext = !isXNext;
	}
	else{
		for(const integer of cellIndexes){
			if(integer.innerText == '')
				integer.innerText = 'O';
		}
		isXNext = !isXNext;
	}
}

for(const cellIndex of cellIndexes){
	cellIndex.addEventListener('click', handleTurnCell)
}

function checkForWinner(){
	var isOver = false;
	const arrayOfWinningPos = [
		[0,1,2], 
		[3,4,5],
		[6,7,8],
		[0,4,8], 
		[2,4,6], 
		[0,3,6],
		[1,4,7],
		[2,5,8]
	];

	for(const vicCells of arrayOfWinningPos){
		const index1 = cellIndexes[vicCells[0]].innerText;
		const index2 = cellIndexes[vicCells[1]].innerText;
		const index3 = cellIndexes[vicCells[2]].innerText;
		if(index1 == index2 && index2 == index3 && index1 != ''){
			isOver = true;
			for(const index of vicCells){
				cellIndexes[index].className += ' won';
			}
		}
	}
	return isOver;
}