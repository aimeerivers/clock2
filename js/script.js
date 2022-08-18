let clock1 = document.getElementById("clock1");
let clock2 = document.getElementById("clock2");

function clock1Time(dt) {
  let hh = dt.getHours().toString().padStart(2, "0");
  let mm = dt.getMinutes().toString().padStart(2, "0");
  let ss = dt.getSeconds().toString().padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
}

function clock2Time(dt) {
  let secondsSinceMidnight = Math.floor((dt.getTime() - dt.setHours(0, 0, 0, 0)) / 1000);

  let hh = (Math.floor(secondsSinceMidnight / (216 * 20)) + 1).toString().padStart(2, "0");
  let mm = (Math.floor((secondsSinceMidnight / 216) % 20) + 1).toString().padStart(2, "0");
  let sss = ((secondsSinceMidnight % 216) + 1).toString().padStart(3, "0");

  return `${hh}:${mm}:${sss}`;
}

function update() {
  let dt = new Date();
  clock1.innerText = clock1Time(dt);
  clock2.innerText = clock2Time(dt);
}

update();
setInterval(update, 1000);
