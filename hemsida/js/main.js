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
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
document.getElementById("day").textContent = days[today];

// notifikaiton
document.addEventListener("DOMContentLoaded", () => {
  const notification = document.querySelector(".notification");
  const overlay = document.querySelector(".overlay");

  // Kontrollera sessionStorage för popup-flaggan
  if (!sessionStorage.getItem("popupShown")) {
    // Visa popup och overlay om den inte har visats tidigare i sessionen
    notification.classList.remove("hidden");
    notification.classList.add("show");
    overlay.classList.remove("hidden");

    // Markera i sessionStorage att popupen har visats
    sessionStorage.setItem("popupShown", "true");
  }

  // Hantera stängningsknappen
  const btn = document.querySelector(".btn-primary");
  btn.addEventListener("click", () => {
    notification.classList.remove("show");
    notification.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});

// klocka
const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
  var now = new Date();

  document.getElementById("datetime").innerText =
    now.getFullYear() +
    "-" +
    zeroPadding(now.getMonth() + 1, 2) +
    "-" +
    zeroPadding(now.getDate(), 2) +
    " " +
    WEEK[now.getDay()] +
    " " +
    zeroPadding(now.getHours(), 2) +
    ":" +
    zeroPadding(now.getMinutes(), 2) +
    ":" +
    zeroPadding(now.getSeconds(), 2);
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
  return String(num).padStart(digit, "0");
}

//Väder api
async function Weather() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stockholm?unitGroup=metric&include=hours%2Cdays&key=YESGH5L5RFTW8JE53VQFJKAWE&contentType=json"
    );

    const data = await response.json();
    console.log(data);
    // Uppdaterar textinnehåll för platsen
    document.getElementById("location").textContent = data.resolvedAddress;

    // Uppdaterar temperatur och beskrivning
    document.getElementById("temperature").textContent = `${data.days[0].temp}°C`;
    document.getElementById("description").textContent = data.days[0].description;

    // Hämta ikonnamn från API
    const icon = data.days[0].icon; // T.ex. "partly-cloudy-day"
    console.log("Icon from API:", icon); // Logga ikonnamnet för felsökning

    // Skapa URL för ikonen
    const iconUrl = `assets/icons/${icon}.svg`; // Anta att ikonerna finns i mappen "icons"
    console.log("Generated icon URL:", iconUrl); // Logga den genererade URL:en

    // Uppdatera ikonen i HTML
    document.getElementById("icon").src = iconUrl;
  } catch (error) {
    console.error("Fel vid hämtning av väderdata:", error);
  }
}
// Kör funktionen när sidan laddas
document.addEventListener("DOMContentLoaded", Weather);

//dark mode

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
