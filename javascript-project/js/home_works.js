function isValidEmail(email) {
  //
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

const emailToCheck = "example@example.com";
if (isValidEmail(emailToCheck)) {
  console.log("Email валиден.");
} else {
  console.log("Email невалиден.");
}


// moving block
const childBlock = document.querySelector('#child_block');
let positionX = 0;
let positionY = 0;
let direction = 'right';

const move = () => {
  if (direction === 'right' && positionX < 449) {
    positionX += 2;
  } else if (direction === 'right') {
    direction = 'down';
  }

  if (direction === 'down' && positionY < 449) {
    positionY += 2;
  } else if (direction === 'down') {
    direction = 'left';
  }

  if (direction === 'left' && positionX > 0) {
    positionX -= 2;
  } else if (direction === 'left') {
    direction = 'up';
  }

  if (direction === 'up' && positionY > 0) {
    positionY -= 2;
  } else if (direction === 'up') {
    direction = 'right';
  }

  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;

  requestAnimationFrame(move);
};

setTimeout(() => {
  move();
}, 1000);


// *timer*//
    let startTime;
    let intervalId;
    let isRunning = false;
    let elapsedTime = 0;

    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const mlSecondsElement = document.getElementById('ml-seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function updateTimerDisplay() {
      const minutes = Math.floor(elapsedTime / (60 * 1000));
      const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
      const mlSeconds = elapsedTime % 1000;

      minutesElement.textContent = String(minutes).padStart(2, '0');
      secondsElement.textContent = String(seconds).padStart(2, '0');
      mlSecondsElement.textContent = String(mlSeconds).padStart(3, '0');
    }

    function startTimer() {
      if (!isRunning) {
        startTime = new Date().getTime() - elapsedTime;
        intervalId = setInterval(() => {
          elapsedTime = new Date().getTime() - startTime;
          updateTimerDisplay();
        }, 10);
        isRunning = true;
      }
    }

    function stopTimer() {
      if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
      }
    }

    function resetTimer() {
      stopTimer();
      elapsedTime = 0;
      updateTimerDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);

