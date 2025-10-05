const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const h3 = document.querySelector("h3");

let int;
start.addEventListener("click", function() {
    let count = 0;
    int = setInterval(function() {
        h3.textContent = count;
        count++;
    }, 1000);
});
stop.addEventListener("click", function() {
    clearInterval(int);
});