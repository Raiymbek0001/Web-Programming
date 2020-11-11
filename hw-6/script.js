const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');
selected.addEventListener('click' , ()=> {
	optionsContainer.classList.toggle('active');
});

function removePrevElem(key){
	const view = Array.from(document.querySelectorAll('section'));
	for(var i = 0; i < view.length; i++){
		if(view[i].id === key){
			view[i].className = 'display';
		}
		else
			view[i].className = 'hide';
	}
}
removePrevElem('');


optionsList.forEach(o => {
	o.addEventListener('click', ()=> {
		selected.innerHTML = o.querySelector('label').innerHTML;
		optionsContainer.classList.remove('active');
		if(selected.innerHTML === 'Calculator'){
			removePrevElem('option1');
		}
		if(selected.innerHTML === 'Temperature')
			removePrevElem('option2');
		if(selected.innerHTML === 'Volume')
			removePrevElem('option3');
		if(selected.innerHTML === 'Reverse a number')
			removePrevElem('option4');
		if(selected.innerHTML === 'Draw a rectangle')
			removePrevElem('option5');
		if(selected.innerHTML === 'Draw a circle')
			removePrevElem('option6');
		if(selected.innerHTML === 'Draw circles[diagonal]')
			removePrevElem('option7');
	});
});

function multiply(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;
	const result = num1 * num2;
	document.getElementById('result1').innerHTML = result;
}
function divide(){
	const num1 = document.getElementById('num1').value;
	const num2 = document.getElementById('num2').value;
	const result = num1 / num2;
	document.getElementById('result1').innerHTML = result;
}
function convert(id){
	const celcius = document.getElementById('celcius').value;
	const farenheit = document.getElementById('farenheit').value;
	if(id == 'celcius'){
		const result = (celcius * 9 / 5) + 32;
		document.getElementById('result2').innerHTML = result;
	}
	else if(id == 'farenheit'){
		const result = (farenheit - 32) * 5 / 9;
		document.getElementById('result3').innerHTML = result;
	}
}
function getVolume(){
	const r = document.getElementById('radius').value;
	const V = Math.PI * 4 * Math.pow(r, 3) / 3;
	document.getElementById('result4').innerHTML = V;
}
function reverse(){
	var num = document.getElementById('number').value;
	num = num.split("").reverse().join("");
	document.getElementById('result5').innerHTML = num;
}
function draw() {
  	var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.fillRect(20,20,400,400);
    context.clearRect(40,40,340,340);
    context.strokeRect(45,45,330,330);
}
draw();
function drawCircle() {
  	var canvas = document.getElementById('circle-canvas');
    var context = canvas.getContext('2d');

    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.lineWidth = 1;
	context.strokeStyle = 'red';
    context.stroke();
}
drawCircle();
function drawCirclesByDiagonal(){
	var canvas = document.getElementById('circles-canvas');
	var context = canvas.getContext('2d');
	context.beginPath();
	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 6; j++){
			context.fillStyle = "rgb(" + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*i) +
  			"," + Math.floor(255-42.5*i) + ")";
  			context.beginPath();
			context.arc(50 + 100 * i, 50 + 100 * i, 50, 0 , Math.PI * 2, true);
			context.fill();
			context.stroke();
		}
	}
}
drawCirclesByDiagonal();