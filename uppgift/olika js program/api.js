async function updateWeather() {
  try {
    // Hämta väderdata från Visual Crossing API
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/stockholm?unitGroup=metric&include=hours%2Cdays&key=YESGH5L5RFTW8JE53VQFJKAWE&contentType=json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    // Uppdatera HTML-element med väderdata
    document.getElementById("location").textContent = data.resolvedAddress;
    document.getElementById(
      "temperature"
    ).textContent = `${data.days[0].temp}°C`;
    document.getElementById("description").textContent =
      data.days[0].description;

    // Hämta ikonnamn från API
    const icon = data.days[0].icon; // T.ex. "partly-cloudy-day"
    console.log("Icon from API:", icon); // Logga ikonnamnet för felsökning

    // Skapa URL för ikonen
    const iconUrl = `icons/${icon}.svg`; // Anta att ikonerna finns i mappen "icons"
    console.log("Generated icon URL:", iconUrl); // Logga den genererade URL:en

    // Uppdatera ikonen i HTML
    document.getElementById("icon").src = iconUrl;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Kör funktionen när sidan laddas
document.addEventListener("DOMContentLoaded", updateWeather);
