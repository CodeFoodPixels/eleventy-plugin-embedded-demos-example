const timeElement = document.querySelector(".time");

function setTime() {
  const now = new Date();
  timeElement.innerHTML = `${now.getHours()}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
}

setInterval(setTime, 1000);
setTime();
