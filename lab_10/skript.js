var startTime; 
var stopwatchInterval;
var elapsedPausedTime = 0;
var isRunning = false;

function startStopStopwatch() { 
  if (!isRunning) { // старт
    startStopButton.textContent = 'Стоп';
    isRunning = true;
    if (!stopwatchInterval) {
      startTime = new Date().getTime() - elapsedPausedTime;
      stopwatchInterval = setInterval(updateStopwatch, 10);
    }
  } else { // стоп
    clearInterval(stopwatchInterval); 
    elapsedPausedTime = new Date().getTime() - startTime; 
    stopwatchInterval = null; 
    startStopButton.textContent = 'Старт';
    isRunning = false;
  }
}

function resetStopwatch() { // обнулить
  isRunning = true;
  startStopStopwatch(); 
  elapsedPausedTime = 0; 
  document.getElementById("stopwatch").innerHTML = "00:00:00.000"; 
}

function updateStopwatch() {
  var currentTime = new Date().getTime();
  var elapsedTime = currentTime - startTime; 
  var milliseconds = elapsedTime % 1000; 
  var seconds = Math.floor(elapsedTime / 1000) % 60; 
  var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; 
  var hours = Math.floor(elapsedTime / 1000 / 60 / 60); 
  var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + padMilliseconds(milliseconds); 
  document.getElementById("stopwatch").innerHTML = displayTime; 
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

function padMilliseconds(number) {
  return (number < 100 ? "0" : "") + (number < 10 ? "0" : "") + number;
}