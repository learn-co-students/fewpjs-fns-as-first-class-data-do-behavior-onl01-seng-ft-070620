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
  const splitTime = time.split(':')
  const formattedTime = parseInt(splitTime[0])
  if (formattedTime < 12) {
    return "Good Morning"
  } else if (formattedTime > 12 && formattedTime < 19) {
    return "Good Afternoon"
  } else
    return "Good Evening"
}

function displayMessage(message) {
  const greeting = document.getElementById('greeting')
  greeting.innerHTML = greet(message)
}

