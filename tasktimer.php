<!DOCTYPE html>
<html lang="en">

<head>
	<?php include 'php/author-meta.php'; ?>
	<meta name="description" content="Interactive classroom kits for teachers equipped with customizable timers for effective time management during instructional tasks. Enhance classroom engagement and learning efficiency with these educational tools.">
	<meta name="keywords" content="interactive classroom kits, teacher time management tools, instructional timers, classroom engagement resources, educational timekeeping aids, lesson pacing tools, student participation enhancers, teaching efficiency aids">
	<?php include 'php/head-link.php'; ?>
	<title>ICDM Task Timer</title>
	<link rel="stylesheet" href="assets/styles.css">
</head>

<body>
	<script src="assets/et-script.js" defer></script>
	<i id="fullscreen-icon" class="fas fa-expand"></i>
	<?php include '0-side-menu.php'; ?>
	<div class="container">
		<div id="setup">
			<h2>TASK TIMER</h2>
			<div>
				<p class="highlight">Today is <strong><span id="currentDate"></span></strong></p>
				<hr>
			</div>
			<div class="timer-button" id="timerOptions">
				<button class="timer-button" data-time="30"><i class="fas fa-stopwatch"></i> 30 sec</button>
				<button class="timer-button" data-time="60"><i class="fas fa-stopwatch"></i> 1 min</button>
				<button class="timer-button" data-time="120"><i class="fas fa-stopwatch"></i> 2 min</button>
				<button class="timer-button" data-time="180"><i class="fas fa-stopwatch"></i> 3 min</button>
				<button class="timer-button" data-time="240"><i class="fas fa-stopwatch"></i> 4 min</button>
				<button class="timer-button" data-time="300"><i class="fas fa-stopwatch"></i> 5 min</button>
				<button class="timer-button" data-time="600"><i class="fas fa-stopwatch"></i> 10 min</button>
				<button class="timer-button" data-time="900"><i class="fas fa-stopwatch"></i> 15 min</button>
				<button class="timer-button" data-time="1200"><i class="fas fa-stopwatch"></i> 20 min</button>
			</div>
			<br>
			<div class="break"></div>
			<h3 id="timerTitle"></h3>
			<div class="container-display" id="timerDisplay">
				<h1 id="remainingTime">00:00</h1>
			</div>
			<div class="buttons">
				<button id="start"><i class="fas fa-play"></i> START</button>
				<button id="pause" disabled><i class="fas fa-pause"></i> PAUSE</button>
				<button id="reset" disabled><i class="fas fa-redo-alt"></i> RESET</button>
			</div>
		</div>
	</div>
	<?php include 'php/footer.php'; ?>

	<script src="assets/et-script.js" defer></script>
	<script src="assets/tasktimer-script.js" defer></script>

</body>

</html>