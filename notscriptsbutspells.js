function colorchange() {
    const tomato = document.getElementById("tomato");
    const juice = document.getElementById("juice");
    const eDrink = document.getElementById("eDrink");
    const box = document.getElementById("spellcasting")
    if (tomato.checked) {
        box.style.backgroundColor = "crimson";
    }
    else if (juice.checked) {
        box.style.backgroundColor = "coral";
    }
    else if (eDrink.checked) {
        box.style.backgroundColor = "plum";
    }
    else {
        box.style.backgroundColor = "";
    }
    
}
