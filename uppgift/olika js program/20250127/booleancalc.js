function booleanAnd(value1, value2) {
    return value1 && value2;
    
}
function booleanOr(value1, value2) {
    return value1 || value2;
    
}
function booleanNot(value) {
    return !value;
    
}

console.log("AND")
console.log(booleanAnd(true, true)); // true
console.log(booleanAnd(true, false)); // false

console.log("OR")
console.log(booleanOr(true, false)); // true
console.log(booleanOr(false, false)); // false

console.log("NOT")
console.log(booleanNot(true)); // false
console.log(booleanNot(false)); // true




