/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 12) return `Good Morning`
  if (hour < 17) return `Good Afternoon`
  return `Good Evening`
}

function displayMessage (string) {
    const input = document.getElementById("greeting");
    input.innerText = string
}
