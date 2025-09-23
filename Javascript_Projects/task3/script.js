/*var form = document.querySelector("form");
var inps = document.querySelectorAll("inp1");
var h4 = document.querySelector("h4");

var inp2 = document.querySelector("#inp2");
var inp3 = document.querySelector("#inp3");
var inp4 = document.querySelector("#inp4");
var inp5 = document.querySelector("#inp5");
var inp6 = document.querySelector("#inp6"); * /



form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    if (inp1.value === '' || inp2.value === '' || inp3.value === '' || inp4.value === '' || inp5.value === '' || inp6.value === '') {
        h4.textContent = "error, some fields are blank.";
        h4.style.color = "black";
    } else {
        h4.textContent = 'successfully submited';
        h4.style.color = "black"
    }

}) */
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"], select');
var radios = document.querySelectorAll('input[type="radio"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev) {
    ev.preventDefault();

    var isRadioChecked = Array.from(radios).some(radio => radio.checked);
    var isEmpty = false;

    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty || !isRadioChecked) {
        h4.textContent = "Error: Some fields are blank.";
        h4.style.color = "red";
    } else {
        h4.textContent = "Successfully submitted!";
        h4.style.color = "green";
    }
});