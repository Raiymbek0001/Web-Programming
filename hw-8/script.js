const valid = () => {
	let fName = document.getElementById('fName').value;
	let lName = document.getElementById('lName').value;
	if(isWord(fName) && isWord(lName)){
		document.getElementById('quiz-block').style.display = 'block';
		document.getElementById('main-block').style.display = 'none';
	}
	else{
		document.getElementById('invalid').innerText = 
		'Invalid first name or last name';
	}
}
const isWord = (s) => {
	for(let i = 0; i < s.length; i++){
		if(!(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || 
			s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122))
			return false;
	}
	return true;
}
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  	class Questions{
		constructor(question, answers, correctAnswer){
			this.question = question;
			this.answers = answers;
			this.correctAnswer = correctAnswer;
		}
	}
	let results = [];
	let prevBtn = document.getElementById('prev');
	let nextBtn = document.getElementById('next');
	let submitBtn = document.getElementById('submit');
	let viewScore = document.getElementById('viewScore');
	let close = document.getElementById('close');
	let count = 0;
	let questions = [];
	let input = [];
	let label = [];
	let pointer = [];
	let submitted = false;
	let labelCor = [];
  	const load = () => {
	    let data = JSON.parse(xmlhttp.responseText);
	    let count = 0;
	    let question = null;
	    let answers = [];
	    let correctAnswer = null;
		for(let i = 0; i < data.questions.length; i++){
			question = data.questions[i].question;
			correctAnswer = data.questions[i].answer;
			answers = data.questions[i].answers;
			questions[i] = new Questions(question, answers, correctAnswer);
			let nuvNumber = document.createElement('p');
			nuvNumber.className = "numberOfQuestion";
			if(i == 0)
				nuvNumber.style.backgroundColor = "#ceede8";
			let nav = document.getElementById('nav');
			nuvNumber.innerText = i+1;
			nuvNumber.addEventListener("click", e => {
				count = parseInt(e.target.innerText) - 1;
				navPointer(count);
				setup(count);
			})
			input[i] = [];
			label[i] = [];
			for(let j = 0; j < answers.length; j++){
				input[i][j] = document.createElement('input');
				input[i][j].type = "radio";
				input[i][j].name = "quiz";
				input[i][j].id  = "q" + i;
				input[i][j].value = answers[j].toString();
				label[i][j] = document.createElement('label');
				label[i][j].for = "q" + i;
				label[i][j].cursor = 'pointer';
				label[i][j].innerText = answers[j].toString();
			}
			nav.appendChild(nuvNumber);
		}
	}
	document.addEventListener('onload', load());
	let navPointer = (idx) => {
		pointer = document.getElementsByClassName('numberOfQuestion');
		for(let i = 0; i < pointer.length; i++){
			if(pointer[i].innerText === idx + 1 + "")
				pointer[i].style.backgroundColor = "#ceede8";
			else
				pointer[i].style.backgroundColor = "#89f5c3";
		}
		setup(count);
	}
	prevBtn.addEventListener('click', () => {
		if(count > 0)
			count--;
		navPointer(count);
	});
	next.addEventListener('click', () => {
		if(count < questions.length - 1)
			count++;
		navPointer(count);
	});
	submitBtn.addEventListener('click', () => {
		for(let i = 0; i < questions.length; i++){
			labelCor[i] = document.createElement('p');
			let isCorrect = false;
			labelCor[i].className = 'correct';
			for(let j = 0; j < input[i].length; j++){
				if(input[i][j].checked && input[i][j].value === questions[i].correctAnswer){
					isCorrect = true;
					break;
				}
			}
			if(isCorrect)
				labelCor[i].innerText = "1/1";
			else
				labelCor[i].innerText = "0/1";
		}
		document.getElementById('quiz-block').style.display = "none";
		document.getElementById('submission').style.display = "flex";
		submitted = true;
	})
	viewScore.addEventListener('click', () => {
		document.getElementById('quiz-block').style.display = 'block';
		document.getElementById('submission').style.display = 'none';
		submitBtn.style.display = 'none';
		setup(0);
		navPointer(0);
	});
	close.addEventListener('click', () => {
		window.close();
	})
	const setup = (index) => {
		document.getElementById('ques').innerText = questions[index].question;
		let inputTags = document.getElementById('qBlock').getElementsByTagName('input');
		let labelTags = document.getElementsByTagName('label');
		while(inputTags[0]){
			inputTags[0].remove();
			labelTags[0].remove();
		}
		for(let i = 0; i < input[index].length; i++){
			document.getElementById('question' + i).appendChild(input[index][i]);
			document.getElementById('question' + i).appendChild(label[index][i]);
		}
		if(submitted){
			let pTags = document.getElementsByClassName('correct');
			while(pTags[0]){
				pTags[0].remove();
			}
			document.getElementById('qBlock').appendChild(labelCor[index]);
			console.log(labelCor[0]);
		}
	}
	setup(count);
  }
};
xmlhttp.open("GET", "questions.json", true);
xmlhttp.send();