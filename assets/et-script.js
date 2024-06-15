let timerInterval;

function formatTwoDigits(value) {
	return value < 10 ? `0${value}` : value;
}

function formatHHMM(date) {
	let hours = date.getHours();
	const minutes = formatTwoDigits(date.getMinutes());
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	return `${formatTwoDigits(hours)}:${minutes} ${ampm}`;
}

function formatTime(seconds, showSeconds) {
	const hrs = Math.floor(seconds / 3600);
	const mins = Math.floor((seconds % 3600) / 60);
	const secs = Math.floor(seconds % 60);

	const formattedHrs = hrs < 10 ? `0${hrs}` : hrs;
	const formattedMins = mins < 10 ? `0${mins}` : mins;
	const formattedSecs = secs < 10 ? `0${secs}` : secs;

	return `${formattedHrs}:${formattedMins}` + (showSeconds ? `:${formattedSecs}` : '');
}

function getRemainingTime() {
	const remainingText = document.getElementById('remainingTime').textContent.split(':');
	const hrs = parseInt(remainingText[0]) || 0;
	const mins = parseInt(remainingText[1]) || 0;
	const secs = parseInt(remainingText[2]) || 0;
	return (hrs * 3600) + (mins * 60) + secs;
}

document.getElementById('start').addEventListener('click', function () {
	const title = document.getElementById('title').value;
	const hours = parseInt(document.getElementById('hours').value) || 0;
	const minutes = parseInt(document.getElementById('minutes').value) || 0;
	const showSeconds = document.getElementById('showSeconds').checked;
	const duration = (hours * 60 * 60) + (minutes * 60);

	if (duration <= 0) {
		alert('You have not indicated a time duration. Please set a valid duration in hours or minutes.');
		return;
	}

	const currentTime = new Date();
	document.getElementById('startTime').textContent = formatHHMM(currentTime);

	document.getElementById('setup').classList.add('hidden');
	document.getElementById('timer').classList.remove('hidden');
	document.getElementById('start').classList.add('clicked');
	document.getElementById('start').disabled = true;
	document.getElementById('start').style.opacity = '0.1';
	document.getElementById('pause').disabled = false;
	document.getElementById('reset').disabled = false;

	document.getElementById('timerTitle').textContent = title;
	updateCurrentTime();
	startTimer(duration, showSeconds);
});

document.getElementById('pause').addEventListener('click', function () {
	if (timerInterval) {
		clearInterval(timerInterval);
		timerInterval = null;
		this.innerHTML = '<i class="fas fa-play"></i> CONTINUE';
	} else {
		const remainingTime = getRemainingTime();
		startTimer(remainingTime, document.getElementById('showSeconds').checked);
		this.innerHTML = '<i class="fas fa-pause"></i> PAUSE';
	}
});

document.getElementById('reset').addEventListener('click', function () {
	clearInterval(timerInterval);
	timerInterval = null;
	document.getElementById('setup').classList.remove('hidden');
	document.getElementById('timer').classList.add('hidden');
	document.getElementById('start').classList.remove('clicked');
	document.getElementById('start').disabled = false;
	document.getElementById('start').style.opacity = '1';
	document.getElementById('pause').disabled = true;
	document.getElementById('reset').disabled = true;
	document.getElementById('pause').innerHTML = '<i class="fas fa-pause"></i> PAUSE';
});

function startTimer(duration, showSeconds) {
	const endTime = Date.now() + duration * 1000;
	finishTime = new Date(endTime);

	timerInterval = setInterval(function () {
		const remainingTime = Math.max(0, (endTime - Date.now()) / 1000);
		document.getElementById('remainingTime').textContent = formatTime(remainingTime, showSeconds);
		document.getElementById('finishTime').textContent = formatHHMM(finishTime);

		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			timerInterval = null;
			document.getElementById('remainingTime').textContent = 'TIME IS UP!';
		}
	}, 1000);
}

function updateCurrentTime() {
	setInterval(() => {
		const now = new Date();
		const options = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		document.getElementById('currentDate').textContent = now.toLocaleDateString('en-GB', options);
		document.getElementById('currentTime').textContent = formatHHMM(now);
	}, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
	const year = new Date().getFullYear();
	document.getElementById('year').textContent = year;
});

updateCurrentTime();

document.getElementById("fullscreen-icon").addEventListener("click", function () {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
		this.classList.remove("fa-expand");
		this.classList.add("fa-compress");
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			this.classList.remove("fa-compress");
			this.classList.add("fa-expand");
		}
	}
});

function toggleMenu() {
	const sideMenu = document.getElementById('sideMenu');
	if (sideMenu.style.left === '-250px') {
		sideMenu.style.left = '0';
	} else {
		sideMenu.style.left = '-250px';
	}
}