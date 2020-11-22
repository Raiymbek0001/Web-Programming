function countDown(){
	var countDateFrom = new Date("Nov 22, 2020 21:50:30").getTime();
	var count = setInterval(function() {
		var currentTime = new Date().getTime();
		var interval = countDateFrom - currentTime;
		var totalSeconds = interval / 1000;
		var currentSeconds = totalSeconds % 60;
		var totalMinutes = totalSeconds / 60;
		var currentMinutes = totalMinutes % 60;
		var totalHours = totalMinutes / 60;
		var currentHour = totalHours % 24;
		var days = Math.floor(interval / (1000 * 60 * 60 * 24));
		document.getElementById('day').innerText = Math.floor(days);
		document.getElementById('hour').innerText = Math.floor(currentHour);
		document.getElementById('min').innerText = Math.floor(currentMinutes);
		document.getElementById('sec').innerText = Math.floor(currentSeconds);
		if(interval < 0){
			clearInterval(count);
			document.getElementById('day').innerText = 'D';
			document.getElementById('hour').innerText = 'O';
			document.getElementById('min').innerText = 'N';
			document.getElementById('sec').innerText = 'E';
			document.getElementById('container').style.backgroundColor = "#f542f2";
		}
	}, 1000);
}