/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time)
{
    const hour = Number(time.split(":")[0])
    if (hour < 12)
    {
      return "Good Morning"
    }
    else if (hour >= 12 && hour < 17)
    {
      return "Good Afternoon"
    }
    else if (hour >= 17)
    {
      return "Good Evening"
    }

}

function displayMessage(message)
{
  let greeting = document.querySelector("#greeting")
  greeting.innerText = message
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
