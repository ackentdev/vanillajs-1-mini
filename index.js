console.log("Hello, world!")

var count = 0

function increase() {
    count++;
    counter.innerText = count;
}

function decrease() {
    count--;
    counter.innerText = count;
}

function reset() {
    count = 0;
    counter.innerHTML = "<mark>" + count + "</mark>";
    // Template String Version
    //  '<mark>${count}</mark>'
}

let counter = document.getElementById("counter");

function selectTheme(theme) {
// Why doesn't this work?
// document.getElementsByTagName("body")[0] = theme;
// document.getElementsByTagName("main")[0] = theme;
// const buttons = document.getElementsByTagName("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].className = theme;
// }
let body = document.getElementsByTagName("body");
body[0].className = theme;
let main = document.getElementsByTagName("main");
main[0].className = theme;

for (let i = 0; i<document.getElementsByTagName.length; i++) {
    document.getElementsByTagName[i] = theme;
}
}
