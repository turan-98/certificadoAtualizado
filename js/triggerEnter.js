"strict mode"

var formFiled = document.querySelector("#container-field"),
    Inputnome = document.querySelector("#nome");

Inputnome.addEventListener("keyup", function(event) {


    if (event.keyCode === 13 && Inputnome.value >= 1) {
        formFiled.submit();
    } 
}, false);

