let element = document.createElement("div");

let textNode = document.createTextNode("Hello,,, test");
element.appendChild(textNode);

element.classList.add("minKlass");
element.style.color = "green";
element.style.background = "black";
element.style.padding = "10px";
element.style.margin = "10px";

document.body.appendChild(element);

let parrent = document.getElementById("element");
if (parrent) {
  // Lägg till och ta bort elementet, om förälder finns
  parrent.appendChild(element);
  setTimeout(() => {
    parrent.removeChild(element);
  }, 3000); // Tar bort elementet efter 3 sekunder (exempel)
}

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.textContent = "Texten har ändrats!";
});

// Bonus: Lägg till en knapp som triggar ändringen
let button = document.createElement("button");
button.textContent = "Ändra text i <p>";
button.addEventListener("click", () => {
  paragraphs.forEach((p) => {
    p.textContent = "Texten ändrades via knappen!";
  });
});
document.body.appendChild(button);
