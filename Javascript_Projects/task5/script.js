var btn = document.querySelector("button");
var h3 = document.querySelector("h3");
btn.addEventListener("click", function() {
    var count = 0;
    setInterval(function() {
        h3.textContent = count;
        count++;
    }, 1000);
})