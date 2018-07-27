function palindrome(str) {
    // Helpers
    function cleanStr() {
        let regex = /[\W_]/g;
        let cleandedStr = str.replace(regex,'');
        return cleandedStr;
    }

    function reverseStr(str) {
        return str.split("").reverse().join("");
    }

    //Main function
    let sanitizedstr = cleanStr().toLowerCase();
    let reversedStr = reverseStr(sanitizedstr);
    // console.log(`String limpio: ${sanitizedstr}`);
    // console.log(`String invertido: ${reversedStr}`);
    return sanitizedstr === reversedStr;
}

let testStr = "My age is 0, 0 si ega ym.";
console.log(testStr + "is palindrome?: ");
console.log(palindrome(testStr));