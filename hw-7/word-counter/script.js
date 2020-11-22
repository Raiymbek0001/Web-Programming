var char = document.getElementById('chars');
var word = document.getElementById('words');
var sentences = document.getElementById('sentences');
var paragraphs = document.getElementById('paragraphs');
var time = document.getElementById('time');

var text = document.getElementById('text');
text.addEventListener('keyup',  e => {
	var data = text.value.split(' ');
	var sentence = text.value;
	sentences.innerText = sentence.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
	paragraphs.innerText = text.value.split("\n").length;
	var wordCount = 0;
	var charCount = 0;
	var sentenceCount = 0;
	for(var i = 0; i < data.length; i++){
		if(data[i] !== " " && data[i] !== "" && isWord(data[i]))
			wordCount++;
		if(data[i] === '.')
			sentenceCount++;
		charCount = charCount + data[i].length;
	}
	word.innerText = wordCount;
	char.innerText = charCount;
	

	var timeCount = wordCount / 200;
	var min = Math.floor(timeCount);
	var decimal = parseFloat(((timeCount - min) * 0.6).toFixed(2));
	var str = decimal.toString().split(".");
	console.log(str)
	min = min + parseInt(str[0]);
	var sec = Math.floor(str[1]);
	if(min === 0){
		time.innerText = sec + 's';
	}
	else
		time.innerText = min + 'm ' + sec + 's';
})

function isWord(s){
	var isWord = false;
	for(var i = 0; i < s.length; i++){
		if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57 || 
			s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 || 
			s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
			isWord = true;
		return isWord;
	}
	return isWord;
}