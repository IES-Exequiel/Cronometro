let intervalId; // Variable to store the interval ID

function startInterval() {
  intervalId = setInterval(function () {
    console.log("Interval is running...");
    // Your code here
  }, 1000); // Interval is set to 1 second (1000 milliseconds)
}

function stopInterval() {
  clearInterval(intervalId);
  console.log("Interval has been stopped.");
}

// Event listeners for the start and stop buttons
document.getElementById("btnIniciar").addEventListener("click", startInterval);
document.getElementById("btnDetener").addEventListener("click", stopInterval);