document.getElementById("themeButton").addEventListener("click", function () {
  const currentBgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg-color");
  if (currentBgColor.trim() === "white") {
    document.documentElement.style.setProperty("--bg-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
  } else {
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
  }
});
