/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').values
  displayMessage(greet(timeString))
}

// returns a greeting based on the given argument, a time
function greet(time) {
  let timeStr = time.split(":").join("");
  let parsed = parseInt(timeStr);
  if (parsed < 1200) {
    return "Good Morning";
  } else if (parsed < 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
}

// updates the text inside the #greeting node
function displayMessage(newText) {
  document.getElementById("greeting").innerText = newText;
}
