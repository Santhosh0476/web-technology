// 1. returning the character at a specified location
function getCharAt(str, index) {
    return str.charAt(index);
}

// 2. returns the unicode of the character at the specified index
function getUnicodeAt(str, index) {
    return str.codePointAt(index);
}

// 3. joins two or more strings and returns a new joined string
function joinStrings(str1, str2) {
    return str1.concat(str2);
}

// 4. converts unicode value to string
function unicodeToStr(unicode) {
    return String.fromCodePoint(unicode);
}

// 5. converts a string to uppercase letters
function toUpperCase(str) {
    return str.toUpperCase();
}

// Example usage:
let str = "Hello, World!";
console.log(getCharAt(str, 0)); // Output: "H"
console.log(getUnicodeAt(str, 0)); // Output: 72
console.log(joinStrings(str, " It's me!")); // Output: "Hello, World! It's me!"
console.log(unicodeToStr(72)); // Output: "H"
console.log(toUpperCase(str)); // Output: "HELLO, WORLD!"