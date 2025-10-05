/*var form = document.querySelector("form");
let inps = document.querySelectorAll("inp1");
let h4 = document.querySelector("h4");

let inp2 = document.querySelector("#inp2");
let inp3 = document.querySelector("#inp3");
let inp4 = document.querySelector("#inp4");
let inp5 = document.querySelector("#inp5");
let inp6 = document.querySelector("#inp6"); * /



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
let form = document.querySelector("form");
let inps = document.querySelectorAll('input[type="text"], select');
let radios = document.querySelectorAll('input[type="radio"]');
let h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let isRadioChecked = Array.from(radios).some(radio => radio.checked);
    let isEmpty = false;

    for (let i = 0; i < inps.length; i++) {
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