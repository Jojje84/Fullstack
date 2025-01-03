
// Öppna popup
function openpopupaboutme() {
  document.getElementById("popup-aboutme").style.display = "flex";
}

function openpopupcontact() {
  document.getElementById("popup-contact").style.display = "flex";
}

// Stäng popup
function closePopupAboutMe() {
  document.getElementById("popup-aboutme").style.display = "none";
}

function closePopupContact() {
  document.getElementById("popup-contact").style.display = "none";
}

//dagar hälsning
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date().getDay();
document.getElementById("day").textContent = days[today];


