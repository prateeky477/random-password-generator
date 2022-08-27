const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
var a = ""
var b = ""
function getRandom() {
    pass1.innerText = ""
    pass2.innerText = ""
    for (let i = 0; i < 20; i++) {
        a += characters[Math.floor(Math.random() * characters.length)]
        b += characters[Math.floor(Math.random() * characters.length)]
        // return characters[Math.floor(Math.random() * characters.length)];
    }
    pass1.innerText = a;
    pass2.textContent = b;
}

