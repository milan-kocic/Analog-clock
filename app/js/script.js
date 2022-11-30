const secondsHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hoursHand = document.getElementById("hours");
const stopWatch = document.getElementById("stopwatch");

function getTime() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() - 12;
  const timeInterval = 6;

  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform = "rotate(" + minutes * timeInterval + "deg)";
  //hoursHand.style.transform = "rotate(" + hours * 30 + minutes / 2 + "deg)"; stepeni koji se dodaju da se 
  //kazaljka koja pokazuje casove krece sporije
  hoursHand.style.transform = "rotate(" + hours * 30 + "deg)";
  stopWatch.innerHTML = `${hours}:${minutes}:${seconds} `;
}

setInterval(getTime, 1000);
