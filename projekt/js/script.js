//popout om mig
function openpopupaboutme() {
  window.open(
    "about.html",
    "popupWindow",
    "width=400,height=300,left=100,top=100"
  );
}

//popout kontakta mig
function openpopupcontactme() {
  window.open(
    "contact.html",
    "popupWindow",
    "width=400,height=300,left=100,top=100"
  );
}

//dagar hälsning
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  document.getElementById("day").textContent = days[today];