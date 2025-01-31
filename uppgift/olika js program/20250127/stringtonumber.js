// 1. Sträng till Nummer
function stringToNumber(str) {
    const number = Number(str); // Konvertera strängen till ett nummer
    return isNaN(number) ? "Ogiltig sträng, kan inte konverteras till nummer" : number;
}

// 2. Nummer till Sträng
function numberToString(num) {
    return num.toString(); // Konvertera numret till en sträng
}

// 3. Värde till Boolean
function valueToBoolean(value) {
    return !!value; // Konvertera värdet till ett booleskt värde
}

// Exempelanvändning
let str = "101";
let number = stringToNumber(str); // Konvertera sträng till nummer
console.log(number); // 101

let num = 42;
let strNum = numberToString(num); // Konvertera nummer till sträng
console.log(strNum); // "42"

let value = "hejsan";
let isTruthy = valueToBoolean(value); // Konvertera till boolean
console.log(isTruthy); // true


