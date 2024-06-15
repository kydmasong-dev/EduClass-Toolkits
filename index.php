<!DOCTYPE html>
<html lang="en">

<head>
	<?php include 'php/author-meta.php'; ?>
	<meta name="description" content="ICDM Examination Timer - A user-friendly web application to set, start, and manage examination durations with a sleek interface and real-time updates.">
	<meta name="keywords" content="ICDM, examination timer, exam timer, countdown timer, exam management, real-time timer, online exam tool, Kyd Tantano Masong">
	<?php include 'php/head-link.php'; ?>
	<title>ICDM Examination Timer</title>
	<link rel="stylesheet" href="assets/styles.css">
</head>

<body>
	<script src="assets/responsive.js" defer></script>
	<i id="fullscreen-icon" class="fas fa-expand"></i>
	<?php include '0-side-menu.php'; ?>
	<div class="container">
		<div id="setup">
			<h2>EXAMIMATION TIMER</h2>
			<div>
				<span style="font-size: 12pt;">Title:</span>
				<input type="text" placeholder="Examination Descriptions" id="title" size="65">
			</div>
			<div>
				<span style="font-size: 12pt;">Duration in hours:</span>
				<input type="number" placeholder="HH" id="hours" min="0" max="23">
				<span style="font-size: 12pt;">and in minutes:</span>
				<input type="number" placeholder="MM" id="minutes" min="0" max="59">
				<label><input type="checkbox" id="showSeconds" checked> Show seconds</label>
			</div>
		</div>
		<div class="buttons">
			<button id="start"><i class="fas fa-play"></i> START</button>
			<button id="pause" disabled><i class="fas fa-pause"></i> PAUSE</button>
			<button id="reset" disabled><i class="fas fa-redo-alt"></i> SETUP</button>
		</div>
		<div id="timer" class="hidden">
			<h2 id="timerTitle"></h2>
			<p class="highlight">Today is <strong><span id="currentDate"></span></strong></p>
			<hr>
			<table class="display-particulars">
				<tr class="display-particulars th">
					<th style="color: #ffffff;">Current Time</th>
					<th style="color: #1aff1a;">Start </th>
					<th style="color: #ff3300;">Finish </th>
				</tr>
				<tr>
					<td style="width: 250px;">
						<h3 id="currentTime"></h3>
					</td>
					<td style="width: 250px;">
						<h3 id="startTime"></h3>
					</td>
					<td style="width: 250px;">
						<h3 id="finishTime"></h3>
					</td>
				</tr>
			</table>

			<table class="display-timer">
				<tr>
					<th id="display-timer th">EXAMINATION TIME</th>
				</tr>
				<tr>
					<td class="display-timer td">
						<h1 id="remainingTime"></h1>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<?php include 'php/footer.php'; ?>
	<script src="assets/et-script.js" defer></script>

</body>

</html>