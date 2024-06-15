// Element references
        const timerOptions = document.getElementById('timerOptions');
        const timerDiv = document.getElementById('timerDisplay');
        const timerTitle = document.getElementById('timerTitle');
        const countdownDisplay = document.getElementById('remainingTime');
        const startButton = document.getElementById('start');
        const pauseButton = document.getElementById('pause');
        const resetButton = document.getElementById('reset');
        // const tickSound = document.getElementById('tickSound'); // Ensure tickSound element exists in your HTML if needed

        // Timer variables
        let countdown;
        let timerDuration;
        let endTime;
        let isPaused = false;
        let pausedTime;

        // Event listener for timer options
        timerOptions.addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') {
                timerDuration = parseInt(e.target.getAttribute('data-time'));
                timerTitle.textContent = `TIMER: ${e.target.textContent}`;
                timerOptions.classList.add('hidden');
                timerDiv.classList.remove('hidden');
            }
        });

        // Function to start the timer
        function startTimer() {
            if (isPaused) {
                endTime = Date.now() + pausedTime * 1000;
                isPaused = false;
            } else {
                endTime = Date.now() + timerDuration * 1000;
            }

            countdown = setInterval(() => {
                const remainingTime = Math.round((endTime - Date.now()) / 1000);

                if (remainingTime <= 0) {
                    clearInterval(countdown);
                    displayTimeLeft(0);
                    countdownDisplay.textContent = 'TIME IS UP!';
                    // tickSound.play(); // Ensure tickSound element exists in your HTML if needed
                } else {
                    displayTimeLeft(remainingTime);
                }
            }, 1000);

            startButton.disabled = true;
            pauseButton.disabled = false;
            resetButton.disabled = false;
        }

        // Function to pause the timer
        function pauseTimer() {
            if (!isPaused) {
                clearInterval(countdown);
                pausedTime = Math.round((endTime - Date.now()) / 1000);
                isPaused = true;
                startButton.disabled = false;
                pauseButton.disabled = true;
            }
        }

        // Function to display the remaining time
        function displayTimeLeft(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
            countdownDisplay.textContent = display;
        }

        // Function to reset the timer
        function resetTimer() {
            location.reload();
        }

        // Event listeners for start, pause, and reset buttons
        startButton.addEventListener('click', startTimer);
        pauseButton.addEventListener('click', pauseTimer);
        resetButton.addEventListener('click', resetTimer);

        // Set the current year and date in the footer
        document.addEventListener('DOMContentLoaded', (event) => {
            const year = new Date().getFullYear();
            document.getElementById('year').textContent = year;

            const currentDate = new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            document.getElementById('currentDate').textContent = currentDate;
        });

