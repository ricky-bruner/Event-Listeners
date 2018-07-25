/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

// function changeBack(){
//     let flightButton = document.querySelector("#activate-flight");
//     flightButton.textContent = "Activate Flight";
// }

function handlerFunction(){
    let section = document.querySelector("#flight");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
//     let flightButton = document.querySelector("#activate-flight");
//     flightButton.textContent = "Deactivate Flight"
//     flightButton.addEventListener("click", changeBack);
}

document.querySelector("#activate-flight").addEventListener("click", handlerFunction);

/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

function handlerFunction2(){
    let section = document.querySelector("#mindreading");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
}

function handlerFunction3(){
    let section = document.querySelector("#xray");
    section.classList.toggle("enabled");
    section.classList.toggle("disabled");
}
document.querySelector("#activate-mindreading").addEventListener("click", handlerFunction2);
document.querySelector("#activate-xray").addEventListener("click", handlerFunction3);

/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

document.querySelector("#activate-all").addEventListener("click", handlerFunction4)
document.querySelector("#deactivate-all").addEventListener("click", handlerFunction5)