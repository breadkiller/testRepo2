let time = new Date();
let hour = time.getHours();
let dayContent = document.getElementById("day");
let ssContent = document.getElementById("sunset");
let nightContent = document.getElementById("night");

// day 222
if (hour >= 7 && hour < 17) {
  dayContent.style.display = "flex";
  ssContent.style.display = "none"
  nightContent.style.display = "none";
}

// sunset
if (hour >= 17 && hour < 18) {
  dayContent.style.display = "none";
  ssContent.style.display = "flex"
  nightContent.style.display = "none";
}

// night
if (hour >= 19 && hour < 24) {
  dayContent.style.display = "none";
  ssContent.style.display = "none"
  nightContent.style.display = "flex";
}

if (hour >= 0 && hour < 7) {
  dayContent.style.display = "none";
  ssContent.style.display = "none"
  nightContent.style.display = "flex";
}