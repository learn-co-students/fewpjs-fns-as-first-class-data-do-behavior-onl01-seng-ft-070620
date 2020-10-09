/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
	// time.split(':');

	if (parseInt(time, 10) < 12) { return "Good Morning"; }
	if (parseInt(time, 10) < 17) { return "Good Afternoon"; }
	return "Good Evening";
}

function displayMessage(message) {
	let greeting = document.getElementById('greeting')
	greeting.innerText = message
}